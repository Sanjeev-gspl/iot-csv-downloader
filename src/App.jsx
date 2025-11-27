// // App.jsx
// import React, { useState } from "react";
// import DownloadCSVButton from "./components/DownloadCSVButton";

// export default function App() {
//   const [deviceId, setDeviceId] = useState("raspi_modbus_01");
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");

//   // Convert date inputs to timestamps
//   const startTime = start ? new Date(`${start}T00:00:00`).getTime() : Date.now() - 3600 * 1000;
//   const endTime = end ? new Date(`${end}T23:59:59`).getTime() : Date.now();

//   const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData"; // replace with your actual API

//   return (
//     <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
//       <h1>Meter Data CSV</h1>

//       <div style={{ marginBottom: 20 }}>
//         <label>
//           Device ID:
//           <input value={deviceId} onChange={(e) => setDeviceId(e.target.value)} />
//         </label>
//       </div>

//       <div style={{ marginBottom: 20 }}>
//         <label>
//           Start Date:
//           <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
//         </label>
//         <label style={{ marginLeft: 10 }}>
//           End Date:
//           <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
//         </label>
//       </div>

//       <DownloadCSVButton
//         apiUrl={apiUrl}
//         deviceId={deviceId}
//         startTime={startTime}
//         endTime={endTime}
//       />
//     </div>
//   );
// }


// App.jsx

// import React, { useState } from "react";
// import DownloadCSVButton from "./components/DownloadCSVButton";

// export default function App() {
//   const [deviceId, setDeviceId] = useState("raspi_modbus_01");
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");

//   const startTime = start ? new Date(`${start}T00:00:00`).getTime() : Date.now() - 3600 * 1000;
//   const endTime = end ? new Date(`${end}T23:59:59`).getTime() : Date.now();

//   const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData";

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="w-full p-8 max-w-2xl text-center">

//         <h1 className="text-2xl font-bold mb-6">Meter Data CSV</h1>

//         {/* Device ID */}
//         <div className="mb-6 flex flex-col items-start">
//           <label className="font-medium mb-1">Device ID:</label>
//           <input
//             className="border border-gray-300 rounded p-2 w-full"
//             value={deviceId}
//             onChange={(e) => setDeviceId(e.target.value)}
//           />
//         </div>

//         {/* Date range */}
//         <div className="mb-6 flex flex-col items-start">
//           <label className="font-medium mb-1">Start Date:</label>
//           <input
//             type="date"
//             className="border border-gray-300 rounded p-2 w-full mb-4"
//             value={start}
//             onChange={(e) => setStart(e.target.value)}
//           />

//           <label className="font-medium mb-1">End Date:</label>
//           <input
//             type="date"
//             className="border border-gray-300 rounded p-2 w-full"
//             value={end}
//             onChange={(e) => setEnd(e.target.value)}
//           />
//         </div>

//         <DownloadCSVButton
//           apiUrl={apiUrl}
//           deviceId={deviceId}
//           startTime={startTime}
//           endTime={endTime}
//         />
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import DownloadCSVButton from "./components/DownloadCSVButton";

// export default function App() {
//   const [deviceId, setDeviceId] = useState("raspi_modbus_01");
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");

//   const startTime = start ? new Date(`${start}T00:00:00`).getTime() : Date.now() - 3600 * 1000;
//   const endTime = end ? new Date(`${end}T23:59:59`).getTime() : Date.now();

//   const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData";

//   return (
//     // This outer div centers the card on the screen
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
      
//       {/* Changed max-w-2xl to max-w-md (looks neater/more centered for forms) */}
//       <div className="w-full p-8 max-w-md text-center bg-white shadow-lg rounded-xl">

//         <h1 className="text-2xl font-bold mb-6">Meter Data CSV</h1>

//         {/* Device ID - Changed items-start to items-center */}
//         <div className="mb-6 flex flex-col items-center">
//           <label className="font-medium mb-1">Device ID:</label>
//           <input
//             className="border border-gray-300 rounded p-2 w-full text-center" 
//             value={deviceId}
//             onChange={(e) => setDeviceId(e.target.value)}
//           />
//         </div>

