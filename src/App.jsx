// App.jsx
import React, { useState } from "react";
import DownloadCSVButton from "./components/DownloadCSVButton";

export default function App() {
  const [deviceId, setDeviceId] = useState("raspi_modbus_01");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // Convert date inputs to timestamps
  const startTime = start ? new Date(`${start}T00:00:00`).getTime() : Date.now() - 3600 * 1000;
  const endTime = end ? new Date(`${end}T23:59:59`).getTime() : Date.now();

  const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData"; // replace with your actual API

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Meter Data CSV</h1>

      <div style={{ marginBottom: 20 }}>
        <label>
          Device ID:
          <input value={deviceId} onChange={(e) => setDeviceId(e.target.value)} />
        </label>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label>
          Start Date:
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        </label>
        <label style={{ marginLeft: 10 }}>
          End Date:
          <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
        </label>
      </div>

      <DownloadCSVButton
        apiUrl={apiUrl}
        deviceId={deviceId}
        startTime={startTime}
        endTime={endTime}
      />
    </div>
  );
}
