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


// import React, { useState } from "react";
// import IoTCharts from "./components/IoTChart";
// import DownloadCSVButton from "./components/DownloadCSVButton";

// export default function App() {
//   const deviceId = "raspi_modbus_01";
//   const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData";

//   // ---------------- GRAPH INPUTS ----------------
//   const [chartStartTime, setChartStartTime] = useState(Date.now() - 3600 * 1000);
//   const [chartEndTime, setChartEndTime] = useState(Date.now());

//   const [selectedGroup, setSelectedGroup] = useState("voltage");

//   // ✅ Resolution helper (NEW)
//   const getResolution = (start, end) => {
//     const diff = end - start;
//     return diff <= 15 * 60 * 1000 ? "raw" : "1m";
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

//   // ✅ CSV resolution (NEW)
//   const csvResolution = getResolution(csvStartTime, csvEndTime);

//   return (
//     <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center py-10">

//       <h1 className="text-3xl font mb-8 text-gray-800">Ruhrpumpen Data</h1>

//       {/* ---------------- GRAPH CONTROLS ---------------- */}
//       <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-xl mb-10">
//         <h2 className="text-xl font-semibold mb-4">Graph Controls</h2>

//         <div className="flex flex-wrap gap-6 items-end justify-center text-center w-full">
//           <div className="flex flex-col">
//             <label className="font-medium mb-1 text-sm text-gray-600">
//               Select Graph
//             </label>
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
//           resolution={getResolution(chartStartTime, chartEndTime)}
//         />

//       </div>

//       {/* ---------------- CSV DOWNLOAD ---------------- */}
//       <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-xl mt-10">
//         <h2 className="text-xl font-semibold mb-4">Download CSV</h2>

//         <div className="flex flex-wrap gap-6 items-end justify-center text-center w-full">
//           <div className="flex flex-col">
//             <label className="font-medium mb-1 text-sm text-gray-600">
//               Start Date
//             </label>
//             <input
//               type="date"
//               className="border border-gray-300 rounded p-2"
//               value={csvStart}
//               onChange={(e) => setCsvStart(e.target.value)}
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="font-medium mb-1 text-sm text-gray-600">
//               End Date
//             </label>
//             <input
//               type="date"
//               className="border border-gray-300 rounded p-2"
//               value={csvEnd}
//               onChange={(e) => setCsvEnd(e.target.value)}
//             />
//           </div>

//           {/* ✅ ONLY change here: resolution added */}
//           <DownloadCSVButton
//             apiUrl={apiUrl}
//             deviceId={deviceId}
//             startTime={csvStartTime}
//             endTime={csvEndTime}
//             resolution={csvResolution}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import IoTCharts from "./components/IoTChart";
// import DownloadCSVButton from "./components/DownloadCSVButton";

// /* ✅ Force IST date → epoch */
// const istTime = (dateStr, isEnd = false) => {
//   const t = isEnd ? "23:59:59" : "00:00:00";
//   return new Date(`${dateStr}T${t}+05:30`).getTime();
// };

// export default function App() {
//   const deviceId = "raspi_modbus_01";
//   const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData";

//   /* ----------- GRAPH RANGE ----------- */
//   const today = new Date().toISOString().slice(0, 10);
//   const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

//   const [startDate, setStartDate] = useState(yesterday);
//   const [endDate, setEndDate] = useState(yesterday);

//   const startTime = istTime(startDate);
//   const endTime = istTime(endDate, true);

//   /* ----------- GRAPH TYPE ----------- */
//   const [selectedGroup, setSelectedGroup] = useState("voltage");

//   /* ----------- RESOLUTION ----------- */
//   const getResolution = (s, e) => (e - s <= 15 * 60 * 1000 ? "raw" : "1m");
//   const resolution = getResolution(startTime, endTime);

//   /* ----------- CSV RANGE ----------- */
//   const [csvStart, setCsvStart] = useState(yesterday);
//   const [csvEnd, setCsvEnd] = useState(yesterday);