//         {/* Date range - Changed items-start to items-center */}
//         <div className="mb-6 flex flex-col items-center">
//           <label className="font-medium mb-1">Start Date:</label>
//           <input
//             type="date"
//             className="border border-gray-300 rounded p-2 w-full mb-4 text-center"
//             value={start}
//             onChange={(e) => setStart(e.target.value)}
//           />

//           <label className="font-medium mb-1">End Date:</label>
//           <input
//             type="date"
//             className="border border-gray-300 rounded p-2 w-full text-center"
//             value={end}
//             onChange={(e) => setEnd(e.target.value)}
//           />
//         </div>

//         <div className="flex justify-center">
//             <DownloadCSVButton
//             apiUrl={apiUrl}
//             deviceId={deviceId}
//             startTime={startTime}
//             endTime={endTime}
//             />
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import IoTCharts from "./components/IoTChart"; // Ensure this file exists
// import DownloadCSVButton from "./components/DownloadCSVButton";

// export default function App() {
//   // Input State
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
//   const [interval, setInterval] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // Chart State (Only updates when you click "Fetch")
//   const [chartStartTime, setChartStartTime] = useState(Date.now() - 3600 * 1000); // Default 1 hour
//   const [chartEndTime, setChartEndTime] = useState(Date.now());
  
//   // Configuration
//   const deviceId = "raspi_modbus_01"; // Make sure this matches your actual device ID
//   const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData";

//   const handleFetchGraphs = () => {
//     setLoading(true);
//     // Convert string dates to timestamps
//     // If date is empty, default to last 24 hours or similar logic
//     const sTime = start ? new Date(`${start}T00:00:00`).getTime() : Date.now() - 3600 * 1000;
//     const eTime = end ? new Date(`${end}T23:59:59`).getTime() : Date.now();
    
//     setChartStartTime(sTime);
//     setChartEndTime(eTime);
//   };

//   const handleLoadingComplete = () => {
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center py-10 font-sans">
      
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">IoT Dashboard</h1>

//       {/* --- CONTROLS WINDOW --- */}
//       <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-xl mb-8 flex flex-wrap gap-6 items-end justify-center">
        
//         {/* Start Date */}
//         <div className="flex flex-col">
//           <label className="font-medium mb-1 text-sm text-gray-600">Start Date</label>
//           <input
//             type="date"
//             className="border border-gray-300 rounded p-2 w-40 text-center"
//             value={start}
//             onChange={(e) => setStart(e.target.value)}
//           />
//         </div>

//         {/* End Date */}
//         <div className="flex flex-col">
//           <label className="font-medium mb-1 text-sm text-gray-600">End Date</label>
//           <input
//             type="date"
//             className="border border-gray-300 rounded p-2 w-40 text-center"
//             value={end}
//             onChange={(e) => setEnd(e.target.value)}
//           />
//         </div>

//         {/* Fetch Button */}
//         {/* <button 
//           onClick={handleFetchGraphs} 
//           disabled={loading}
//           className={`font-bold py-2 px-6 rounded transition text-white pb-2.5 ${
//             loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//           }`}
//         >
//           {loading ? 'Loading...' : 'Fetch Graphs'}
//         </button> */}

//         {/* Download Button */}
//         <div className="pb-0.5">
//             <DownloadCSVButton
//                 apiUrl={apiUrl}
//                 deviceId={deviceId}
//                 startTime={chartStartTime}
//                 endTime={chartEndTime}
//             />
//         </div>
//       </div>

//       {/* --- CHARTS CONTAINER --- */}
//       <div className="w-full max-w-5xl px-4">
//         <IoTCharts
//           apiUrl={apiUrl}
//           deviceId={deviceId}
//           startTime={chartStartTime}
//           endTime={chartEndTime}
//           onLoadingComplete={handleLoadingComplete}
//         />
//       </div>

//     </div>
//   );
// }


// import React, { useState } from "react";
// import IoTCharts from "./components/IoTChart";
// import DownloadCSVButton from "./components/DownloadCSVButton";

// export default function App() {
//   // Input State
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
//   const [loading, setLoading] = useState(false);

