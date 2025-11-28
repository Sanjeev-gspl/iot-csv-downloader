// DownloadCSVButton.jsx
// import React from "react";

// export default function DownloadCSVButton({ apiUrl, deviceId, startTime, endTime }) {
//   const handleDownload = async () => {
//     try {
//       const url = `${apiUrl}?deviceId=${deviceId}&startTime=${startTime}&endTime=${endTime}`;
//       const res = await fetch(url);
//       const data = await res.json();

//       if (!data.items || data.items.length === 0) {
//         alert("No data available for this range!");
//         return;
//       }

//       // Dynamically get all keys from payload
//       const headersSet = new Set();
//       data.items.forEach(item => {
//         if (item.payload) {
//           Object.keys(item.payload).forEach(k => headersSet.add(k));
//         }
//       });
//       headersSet.add("deviceId");
//       // headersSet.add("timestamp");

//       const headers = Array.from(headersSet);

//       // Create CSV rows
//       const csvRows = [headers.join(",")];
//       data.items.forEach(item => {
//         const row = headers.map(h => {
//           if (h === "deviceId") return item.deviceId || "";
//           // if (h=="timestamp") return item.timestamp || "";
//           return item.payload[h] !== undefined ? item.payload[h] : "";
//         });
//         csvRows.push(row.join(","));
//       });

//       // Create and download CSV
//       const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
//       const blobUrl = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = blobUrl;
//       a.download = `iot_data_${Date.now()}.csv`;
//       a.click();
//       URL.revokeObjectURL(blobUrl);

//     } catch (err) {
//       console.error("Error fetching data:", err);
//       alert("Failed to fetch data!");
//     }
//   };

//   return <button onClick={handleDownload}>Download CSV</button>;
// }


// DownloadCSVButton.jsx
// import React from "react";

// export default function DownloadCSVButton({
//   apiUrl,
//   deviceId,
//   startTime,
//   endTime,
//   resolution
// }) {
//   const handleDownload = async () => {
//     try {
//       const url =
//         `${apiUrl}?deviceId=${deviceId}` +
//         `&startTime=${startTime}` +
//         `&endTime=${endTime}` +
//         `&resolution=${resolution}`;

//       const res = await fetch(url);
//       const data = await res.json();

//       if (!data.items || data.items.length === 0) {
//         alert("No data available for this range!");
//         return;
//       }

//       // ✅ EXACT SAME timestamp logic as before
//       const headersSet = new Set();
//       headersSet.add("timestamp");
//       headersSet.add("deviceId");

//       data.items.forEach(item => {
//         if (item.payload) {
//           Object.keys(item.payload).forEach(k => headersSet.add(k));
//         }
//       });

//       const headers = Array.from(headersSet);
//       const csvRows = [headers.join(",")];

//       data.items.forEach(item => {
//         const row = headers.map(h => {
//           if (h === "timestamp") return item.timestamp ?? "";
//           if (h === "deviceId") return item.deviceId ?? "";
//           return item.payload?.[h] ?? "";
//         });
//         csvRows.push(row.join(","));
//       });

//       const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
//       const blobUrl = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = blobUrl;
//       a.download = `iot_data_${Date.now()}.csv`;
//       a.click();
//       URL.revokeObjectURL(blobUrl);

//     } catch (err) {
//       console.error("Error fetching data:", err);
//       alert("Failed to fetch data!");
//     }
//   };

//   return (
//     <button
//       onClick={handleDownload}
//       className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
//     >
//       Download CSV
//     </button>
//   );
// }

import React, { useState } from "react";

export default function DownloadCSVButton({
  apiUrl,
  deviceId,
  startTime,
  endTime,
  resolution,
}) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const url =
        `${apiUrl}?deviceId=${deviceId}` +
        `&startTime=${startTime}` +
        `&endTime=${endTime}` +
        `&resolution=${resolution}`;

      const res = await fetch(url);
      const data = await res.json();

      if (!data.items || data.items.length === 0) {
        alert("No data available for this range");
        return;
      }

      /* ✅ Build Headers */
      const headersSet = new Set(["timestamp", "date_time", "deviceId"]);
      data.items.forEach((item) => {
        Object.keys(item.payload || {}).forEach((k) => headersSet.add(k));
      });
      const headers = Array.from(headersSet);

      /* ✅ Build Rows */
      const rows = data.items.map((item) => {
        return headers.map((h) => {
          if (h === "date_time") return `"${item.tsReadable || ""}"`;
          if (h === "timestamp") return item.timestamp || "";
          if (h === "deviceId") return item.deviceId || "";
          const val = item.payload?.[h];
          return val !== undefined && val !== null ? val : "";
        }).join(",");
      });

      const csvContent = [headers.join(","), ...rows].join("\n");
      const startStr = new Date(startTime).toISOString().slice(0, 10);
      const endStr = new Date(endTime).toISOString().slice(0, 10);
      const fileName = `Ruhrpumpen_Data_${startStr}_to_${endStr}.csv`;

      /* ✅ Trigger Download */
      const blob = new Blob([csvContent], { type: "text/csv" });
      const urlBlob = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = urlBlob;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(urlBlob);

    } catch (err) {
      console.error(err);
      alert("Failed to download CSV");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      /* 🎨 FIX:
         - bg-white: Keeps the button white so it pops on the dark background.
         - text-slate-900: Forces text to be DARK (Black/Dark Grey) so it is visible.
         - hover:bg-gray-100: Slight dimming effect on hover.
      */
      className={`
        flex items-center justify-center gap-2 
        w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-bold tracking-wide transition-all shadow-lg
        ${
          loading
            ? "bg-gray-400 text-slate-800 cursor-wait"
            : "bg-white text-slate-900 hover:bg-gray-100 shadow-white/10"
        }
      `}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>PROCESSING...</span>
        </>
      ) : (
        <>
          {/* Icon is colored blue to look nice against the white button */}
          <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>DOWNLOAD CSV</span>
        </>
      )}
    </button>
  );
}