//   const csvStartTime = istTime(csvStart);
//   const csvEndTime = istTime(csvEnd, true);
//   const csvResolution = getResolution(csvStartTime, csvEndTime);

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
//       {/* 🟢 NAVBAR */}
//       <nav className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex items-center gap-3">
//               {/* Icon Placeholder */}
//               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-blue-200 shadow-lg">
//                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
//               </div>
//               <h1 className="text-xl font-bold tracking-tight text-slate-900">
//                 Ruhrpumpen <span className="text-blue-600">IoT</span>
//               </h1>
//             </div>
//             <div className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
//               Device: {deviceId}
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
//         {/* 📊 SECTION 1: VISUALIZATION */}
//         <section>
//           <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
            
//             {/* Toolbar */}
//             <div className="bg-slate-50/50 border-b border-slate-100 p-6">
//               <div className="flex flex-col sm:flex-row gap-6 items-end justify-between">
                
//                 <div className="flex flex-wrap gap-4 w-full sm:w-auto">
//                    {/* Date Inputs Group */}
//                    <div className="flex gap-4">
//                       <div className="flex flex-col gap-1.5">
//                         <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Start Date</label>
//                         <input
//                           type="date"
//                           value={startDate}
//                           onChange={(e) => setStartDate(e.target.value)}
//                           className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-sm transition-all hover:border-blue-400"
//                         />
//                       </div>
//                       <div className="flex flex-col gap-1.5">
//                         <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">End Date</label>
//                         <input
//                           type="date"
//                           value={endDate}
//                           onChange={(e) => setEndDate(e.target.value)}
//                           className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-sm transition-all hover:border-blue-400"
//                         />
//                       </div>
//                    </div>

//                    {/* Metric Select */}
//                    <div className="flex flex-col gap-1.5 flex-grow sm:flex-grow-0 sm:min-w-[200px]">
//                       <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Metric</label>
//                       <select
//                         value={selectedGroup}
//                         onChange={(e) => setSelectedGroup(e.target.value)}
//                         className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-sm cursor-pointer hover:border-blue-400"
//                       >
//                         <option value="voltage">⚡ Voltage (V)</option>
//                         <option value="current">🔌 Current (A)</option>
//                         <option value="power">🏭 Power (3-Phase)</option>
//                         <option value="power_total">📊 Total Power</option>
//                         <option value="pf">📉 Power Factor</option>
//                         <option value="pf_total">📉 PF Total</option>
//                         <option value="frequency">〰 Frequency (Hz)</option>
//                       </select>
//                    </div>
//                 </div>

//                 {/* Resolution Badge */}
//                 <div className="hidden sm:block">
//                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
//                      resolution === 'raw' 
//                      ? 'bg-purple-50 text-purple-700 border-purple-200' 
//                      : 'bg-green-50 text-green-700 border-green-200'
//                    }`}>
//                      Resolution: {resolution === 'raw' ? 'High Precision' : '1 Minute Avg'}
//                    </span>
//                 </div>
//               </div>
//             </div>

//             {/* Chart Area */}
//             <div className="p-6 min-h-[450px]">
//               <IoTCharts
//                 apiUrl={apiUrl}
//                 deviceId={deviceId}
//                 startTime={startTime}
//                 endTime={endTime}
//                 resolution={resolution}
//                 selectedGroup={selectedGroup}
//               />
//             </div>
//           </div>
//         </section>

//         {/* 📥 SECTION 2: EXPORT AREA */}
//         <section className="bg-slate-900 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden">
//            {/* Background Decoration */}
//            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>

//            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
//               <div className="max-w-md">
//                 <h3 className="text-xl font-bold mb-2">Export Data</h3>
//                 <p className="text-slate-400 text-sm">Download historical data for offline analysis. Select a range to generate a CSV report.</p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 items-end bg-slate-800/50 p-4 rounded-xl border border-slate-700">
//                  <div className="flex gap-4">
//                     <div>
//                       <label className="block mb-1 text-xs text-slate-400">From</label>
//                       <input
//                         type="date"
//                         value={csvStart}
//                         onChange={(e) => setCsvStart(e.target.value)}
//                         className="bg-slate-700 border-slate-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-1 text-xs text-slate-400">To</label>
//                       <input
//                         type="date"
//                         value={csvEnd}
//                         onChange={(e) => setCsvEnd(e.target.value)}
//                         className="bg-slate-700 border-slate-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
//                       />
//                     </div>
//                  </div>
                 
//                  {/* Wrapper for the CSV Button to ensure it fits layout */}
//                  <div className="h-10">
//                     <DownloadCSVButton
//                       apiUrl={apiUrl}
//                       deviceId={deviceId}
//                       startTime={csvStartTime}
//                       endTime={csvEndTime}
//                       resolution={csvResolution}
//                     />
//                  </div>
//               </div>
//            </div>
//         </section>