//   // The chart type selection 🔥
//   const [selectedGroup, setSelectedGroup] = useState("voltage");

//   // Chart State (Only updates when user clicks fetch)
//   const [chartStartTime, setChartStartTime] = useState(Date.now() - 3600 * 1000);
//   const [chartEndTime, setChartEndTime] = useState(Date.now());

//   // Fixed config
//   const deviceId = "raspi_modbus_01";
//   const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData";

//   const handleFetchGraphs = () => {
//     setLoading(true);

//     const sTime = start ? new Date(`${start}T00:00:00`).getTime() : Date.now() - 3600 * 1000;
//     const eTime = end ? new Date(`${end}T23:59:59`).getTime() : Date.now();

//     setChartStartTime(sTime);
//     setChartEndTime(eTime);
//   };

//   const handleLoadingComplete = () => {
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center py-10 font-sans">
      
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">IoT Dashboard</h1>

//       {/* Control Panel */}
//       <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-xl mb-8 flex flex-wrap gap-6 items-end justify-center">

//         {/* Start Date */}
//         <div className="flex flex-col">
//           <label className="font-medium mb-1 text-sm text-gray-600">Start Date</label>
//           <input
//             type="date"
//             className="border border-gray-300 rounded p-2 w-40 text-center"
//             value={start}
//             onChange={(e) => setStart(e.target.value)}
//           />
//         </div>

//         {/* End Date */}
//         <div className="flex flex-col">
//           <label className="font-medium mb-1 text-sm text-gray-600">End Date</label>
//           <input
//             type="date"
//             className="border border-gray-300 rounded p-2 w-40 text-center"
//             value={end}
//             onChange={(e) => setEnd(e.target.value)}
//           />
//         </div>

//         {/* Chart Dropdown */}
//         <div className="flex flex-col">
//           <label className="font-medium mb-1 text-sm text-gray-600">Select Chart</label>
//           <select
//             className="border border-gray-300 rounded p-2 w-48 text-center"
//             value={selectedGroup}
//             onChange={(e) => setSelectedGroup(e.target.value)}
//           >
//             <option value="voltage">Voltage (V_A_N / V_B_N / V_C_N)</option>
//             <option value="current">Current (I_A / I_B / I_C)</option>
//             <option value="power">Power (A/B/C)</option>
//             <option value="power_total">Total Power</option>
//             <option value="pf">Power Factor (PF_A/B/C)</option>
//             <option value="pf_total">Total PF</option>
//             <option value="frequency">Frequency</option>
//           </select>
//         </div>

//         {/* Fetch Button */}
//         <button
//           onClick={handleFetchGraphs}
//           disabled={loading}
//           className={`font-bold py-2 px-6 rounded text-white pb-2.5 ${
//             loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Loading..." : "Fetch"}
//         </button>

//         {/* CSV Button */}
//         <div className="pb-0.5">
//           <DownloadCSVButton
//             apiUrl={apiUrl}
//             deviceId={deviceId}
//             startTime={chartStartTime}
//             endTime={chartEndTime}
//           />
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="w-full max-w-5xl px-4">
//         <IoTCharts
//           apiUrl={apiUrl}
//           deviceId={deviceId}
//           startTime={chartStartTime}
//           endTime={chartEndTime}
//           selectedGroup={selectedGroup}     // <<< 🔥 KEY CHANGE
//           onLoadingComplete={handleLoadingComplete}
//         />
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import IoTCharts from "./components/IoTChart";
// import DownloadCSVButton from "./components/DownloadCSVButton";

// export default function App() {
//   const deviceId = "raspi_modbus_01";
//   const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData";

//   // ---------------- GRAPH INPUTS ----------------
//   const [graphStart, setGraphStart] = useState("");
//   const [graphEnd, setGraphEnd] = useState("");

//   const [chartStartTime, setChartStartTime] = useState(Date.now() - 3600 * 1000);
//   const [chartEndTime, setChartEndTime] = useState(Date.now());

//   const [selectedGroup, setSelectedGroup] = useState("voltage");
//   const [loading, setLoading] = useState(false);

