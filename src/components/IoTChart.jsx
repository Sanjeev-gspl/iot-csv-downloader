import React, { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function IoTCharts({
  apiUrl, deviceId, startTime, endTime, selectedGroup, onLoadingComplete
}) {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams({
          device_id: deviceId,
          start_timestamp: startTime,
          end_timestamp: endTime,
        });

        const response = await fetch(`${apiUrl}?${params}`);
        const raw = await response.json();
        const arr = raw.items || [];

        const formatted = arr.map((row) => {
          const payload = row.payload || {};
          const ts = row.timestamp || payload.timestamp;
          const tsVal = new Date(ts).getTime();

          return {
            ...payload,
            timestamp: tsVal,
            timeStr: new Date(tsVal).toLocaleTimeString(),
          };
        });

        formatted.sort((a, b) => a.timestamp - b.timestamp);
        setData(formatted);

      } catch (err) {
        console.error(err);
      } finally {
        if (onLoadingComplete) onLoadingComplete();
      }
    };

    fetchData();
  }, [startTime, endTime, deviceId, apiUrl]);

  if (data.length === 0)
    return <div className="text-center text-gray-500 p-6">No data available</div>;

  // ---- CHART CONFIG ----

  const chartConfigs = {
    voltage: {
      title: "Voltage (Phase to Neutral)",
      lines: [
        { key: "V_A_N", color: "#8884d8", label: "V_A_N" },
        { key: "V_B_N", color: "#82ca9d", label: "V_B_N" },
        { key: "V_C_N", color: "#ffc658", label: "V_C_N" },
      ],
    },
    current: {
      title: "Current",
      lines: [
        { key: "I_A", color: "#8884d8", label: "I_A" },
        { key: "I_B", color: "#82ca9d", label: "I_B" },
        { key: "I_C", color: "#ffc658", label: "I_C" },
      ],
    },
    power: {
      title: "3-Phase Power",
      lines: [
        { key: "Power_A", color: "#8884d8", label: "Power_A" },
        { key: "Power_B", color: "#82ca9d", label: "Power_B" },
        { key: "Power_C", color: "#ffc658", label: "Power_C" },
      ],
    },
    power_total: {
      title: "Total Power",
      lines: [
        { key: "Power_Total", color: "#ff7300", label: "Power_Total" },
      ],
    },
    pf: {
      title: "Power Factor",
      lines: [
        { key: "PF_A", color: "#8884d8", label: "PF_A" },
        { key: "PF_B", color: "#82ca9d", label: "PF_B" },
        { key: "PF_C", color: "#ffc658", label: "PF_C" },
      ],
    },
    pf_total: {
      title: "Total Power Factor",
      lines: [
        { key: "PF_Total", color: "#ff7300", label: "PF_Total" },
      ],
    },
    frequency: {
      title: "Frequency",
      lines: [
        { key: "Frequency", color: "#8884d8", label: "Frequency" },
      ],
    },
  };

  const config = chartConfigs[selectedGroup];

  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-xl font-semibold text-center mb-4">{config.title}</h2>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timeStr" />
            <YAxis />
            <Tooltip />
            <Legend />
            {config.lines.map((line) => (
              <Line
                key={line.key}
                type="monotone"
                dataKey={line.key}
                stroke={line.color}
                dot={false}
                name={line.label}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