//       </main>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import IoTCharts from "./components/IoTChart";
// import DownloadCSVButton from "./components/DownloadCSVButton";

// /* ✅ Force IST date → epoch */
// const istTime = (dateStr, isEnd = false) => {
//   const t = isEnd ? "23:59:59" : "00:00:00";
//   return new Date(`${dateStr}T${t}+05:30`).getTime();
// };

// export default function App() {
//   const deviceId = "raspi_modbus_01";
//   const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData";

//   /* ----------- GRAPH RANGE ----------- */
//   const today = new Date().toISOString().slice(0, 10);
//   // Default to Yesterday to ensure full data visibility initially
//   const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

//   const [startDate, setStartDate] = useState(yesterday);
//   const [endDate, setEndDate] = useState(yesterday);

//   const startTime = istTime(startDate);
//   const endTime = istTime(endDate, true);

//   /* ----------- GRAPH TYPE ----------- */
//   const [selectedGroup, setSelectedGroup] = useState("voltage");

//   /* ----------- RESOLUTION ----------- */
//   const getResolution = (s, e) => (e - s <= 15 * 60 * 1000 ? "raw" : "1m");
//   const resolution = getResolution(startTime, endTime);

//   /* ----------- CSV RANGE ----------- */
//   const [csvStart, setCsvStart] = useState(yesterday);
//   const [csvEnd, setCsvEnd] = useState(yesterday);

//   const csvStartTime = istTime(csvStart);
//   const csvEndTime = istTime(csvEnd, true);
//   const csvResolution = getResolution(csvStartTime, csvEndTime);

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
//       {/* 🟢 NAVBAR */}
//       <nav className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-blue-200 shadow-lg">
//                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
//               </div>
//               <h1 className="text-xl font-bold tracking-tight text-slate-900">
//                 Ruhrpumpen <span className="text-blue-600">IoT</span>
//               </h1>
//             </div>
//             <div className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
//               {deviceId}
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
//         {/* 📊 SECTION 1: VISUALIZATION */}
//         <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
//             {/* Toolbar */}
//             <div className="bg-slate-50/80 border-b border-slate-200 p-6">
//               <div className="flex flex-col md:flex-row gap-6 items-end justify-between">
//                 <div className="flex flex-wrap gap-4 w-full">
//                    <div className="flex flex-col gap-1">
//                       <label className="text-xs font-bold text-slate-500 uppercase">Start Date</label>
//                       <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="input-field" />
//                    </div>
//                    <div className="flex flex-col gap-1">
//                       <label className="text-xs font-bold text-slate-500 uppercase">End Date</label>
//                       <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="input-field" />
//                    </div>
//                    <div className="flex flex-col gap-1 flex-grow md:flex-grow-0">
//                       <label className="text-xs font-bold text-slate-500 uppercase">Metric</label>
//                       <select value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)} className="input-field min-w-[220px]">
//                         <option value="voltage">⚡ Voltage (V)</option>
//                         <option value="current">🔌 Current (A)</option>
//                         <option value="power">🏭 Power (3-Phase)</option>
//                         <option value="power_total">📊 Total Power</option>
//                         <option value="pf">📉 Power Factor</option>
//                         <option value='pf_total'>📉 PF Total</option>
//                         <option value="frequency">〰 Frequency (Hz)</option>
                        
//                         {/* ✅ NEW OPTION FOR ENERGY */}
//                         <option value="energy_daily">🔋 Daily Energy (kWh)</option>
//                       </select>
//                    </div>
//                 </div>
//               </div>
//             </div>

//             {/* Chart Area */}
//             <div className="p-6 min-h-[450px]">
//               <IoTCharts
//                 apiUrl={apiUrl}
//                 deviceId={deviceId}
//                 startTime={startTime}
//                 endTime={endTime}
//                 resolution={resolution}
//                 selectedGroup={selectedGroup}
//               />
//             </div>
//         </section>

