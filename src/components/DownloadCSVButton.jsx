// DownloadCSVButton.jsx
import React from "react";

export default function DownloadCSVButton({ apiUrl, deviceId, startTime, endTime }) {
  const handleDownload = async () => {
    try {
      const url = `${apiUrl}?deviceId=${deviceId}&startTime=${startTime}&endTime=${endTime}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!data.items || data.items.length === 0) {
        alert("No data available for this range!");
        return;
      }

      // Dynamically get all keys from payload
      const headersSet = new Set();
      data.items.forEach(item => {
        if (item.payload) {
          Object.keys(item.payload).forEach(k => headersSet.add(k));
        }
      });
      headersSet.add("deviceId");
      headersSet.add("timestamp");

      const headers = Array.from(headersSet);

      // Create CSV rows
      const csvRows = [headers.join(",")];
      data.items.forEach(item => {
        const row = headers.map(h => {
          if (h === "deviceId") return item.deviceId || "";
          if (h=="timestamp") return item.timestamp || "";
          return item.payload[h] !== undefined ? item.payload[h] : "";
        });
        csvRows.push(row.join(","));
      });

      // Create and download CSV
      const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `iot_data_${Date.now()}.csv`;
      a.click();
      URL.revokeObjectURL(blobUrl);

    } catch (err) {
      console.error("Error fetching data:", err);
      alert("Failed to fetch data!");
    }
  };

  return <button onClick={handleDownload}>Download CSV</button>;
}