//   const handleFetchGraphs = () => {
//     setLoading(true);

//     const s = graphStart ? new Date(`${graphStart}T00:00:00`).getTime() : Date.now() - 3600 * 1000;
//     const e = graphEnd ? new Date(`${graphEnd}T23:59:59`).getTime() : Date.now();

//     setChartStartTime(s);
//     setChartEndTime(e);
//   };

//   const handleGraphLoadComplete = () => {
//     setLoading(false);
//   };

//   // ---------------- CSV INPUTS ----------------
//   const [csvStart, setCsvStart] = useState("");
//   const [csvEnd, setCsvEnd] = useState("");

//   const csvStartTime = csvStart
//     ? new Date(`${csvStart}T00:00:00`).getTime()
//     : Date.now() - 24 * 3600 * 1000;

//   const csvEndTime = csvEnd
//     ? new Date(`${csvEnd}T23:59:59`).getTime()
//     : Date.now();

//   return (
//     <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center py-10">
      
//       <h1 className="text-3xl font mb-8 text-gray-800">Ruhrpumpen Data</h1>

//       {/* ---------------- GRAPH CONTROL PANEL ---------------- */}
//       <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-xl mb-10">
//         <h2 className="text-xl font-semibold mb-4">Graph Controls</h2>

//         {/* <div className="flex flex-wrap gap-6"> */}
//         <div className="flex flex-wrap gap-6 items-end justify-center text-center w-full">
          
//           {/* Graph Start */}
//           {/* <div className="flex flex-col">
//             <label className="font-medium mb-1 text-sm text-gray-600">Start Date</label>
//             <input
//               type="date"
//               className="border border-gray-300 rounded p-2"
//               value={graphStart}
//               onChange={(e) => setGraphStart(e.target.value)}
//             />
//           </div> */}

//           {/* Graph End */}
//           {/* <div className="flex flex-col">
//             <label className="font-medium mb-1 text-sm text-gray-600">End Date</label>
//             <input
//               type="date"
//               className="border border-gray-300 rounded p-2"
//               value={graphEnd}
//               onChange={(e) => setGraphEnd(e.target.value)}
//             />
//           </div> */}

//           {/* Variable Selector */}
//           <div className="flex flex-col">
//             <label className="font-medium mb-1 text-sm text-gray-600">Select Graph</label>
//             <select
//               className="border border-gray-300 rounded p-2"
//               value={selectedGroup}
//               onChange={(e) => setSelectedGroup(e.target.value)}
//             >
//               <option value="voltage">Voltage</option>
//               <option value="current">Current</option>
//               <option value="power">Power 3-Phase</option>
//               <option value="power_total">Power Total</option>
//               <option value="pf">Power Factor</option>
//               <option value="pf_total">PF Total</option>
//               <option value="frequency">Frequency</option>
//             </select>
//           </div>

//           {/* FETCH BUTTON */}
//           {/* <button
//             onClick={handleFetchGraphs}
//             disabled={loading}
//             className={`font-bold py-2 px-6 rounded text-white ${
//               loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             {loading ? "Loading..." : "Fetch"}
//           </button> */}
//         </div>
//       </div>

//       {/* ---------------- CHART ---------------- */}
//       <div className="w-full max-w-5xl px-4">
//         <IoTCharts
//           apiUrl={apiUrl}
//           deviceId={deviceId}
//           startTime={chartStartTime}
//           endTime={chartEndTime}
//           selectedGroup={selectedGroup}
//           onLoadingComplete={handleGraphLoadComplete}
//         />
//       </div>

//       {/* ---------------- CSV DOWNLOAD PANEL ---------------- */}
//       <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-xl mt-10">
//         <h2 className="text-xl font-semibold mb-4">Download CSV</h2>

//         <div className="flex flex-wrap gap-6 items-end justify-center text-center w-full">


//           {/* CSV Start */}
//           <div className="flex flex-col">
//             <label className="font-medium mb-1 text-sm text-gray-600">Start Date</label>
//             <input
//               type="date"
//               className="border border-gray-300 rounded p-2"
//               value={csvStart}
//               onChange={(e) => setCsvStart(e.target.value)}
//             />
//           </div>