//         {/* 📥 SECTION 2: EXPORT */}
//         <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
//            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//               <div className="max-w-lg">
//                 <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
//                   <span className="bg-green-100 text-green-700 p-1.5 rounded-md">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
//                   </span>
//                   Export Data (CSV)
//                 </h3>
//                 <p className="text-slate-500 text-sm mt-1">
//                   Select a date range below to download the raw data logs for offline analysis.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 items-end bg-slate-50 p-4 rounded-xl border border-slate-200 w-full md:w-auto">
//                  <div className="flex gap-4 w-full sm:w-auto">
//                     <div className="flex-1">
//                       <label className="block mb-1 text-xs font-bold text-slate-500 uppercase">From</label>
//                       <input
//                         type="date"
//                         value={csvStart}
//                         onChange={(e) => setCsvStart(e.target.value)}
//                         className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <label className="block mb-1 text-xs font-bold text-slate-500 uppercase">To</label>
//                       <input
//                         type="date"
//                         value={csvEnd}
//                         onChange={(e) => setCsvEnd(e.target.value)}
//                         className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                       />
//                     </div>
//                  </div>
                 
//                  <DownloadCSVButton
//                     apiUrl={apiUrl}
//                     deviceId={deviceId}
//                     startTime={csvStartTime}
//                     endTime={csvEndTime}
//                     resolution={csvResolution}
//                   />
//               </div>
//            </div>
//         </section>

//       </main>

//       {/* Global CSS for inputs */}
//       <style>{`
//         .input-field {
//           @apply bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-sm transition-all hover:border-blue-400 outline-none;
//         }
//       `}</style>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import IoTCharts from "./components/IoTChart";
// import DownloadCSVButton from "./components/DownloadCSVButton";

// /* ✅ Force IST date → epoch */
// const istTime = (dateStr, isEnd = false) => {
//   const t = isEnd ? "23:59:59" : "00:00:00";
//   return new Date(`${dateStr}T${t}+05:30`).getTime();
// };

// export default function App() {
//   const deviceId = "raspi_modbus_01";
//   const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData";

//   /* ----------- GRAPH RANGE ----------- */
//   const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
//   const [startDate, setStartDate] = useState(yesterday);
//   const [endDate, setEndDate] = useState(yesterday);

//   const startTime = istTime(startDate);
//   const endTime = istTime(endDate, true);

//   /* ----------- SETTINGS ----------- */
//   const [selectedGroup, setSelectedGroup] = useState("voltage");
//   const resolution = (endTime - startTime) <= 15 * 60 * 1000 ? "raw" : "1m";

//   /* ----------- CSV RANGE ----------- */
//   const [csvStart, setCsvStart] = useState(yesterday);
//   const [csvEnd, setCsvEnd] = useState(yesterday);
//   const csvStartTime = istTime(csvStart);
//   const csvEndTime = istTime(csvEnd, true);

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
//       {/* 🟢 NAVBAR */}
//       <nav className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-blue-200 shadow-lg">
//                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
//               </div>
//               <h1 className="text-xl font-bold tracking-tight text-slate-900">
//                 Guna Solar.<span className="text-blue-600">Monitoring</span>
//               </h1>
//             </div>
//             <div className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
//               {deviceId}
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
//         {/* 📊 SECTION 1: VISUALIZATION */}
//         <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
//             {/* Toolbar */}
//             <div className="bg-slate-50/80 border-b border-slate-200 p-6">
//               <div className="flex flex-col md:flex-row gap-6 items-end justify-between">
//                 <div className="flex flex-wrap gap-4 w-full">
//                     <div className="flex flex-col gap-1">
//                       <label className="text-xs font-bold text-slate-500 uppercase">Start Date</label>
//                       <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="input-field" />
//                     </div>
//                     <div className="flex flex-col gap-1">
//                       <label className="text-xs font-bold text-slate-500 uppercase">End Date</label>
//                       <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="input-field" />
//                     </div>
//                     <div className="flex flex-col gap-1 flex-grow md:flex-grow-0">
//                       <label className="text-xs font-bold text-slate-500 uppercase">Metric</label>
//                       <select value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)} className="input-field min-w-[220px]">
//                         <optgroup label="Power Analysis">
//                             <option value="power_total">📊 Total Power (Grid + Solar)</option>
//                             <option value="inverter_1">☀️ Inverter 1 Power</option>
//                             <option value="inverter_2">☀️ Inverter 2 Power</option>
//                             <option value="power">🏭 Power (3-Phase)</option>
//                             <option value="pf">📉 Power Factor</option>
//                         </optgroup>
//                         <optgroup label="Raw Electrical">
//                             <option value="voltage">⚡ Voltage (V)</option>
//                             <option value="current">🔌 Current (A)</option>
//                             <option value="frequency">〰 Frequency (Hz)</option>
//                             <option value="energy_daily">🔋 Daily Energy (kWh)</option>
//                         </optgroup>
//                       </select>
//                     </div>
//                 </div>
//               </div>
//             </div>