//           {/* CSV End */}
//           <div className="flex flex-col">
//             <label className="font-medium mb-1 text-sm text-gray-600">End Date</label>
//             <input
//               type="date"
//               className="border border-gray-300 rounded p-2"
//               value={csvEnd}
//               onChange={(e) => setCsvEnd(e.target.value)}
//             />
//           </div>

//           {/* DOWNLOAD BUTTON */}
//           <DownloadCSVButton
//             apiUrl={apiUrl}
//             deviceId={deviceId}
//             startTime={csvStartTime}
//             endTime={csvEndTime}
//           />
//         </div>
//       </div>

//     </div>
//   );
// }


import React, { useState } from "react";
import IoTCharts from "./components/IoTChart";
import DownloadCSVButton from "./components/DownloadCSVButton";

export default function App() {
  const deviceId = "raspi_modbus_01";
  const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData";

  // ---------------- GRAPH INPUTS ----------------
  const [chartStartTime, setChartStartTime] = useState(Date.now() - 3600 * 1000);
  const [chartEndTime, setChartEndTime] = useState(Date.now());

  const [selectedGroup, setSelectedGroup] = useState("voltage");

  // ✅ Resolution helper (NEW)
  const getResolution = (start, end) => {
    const diff = end - start;
    return diff <= 15 * 60 * 1000 ? "raw" : "1m";
  };

  // ---------------- CSV INPUTS ----------------
  const [csvStart, setCsvStart] = useState("");
  const [csvEnd, setCsvEnd] = useState("");

  const csvStartTime = csvStart
    ? new Date(`${csvStart}T00:00:00`).getTime()
    : Date.now() - 24 * 3600 * 1000;

  const csvEndTime = csvEnd
    ? new Date(`${csvEnd}T23:59:59`).getTime()
    : Date.now();

  // ✅ CSV resolution (NEW)
  const csvResolution = getResolution(csvStartTime, csvEndTime);

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center py-10">

      <h1 className="text-3xl font mb-8 text-gray-800">Ruhrpumpen Data</h1>

      {/* ---------------- GRAPH CONTROLS ---------------- */}
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-xl mb-10">
        <h2 className="text-xl font-semibold mb-4">Graph Controls</h2>

        <div className="flex flex-wrap gap-6 items-end justify-center text-center w-full">
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-sm text-gray-600">
              Select Graph
            </label>
            <select
              className="border border-gray-300 rounded p-2"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
            >
              <option value="voltage">Voltage</option>
              <option value="current">Current</option>
              <option value="power">Power 3-Phase</option>
              <option value="power_total">Power Total</option>
              <option value="pf">Power Factor</option>
              <option value="pf_total">PF Total</option>
              <option value="frequency">Frequency</option>
            </select>
          </div>
        </div>
      </div>

      {/* ---------------- CHART ---------------- */}
      <div className="w-full max-w-5xl px-4">
        <IoTCharts
          apiUrl={apiUrl}
          deviceId={deviceId}
          startTime={chartStartTime}
          endTime={chartEndTime}
          selectedGroup={selectedGroup}
        />
      </div>

      {/* ---------------- CSV DOWNLOAD ---------------- */}
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-xl mt-10">
        <h2 className="text-xl font-semibold mb-4">Download CSV</h2>

        <div className="flex flex-wrap gap-6 items-end justify-center text-center w-full">
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-sm text-gray-600">
              Start Date
            </label>
            <input
              type="date"
              className="border border-gray-300 rounded p-2"
              value={csvStart}
              onChange={(e) => setCsvStart(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1 text-sm text-gray-600">
              End Date
            </label>
            <input
              type="date"
              className="border border-gray-300 rounded p-2"
              value={csvEnd}
              onChange={(e) => setCsvEnd(e.target.value)}
            />
          </div>

          {/* ✅ ONLY change here: resolution added */}
          <DownloadCSVButton
            apiUrl={apiUrl}
            deviceId={deviceId}
            startTime={csvStartTime}
            endTime={csvEndTime}
            resolution={csvResolution}
          />
        </div>
      </div>
    </div>
  );
}