//             {/* Chart Area */}
//             <div className="p-6 min-h-[450px]">
//               <IoTCharts
//                 apiUrl={apiUrl}
//                 deviceId={deviceId}
//                 startTime={startTime}
//                 endTime={endTime}
//                 resolution={resolution}
//                 selectedGroup={selectedGroup}
//               />
//             </div>
//         </section>

//         {/* 📥 SECTION 2: EXPORT */}
//         <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
//            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//               <div className="max-w-lg">
//                 <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">Export Data (CSV)</h3>
//                 <p className="text-slate-500 text-sm mt-1">Select a date range below to download raw logs.</p>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4 items-end bg-slate-50 p-4 rounded-xl border border-slate-200 w-full md:w-auto">
//                  <div className="flex gap-4 w-full sm:w-auto">
//                     <div className="flex-1">
//                       <label className="block mb-1 text-xs font-bold text-slate-500 uppercase">From</label>
//                       <input type="date" value={csvStart} onChange={(e) => setCsvStart(e.target.value)} className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg block w-full p-2.5" />
//                     </div>
//                     <div className="flex-1">
//                       <label className="block mb-1 text-xs font-bold text-slate-500 uppercase">To</label>
//                       <input type="date" value={csvEnd} onChange={(e) => setCsvEnd(e.target.value)} className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg block w-full p-2.5" />
//                     </div>
//                  </div>
//                  <DownloadCSVButton apiUrl={apiUrl} deviceId={deviceId} startTime={istTime(csvStart)} endTime={istTime(csvEnd, true)} />
//               </div>
//            </div>
//         </section>

//       </main>

//       <style>{`
//         .input-field {
//           @apply bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-sm transition-all hover:border-blue-400 outline-none;
//         }
//       `}</style>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import IoTCharts from "./components/IoTChart";
// import DownloadCSVButton from "./components/DownloadCSVButton";

// /* ✅ Force IST date → epoch */
// const istTime = (dateStr, isEnd = false) => {
//   const t = isEnd ? "23:59:59" : "00:00:00";
//   return new Date(`${dateStr}T${t}+05:30`).getTime();
// };

// export default function App() {
//   const deviceId = "raspi_modbus_01";
//   const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData";

//   /* ----------- GRAPH RANGE ----------- */
//   const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
//   const [startDate, setStartDate] = useState(yesterday);
//   const [endDate, setEndDate] = useState(yesterday);

//   const startTime = istTime(startDate);
//   const endTime = istTime(endDate, true);

//   /* ----------- SETTINGS ----------- */
//   const [selectedGroup, setSelectedGroup] = useState("voltage");
//   const resolution = (endTime - startTime) <= 15 * 60 * 1000 ? "raw" : "1m";

//   /* ----------- CSV RANGE ----------- */
//   const [csvStart, setCsvStart] = useState(yesterday);
//   const [csvEnd, setCsvEnd] = useState(yesterday);
//   const csvStartTime = istTime(csvStart);
//   const csvEndTime = istTime(csvEnd, true);

//   return (
//     // ✨ UPDATE 1: New Gradient Background
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-blue-50 font-sans text-slate-800">
      
//       {/* 🟢 NAVBAR */}
//       <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-20 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
           
//            {/* LOGO & TITLE SECTION */}
//            <div className="flex items-center gap-3">
//               {/* ✅ LOGO ADDED HERE */}
//               <img 
//                 src="/gspl.jpg" 
//                 alt="Guna Solar Logo" 
//                 className="h-10 w-auto object-contain" 
//               />
              
//               <h1 className="text-xl font-bold text-slate-900 tracking-tight hidden sm:block">
//                 Guna Solar.<span className="text-blue-600">Monitoring</span>
//               </h1>
//            </div>

//            <span className="text-xs bg-slate-100/80 px-3 py-1 rounded-full border border-slate-200 font-mono text-slate-500">
//              {deviceId}
//            </span>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
//         {/* 📊 SECTION 1: VISUALIZATION */}
//         {/* ✨ UPDATE 2: Added shadow-lg to make it pop */}
//         <section className="bg-white rounded-2xl shadow-lg border border-slate-200/60 overflow-hidden">
//             {/* Toolbar */}
//             <div className="bg-slate-50/50 border-b border-slate-200 p-6">
//               <div className="flex flex-col md:flex-row gap-6 items-end justify-between">
//                 <div className="flex flex-wrap gap-4 w-full">
//                     <div className="flex flex-col gap-1">
//                       <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Start Date</label>
//                       <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="input-field" />
//                     </div>
//                     <div className="flex flex-col gap-1">
//                       <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">End Date</label>
//                       <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="input-field" />
//                     </div>
//                     <div className="flex flex-col gap-1 flex-grow md:flex-grow-0">
//                       <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Metric</label>
//                       <select value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)} className="input-field min-w-[240px]">
//                         <optgroup label="Power Analysis">
//                             <option value="power_total">📊 Total Power (Grid + Solar)</option>
//                             <option value="inverter_1">☀️ Inverter 1 Power</option>
//                             <option value="inverter_2">☀️ Inverter 2 Power</option>
//                             <option value="power">🏭 Power (3-Phase)</option>
//                             <option value="pf">📉 Power Factor</option>
//                         </optgroup>
//                         <optgroup label="Raw Electrical">
//                             <option value="voltage">⚡ Voltage (V)</option>
//                             <option value="current">🔌 Current (A)</option>
//                             <option value="frequency">〰 Frequency (Hz)</option>
//                             <option value="energy_daily">🔋 Daily Energy (kWh)</option>
//                         </optgroup>
//                       </select>
//                     </div>
//                 </div>
//               </div>
//             </div>

//             {/* Chart Area */}
//             <div className="p-6 min-h-[450px]">
//               <IoTCharts
//                 apiUrl={apiUrl}
//                 deviceId={deviceId}
//                 startTime={startTime}
//                 endTime={endTime}
//                 resolution={resolution}
//                 selectedGroup={selectedGroup}
//               />
//             </div>
//         </section>

//         {/* 📥 SECTION 2: EXPORT */}
//         {/* ✨ UPDATE 2: Added shadow-md */}
//         <section className="bg-white rounded-2xl shadow-md border border-slate-200 p-6">
//            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//               <div className="max-w-lg">
//                 <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">Export Data (CSV)</h3>
//                 <p className="text-slate-500 text-sm mt-1">Select a date range below to download raw logs.</p>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4 items-end bg-slate-50 p-4 rounded-xl border border-slate-200 w-full md:w-auto">
//                  <div className="flex gap-4 w-full sm:w-auto">
//                     <div className="flex-1">
//                       <label className="block mb-1 text-xs font-bold text-slate-500 uppercase tracking-wider">From</label>
//                       <input type="date" value={csvStart} onChange={(e) => setCsvStart(e.target.value)} className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500" />
//                     </div>
//                     <div className="flex-1">
//                       <label className="block mb-1 text-xs font-bold text-slate-500 uppercase tracking-wider">To</label>
//                       <input type="date" value={csvEnd} onChange={(e) => setCsvEnd(e.target.value)} className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500" />
//                     </div>
//                  </div>
//                  <DownloadCSVButton apiUrl={apiUrl} deviceId={deviceId} startTime={istTime(csvStart)} endTime={istTime(csvEnd, true)} />
//               </div>
//            </div>
//         </section>

//       </main>

//       <style>{`
//         .input-field {
//           @apply bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-sm transition-all hover:border-blue-400 outline-none;
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState } from "react";
import IoTCharts from "./components/IoTChart";
import DownloadCSVButton from "./components/DownloadCSVButton";

/* ✅ Force IST date → epoch */
const istTime = (dateStr, isEnd = false) => {
  const t = isEnd ? "23:59:59" : "00:00:00";
  return new Date(`${dateStr}T${t}+05:30`).getTime();
};

export default function App() {
  const deviceId = "raspi_modbus_01";
  const apiUrl = "https://e2jxfl3rf2.execute-api.ap-south-1.amazonaws.com/GetIOTData";

  /* ----------- GRAPH RANGE ----------- */
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState(yesterday);
  const [endDate, setEndDate] = useState(yesterday);

  const startTime = istTime(startDate);
  const endTime = istTime(endDate, true);

  /* ----------- SETTINGS ----------- */
  const [selectedGroup, setSelectedGroup] = useState("voltage");
  const resolution = (endTime - startTime) <= 15 * 60 * 1000 ? "raw" : "1m";

  /* ----------- CSV RANGE ----------- */
  const [csvStart, setCsvStart] = useState(yesterday);
  const [csvEnd, setCsvEnd] = useState(yesterday);
  const csvStartTime = istTime(csvStart);
  const csvEndTime = istTime(csvEnd, true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-blue-50 font-sans text-slate-800">
      
      {/* 🟢 NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
           
           {/* LOGO & TITLE SECTION */}
           <div className="flex items-center gap-4">
              {/* ✅ UPDATED: Changed h-10 to h-14 for a bigger logo */}
              <img 
                src="/gspl.jpg" 
                alt="Guna Solar Logo" 
                className="h-21 w-auto object-contain" 
              />
              
              <h1 className="text-xl font-bold text-slate-900 tracking-tight hidden sm:block">
                Guna Solar.<span className="text-blue-600">Monitoring</span>
              </h1>
           </div>

           <span className="text-xs bg-slate-100/80 px-3 py-1 rounded-full border border-slate-200 font-mono text-slate-500">
             {deviceId}
           </span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* 📊 SECTION 1: VISUALIZATION */}
        <section className="bg-white rounded-2xl shadow-lg border border-slate-200/60 overflow-hidden">
            {/* Toolbar */}
            <div className="bg-slate-50/50 border-b border-slate-200 p-6">
              <div className="flex flex-col md:flex-row gap-6 items-end justify-between">
                <div className="flex flex-wrap gap-4 w-full">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Start Date</label>
                      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="input-field" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">End Date</label>
                      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="input-field" />
                    </div>
                    <div className="flex flex-col gap-1 flex-grow md:flex-grow-0">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Metric</label>
                      <select value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)} className="input-field min-w-[240px]">
                        <optgroup label="Power Analysis">
                            <option value="power_total">📊 Total Power (Grid + Solar)</option>
                            <option value="inverter_1">☀️ Inverter 1 Power</option>
                            <option value="inverter_2">☀️ Inverter 2 Power</option>
                            <option value="power">🏭 Power (3-Phase)</option>
                            <option value="pf">📉 Power Factor</option>
                        </optgroup>
                        <optgroup label="Raw Electrical">
                            <option value="voltage">⚡ Voltage (V)</option>
                            <option value="current">🔌 Current (A)</option>
                            <option value="frequency">〰 Frequency (Hz)</option>
                            <option value="energy_daily">🔋 Daily Energy (kWh)</option>
                        </optgroup>
                      </select>
                    </div>
                </div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="p-6 min-h-[450px]">
              <IoTCharts
                apiUrl={apiUrl}
                deviceId={deviceId}
                startTime={startTime}
                endTime={endTime}
                resolution={resolution}
                selectedGroup={selectedGroup}
              />
            </div>
        </section>

        {/* 📥 SECTION 2: EXPORT */}
        <section className="bg-white rounded-2xl shadow-md border border-slate-200 p-6">
           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-lg">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">Export Data (CSV)</h3>
                <p className="text-slate-500 text-sm mt-1">Select a date range below to download raw logs.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-end bg-slate-50 p-4 rounded-xl border border-slate-200 w-full md:w-auto">
                 <div className="flex gap-4 w-full sm:w-auto">
                    <div className="flex-1">
                      <label className="block mb-1 text-xs font-bold text-slate-500 uppercase tracking-wider">From</label>
                      <input type="date" value={csvStart} onChange={(e) => setCsvStart(e.target.value)} className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-1 text-xs font-bold text-slate-500 uppercase tracking-wider">To</label>
                      <input type="date" value={csvEnd} onChange={(e) => setCsvEnd(e.target.value)} className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                 </div>
                 <DownloadCSVButton apiUrl={apiUrl} deviceId={deviceId} startTime={istTime(csvStart)} endTime={istTime(csvEnd, true)} />
              </div>
           </div>
        </section>

      </main>

      <style>{`
        .input-field {
          @apply bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-sm transition-all hover:border-blue-400 outline-none;
        }
      `}</style>
    </div>
  );
}