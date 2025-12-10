// import React, { useEffect, useState } from "react";
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
// } from "recharts";

// export default function IoTCharts({
//   apiUrl, deviceId, startTime, endTime, selectedGroup, onLoadingComplete
// }) {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const params = new URLSearchParams({
//           device_id: deviceId,
//           start_timestamp: startTime,
//           end_timestamp: endTime,
//         });

//         const response = await fetch(`${apiUrl}?${params}`);
//         const raw = await response.json();
//         const arr = raw.items || [];

//         const formatted = arr.map((row) => {
//           const payload = row.payload || {};
//           const ts = row.timestamp || payload.timestamp;
//           const tsVal = new Date(ts).getTime();

//           return {
//             ...payload,
//             timestamp: tsVal,
//             timeStr: new Date(tsVal).toLocaleTimeString(),
//           };
//         });

//         formatted.sort((a, b) => a.timestamp - b.timestamp);
//         setData(formatted);

//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (onLoadingComplete) onLoadingComplete();
//       }
//     };

//     fetchData();
//   }, [startTime, endTime, deviceId, apiUrl]);

//   if (data.length === 0)
//     return <div className="text-center text-gray-500 p-6">No data available</div>;

//   // ---- CHART CONFIG ----

//   const chartConfigs = {
//     voltage: {
//       title: "Voltage (Phase to Neutral)",
//       lines: [
//         { key: "V_A_N", color: "#8884d8", label: "V_A_N" },
//         { key: "V_B_N", color: "#82ca9d", label: "V_B_N" },
//         { key: "V_C_N", color: "#ffc658", label: "V_C_N" },
//       ],
//     },
//     current: {
//       title: "Current",
//       lines: [
//         { key: "I_A", color: "#8884d8", label: "I_A" },
//         { key: "I_B", color: "#82ca9d", label: "I_B" },
//         { key: "I_C", color: "#ffc658", label: "I_C" },
//       ],
//     },
//     power: {
//       title: "3-Phase Power",
//       lines: [
//         { key: "Power_A", color: "#8884d8", label: "Power_A" },
//         { key: "Power_B", color: "#82ca9d", label: "Power_B" },
//         { key: "Power_C", color: "#ffc658", label: "Power_C" },
//       ],
//     },
//     power_total: {
//       title: "Total Power",
//       lines: [
//         { key: "Power_Total", color: "#ff7300", label: "Power_Total" },
//       ],
//     },
//     pf: {
//       title: "Power Factor",
//       lines: [
//         { key: "PF_A", color: "#8884d8", label: "PF_A" },
//         { key: "PF_B", color: "#82ca9d", label: "PF_B" },
//         { key: "PF_C", color: "#ffc658", label: "PF_C" },
//       ],
//     },
//     pf_total: {
//       title: "Total Power Factor",
//       lines: [
//         { key: "PF_Total", color: "#ff7300", label: "PF_Total" },
//       ],
//     },
//     frequency: {
//       title: "Frequency",
//       lines: [
//         { key: "Frequency", color: "#8884d8", label: "Frequency" },
//       ],
//     },
//   };

//   const config = chartConfigs[selectedGroup];

//   return (
//     <div className="bg-white p-5 rounded shadow">
//       <h2 className="text-xl font-semibold text-center mb-4">{config.title}</h2>

//       <div className="h-[350px] w-full">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="timeStr" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             {config.lines.map((line) => (
//               <Line
//                 key={line.key}
//                 type="monotone"
//                 dataKey={line.key}
//                 stroke={line.color}
//                 dot={false}
//                 name={line.label}
//               />
//             ))}
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// /* --- 🎨 CONFIG: Professional Color Palette --- */
// const COLORS = [
//   "#3b82f6", // Blue (Phase A / Line 1)
//   "#ef4444", // Red (Phase B / Line 2)
//   "#22c55e", // Green (Phase C / Line 3)
//   "#f59e0b", // Amber (Total / PF)
// ];

// /* --- 🕒 HELPER: Format Time for X-Axis --- */
// const formatXAxis = (tickTime) => {
//   const date = new Date(tickTime);
//   // Returns "14:30" format
//   return date.toLocaleTimeString("en-IN", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: false,
//     timeZone: "Asia/Kolkata",
//   });
// };

// /* --- 🛠 HELPER: Custom Tooltip Component --- */
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-gray-800 text-white p-3 rounded shadow-lg border border-gray-700 text-sm">
//         {/* Show Full Date & Time on Hover */}
//         <p className="font-bold mb-2 border-b border-gray-600 pb-1">
//           {new Date(label).toLocaleString("en-IN", {
//             timeZone: "Asia/Kolkata",
//             month: "short",
//             day: "numeric",
//             hour: "2-digit",
//             minute: "2-digit",
//             second: "2-digit",
//           })}
//         </p>
//         {payload.map((entry, index) => (
//           <div key={index} className="flex items-center gap-2 mb-1">
//             <div
//               className="w-3 h-3 rounded-full"
//               style={{ backgroundColor: entry.color }}
//             ></div>
//             <span className="text-gray-300">{entry.name}:</span>
//             <span className="font-mono font-semibold">
//               {Number(entry.value).toFixed(2)}
//             </span>
//           </div>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// export default function IoTCharts({
//   apiUrl,
//   deviceId,
//   startTime,
//   endTime,
//   resolution,
//   selectedGroup,
// }) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       // Clear data while loading to prevent old graph from sticking
//       setData([]); 

//       const params = new URLSearchParams({
//         deviceId,
//         startTime,
//         endTime,
//         resolution,
//       });

//       try {
//         const res = await fetch(`${apiUrl}?${params.toString()}`);
//         const json = await res.json();
//         const items = json.items || [];

//         const formatted = items.map((row) => {
//           const ts = Number(row.timestamp);
//           const payload = row.payload || {};
//           return {
//             ...payload,
//             timestamp: ts, // We keep this as a number for the XAxis!
//           };
//         });

//         formatted.sort((a, b) => a.timestamp - b.timestamp);
//         setData(formatted);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     };

//     fetchData();
//   }, [apiUrl, deviceId, startTime, endTime, resolution]);

//   if (!data.length)
//     return (
//       <div className="flex items-center justify-center h-[380px] bg-gray-50 rounded border border-dashed border-gray-300 text-gray-400">
//         No data available for this range
//       </div>
//     );

//   const groups = {
//     voltage: ["V_A_N", "V_B_N", "V_C_N"],
//     current: ["I_A", "I_B", "I_C"],
//     power: ["Power_A", "Power_B", "Power_C"],
//     power_total: ["Power_Total"],
//     pf: ["PF_A", "PF_B", "PF_C"],
//     pf_total: ["PF_Total"],
//     frequency: ["Frequency"],
//   };

//   const currentLines = groups[selectedGroup] || [];

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//       <h3 className="text-lg font-semibold text-gray-700 mb-4 capitalize text-center">
//         {selectedGroup.replace("_", " ")} Overview
//       </h3>
      
//       <ResponsiveContainer width="100%" height={400}>
//         <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          
//           {/* ✅ X-Axis now uses the Number timestamp but formats it visually */}
//           <XAxis
//             dataKey="timestamp"
//             tickFormatter={formatXAxis}
//             type="number"
//             domain={['auto', 'auto']}
//             scale="time"
//             tick={{ fontSize: 12, fill: "#6b7280" }}
//             tickMargin={10}
//             minTickGap={50} // Prevents labels from overlapping
//           />
          
//           <YAxis 
//             tick={{ fontSize: 12, fill: "#6b7280" }} 
//             domain={['auto', 'auto']} // Auto-scales the height based on data
//           />
          
//           <Tooltip content={<CustomTooltip />} />
          
//           <Legend wrapperStyle={{ paddingTop: "10px" }} />

//           {currentLines.map((key, index) => (
//             <Line
//               key={key}
//               type="monotone" // Makes lines smooth/curved
//               dataKey={key}
//               stroke={COLORS[index % COLORS.length]} // Cycles through our colors
//               strokeWidth={2}
//               dot={false} // Hides dots for clean look (shows on hover)
//               activeDot={{ r: 6, strokeWidth: 0 }} // Highlight dot on hover
//               animationDuration={500}
//             />
//           ))}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// /* --- 🎨 CONFIG: Professional Color Palette --- */
// const COLORS = [
//   "#3b82f6", // Blue (Phase A / Line 1 / Import)
//   "#ef4444", // Red (Phase B / Line 2 / Export)
//   "#22c55e", // Green (Phase C / Line 3)
//   "#f59e0b", // Amber (Total / PF)
// ];

// /* --- 🕒 HELPER: Format Time for X-Axis --- */
// const formatXAxis = (tickTime) => {
//   const date = new Date(tickTime);
//   return date.toLocaleTimeString("en-IN", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: false,
//     timeZone: "Asia/Kolkata",
//   });
// };

// /* --- 🛠 HELPER: Custom Tooltip Component --- */
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-slate-800 text-white p-3 rounded shadow-lg border border-slate-700 text-sm z-50">
//         <p className="font-bold mb-2 border-b border-slate-600 pb-1 text-slate-300">
//           {new Date(label).toLocaleString("en-IN", {
//             timeZone: "Asia/Kolkata",
//             month: "short",
//             day: "numeric",
//             hour: "2-digit",
//             minute: "2-digit",
//             second: "2-digit",
//           })}
//         </p>
//         {payload.map((entry, index) => (
//           <div key={index} className="flex items-center gap-2 mb-1">
//             <div
//               className="w-3 h-3 rounded-full"
//               style={{ backgroundColor: entry.color }}
//             ></div>
//             <span className="text-slate-400 capitalize">
//               {entry.name.replace(/_/g, " ")}:
//             </span>
//             <span className="font-mono font-semibold text-white">
//               {Number(entry.value).toFixed(2)}
//             </span>
//           </div>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// export default function IoTCharts({
//   apiUrl,
//   deviceId,
//   startTime,
//   endTime,
//   resolution,
//   selectedGroup,
// }) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setData([]);

//       const params = new URLSearchParams({
//         deviceId,
//         startTime,
//         endTime,
//         resolution,
//       });

//       try {
//         const res = await fetch(`${apiUrl}?${params.toString()}`);
//         const json = await res.json();
//         const items = json.items || [];

//         // 1. Sort by time ascending
//         items.sort((a, b) => Number(a.timestamp) - Number(b.timestamp));

//         // --- 🟢 DAILY ENERGY CALCULATION LOGIC ---
//         let currentDay = null;
//         let baselineInto = 0;
//         let baselineOut = 0;

//         const formatted = items.map((row) => {
//           const ts = Number(row.timestamp);
//           const payload = row.payload || {};
          
//           const dayStr = new Date(ts).toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });

//           const rawInto = Number(payload.Energy_Into || 0);
//           const rawOut = Number(payload.Energy_Out || 0);

//           if (dayStr !== currentDay) {
//             currentDay = dayStr;
//             baselineInto = rawInto;
//             baselineOut = rawOut;
//           }

//           // 1. Calculate Difference (Wh)
//           // ✅ FIX 1: Renamed variables to match usage below
//           const diffInto = Math.max(0, rawInto - baselineInto);
//           const diffOut = Math.max(0, rawOut - baselineOut);

//           // 2. Convert to kWh (Divide by 1000)
//           // ✅ FIX 2: Now 'diffInto' is actually defined
//           const dailyImportKwh = diffInto / 1000;
//           const dailyExportKwh = diffOut / 1000;

//           return {
//             ...payload,
//             timestamp: ts,
//             daily_import_kwh: dailyImportKwh.toFixed(3), 
//             daily_export_kwh: dailyExportKwh.toFixed(3),
//           };
//         });
//         // --- 🔴 END LOGIC ---

//         setData(formatted);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     };

//     fetchData();
//   }, [apiUrl, deviceId, startTime, endTime, resolution]);

//   if (!data.length)
//     return (
//       <div className="flex items-center justify-center h-[400px] bg-slate-50 rounded border border-dashed border-slate-300 text-slate-400">
//         No data available for this range
//       </div>
//     );

//   const groups = {
//     voltage: ["V_A_N", "V_B_N", "V_C_N"],
//     current: ["I_A", "I_B", "I_C"],
//     power: ["Power_A", "Power_B", "Power_C"],
//     power_total: ["Power_Total"],
//     pf: ["PF_A", "PF_B", "PF_C"],
//     pf_total: ["PF_Total"],
//     frequency: ["Frequency"],
//     // ✅ FIX 3: Keys updated to match the data keys (daily_import_kwh)
//     energy_daily: ["daily_import_kwh", "daily_export_kwh"],
//   };

//   const currentLines = groups[selectedGroup] || [];

//   return (
//     <div className="bg-white p-1 rounded-lg"> 
//       <ResponsiveContainer width="100%" height={400}>
//         <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          
//           <XAxis
//             dataKey="timestamp"
//             tickFormatter={formatXAxis}
//             type="number"
//             domain={['auto', 'auto']}
//             scale="time"
//             tick={{ fontSize: 12, fill: "#64748b" }}
//             tickMargin={10}
//             minTickGap={60}
//           />
          
//           <YAxis 
//             tick={{ fontSize: 12, fill: "#64748b" }} 
//             domain={['auto', 'auto']}
//           />
          
//           <Tooltip content={<CustomTooltip />} />
//           <Legend wrapperStyle={{ paddingTop: "20px" }} />

//           {currentLines.map((key, index) => (
//             <Line
//               key={key}
//               type="monotone"
//               dataKey={key}
//               // Clean up the legend name so it looks nice
//               name={key.replace("daily_", "Today's ").replace("_kwh", " (kWh)").replace("_", " ")}
//               stroke={COLORS[index % COLORS.length]}
//               strokeWidth={2}
//               dot={false}
//               activeDot={{ r: 6, strokeWidth: 0 }}
//               animationDuration={500}
//             />
//           ))}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// /* --- 🎨 COLORS --- */
// const COLORS = ["#3b82f6", "#ef4444", "#22c55e", "#f59e0b"];
// const COL_GRID = "#0f172a";   // Black
// const COL_SOLAR = "#f97316";  // Orange
// const COL_NET = "#8b5cf6";    // Purple
// const COL_INV1 = "#d946ef";   // Fuchsia (Inv 1)
// const COL_INV2 = "#06b6d4";   // Cyan (Inv 2)

// /* --- 🕒 HELPER: Format Time --- */
// const formatXAxis = (tickTime) => {
//   const date = new Date(tickTime);
//   return date.toLocaleTimeString("en-IN", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: false,
//     timeZone: "Asia/Kolkata",
//   });
// };

// /* --- 🛠 HELPER: Custom Tooltip --- */
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-slate-800 text-white p-3 rounded shadow-lg border border-slate-700 text-sm z-50">
//         <p className="font-bold mb-2 border-b border-slate-600 pb-1 text-slate-300">
//           {new Date(label).toLocaleString("en-IN", {
//             timeZone: "Asia/Kolkata",
//             month: "short",
//             day: "numeric",
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </p>
//         {payload.map((entry, index) => (
//           <div key={index} className="flex items-center gap-2 mb-1">
//             <div
//               className="w-3 h-3 rounded-full"
//               style={{ backgroundColor: entry.color }}
//             ></div>
//             <span className="text-slate-400 capitalize">
//               {entry.name}:
//             </span>
//             <span className="font-mono font-semibold text-white">
//               {Number(entry.value).toFixed(3)}
//             </span>
//           </div>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// export default function IoTCharts({
//   apiUrl,
//   deviceId,
//   startTime,
//   endTime,
//   resolution,
//   selectedGroup,
// }) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setData([]);
//       const params = new URLSearchParams({ deviceId, startTime, endTime, resolution });

//       try {
//         const res = await fetch(`${apiUrl}?${params.toString()}`);
//         const json = await res.json();
//         const items = json.items || [];
//         items.sort((a, b) => Number(a.timestamp) - Number(b.timestamp));

//         // --- 🟢 DATA PROCESSING ---
//         let currentDay = null;
//         let baselineInto = 0;
//         let baselineOut = 0;

//         const formatted = items.map((row) => {
//           const ts = Number(row.timestamp);
//           const payload = row.payload || {};
//           const dayStr = new Date(ts).toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
          
//           // 1. Daily Energy Logic
//           const rawInto = Number(payload.Energy_Into || 0);
//           const rawOut = Number(payload.Energy_Out || 0);
          
//           if (dayStr !== currentDay) {
//             currentDay = dayStr;
//             baselineInto = rawInto;
//             baselineOut = rawOut;
//           }
//           const diffInto = Math.max(0, rawInto - baselineInto);
//           const diffOut = Math.max(0, rawOut - baselineOut);

//           // 2. Power Processing
//           const gridKw = Number(payload.Power_Total || 0);
          
//           // Process Individual Inverters
//           const inv1 = Number(payload.inverter_power_w || 0);
//           const inv2 = Number(payload.inverter_2_power_w || 0);
          
//           const inv1Kw = inv1 / 1000;
//           const inv2Kw = inv2 / 1000;
//           const totalInvKw = inv1Kw + inv2Kw;

//           // Net Consumption
//           const consumptionKw = gridKw + totalInvKw;

//           return {
//             ...payload,
//             timestamp: ts,
            
//             // Calculated Fields
//             daily_import_kwh: (diffInto / 1000).toFixed(3), 
//             daily_export_kwh: (diffOut / 1000).toFixed(3),
//             inverter_kw: totalInvKw.toFixed(3),
//             inv1_kw: inv1Kw.toFixed(3), // 👈 Individual Inv 1
//             inv2_kw: inv2Kw.toFixed(3), // 👈 Individual Inv 2
//             consumption_kw: consumptionKw.toFixed(3),
//           };
//         });

//         setData(formatted);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     };

//     fetchData();
//   }, [apiUrl, deviceId, startTime, endTime, resolution]);

//   if (!data.length) return <div className="text-center p-10 text-gray-400">No data available</div>;

//   // --- 📊 CHART CONFIGURATION ---
//   const groups = {
//     voltage: ["V_A_N", "V_B_N", "V_C_N"],
//     current: ["I_A", "I_B", "I_C"],
//     power_total: ["Power_Total", "inverter_kw", "consumption_kw"], 
    
//     // ✅ NEW GROUPS ADDED
//     inverter_1: ["inv1_kw"],
//     inverter_2: ["inv2_kw"],

//     power: ["Power_A", "Power_B", "Power_C"],
//     pf: ["PF_Total"],
//     frequency: ["Frequency"],
//     energy_daily: ["daily_import_kwh", "daily_export_kwh"],
//   };

//   const currentLines = groups[selectedGroup] || ["Power_Total"];

//   return (
//     <div className="bg-white p-1 rounded-lg"> 
//       <ResponsiveContainer width="100%" height={400}>
//         <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          
//           <XAxis 
//             dataKey="timestamp" 
//             tickFormatter={formatXAxis} 
//             type="number" 
//             scale="time" 
//             domain={['auto', 'auto']} 
//             tick={{ fontSize: 12, fill: "#64748b" }} 
//             minTickGap={60} 
//           />
          
//           <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
//           <Tooltip content={<CustomTooltip />} />
//           <Legend wrapperStyle={{ paddingTop: "20px" }} />

//           {currentLines.map((key, index) => {
//             let strokeColor = COLORS[index % COLORS.length];
//             let name = key.replace(/_/g, " ");
//             let dashArray = "";

//             // --- 🎨 Custom Styles ---
//             if (key === "Power_Total") { strokeColor = COL_GRID; name = "Grid Power (Meter)"; }
//             if (key === "inverter_kw") { strokeColor = COL_SOLAR; name = "Total Solar Power"; }
//             if (key === "consumption_kw") { strokeColor = COL_NET; name = "Net Power"; dashArray = "5 5"; }
            
//             // New Inverter Colors
//             if (key === "inv1_kw") { strokeColor = COL_INV1; name = "Inverter 1 Power"; }
//             if (key === "inv2_kw") { strokeColor = COL_INV2; name = "Inverter 2 Power"; }

//             if (key.includes("daily_import")) name = "Today's Import (kWh)";
//             if (key.includes("daily_export")) name = "Today's Export (kWh)";

//             return (
//                 <Line
//                   key={key}
//                   type="monotone"
//                   dataKey={key}
//                   name={name}
//                   stroke={strokeColor}
//                   strokeWidth={2}
//                   strokeDasharray={dashArray}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                 />
//             );
//           })}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// /* --- 🎨 COLORS --- */
// const COLORS = ["#3b82f6", "#ef4444", "#22c55e", "#f59e0b"];
// const COL_GRID = "#0f172a";   // Black
// const COL_SOLAR = "#f97316";  // Orange
// const COL_NET = "#8b5cf6";    // Purple
// const COL_INV1 = "#d946ef";   // Fuchsia
// const COL_INV2 = "#06b6d4";   // Cyan

// /* --- 🕒 HELPER: Format Time --- */
// const formatXAxis = (tickTime) => {
//   const date = new Date(tickTime);
//   return date.toLocaleTimeString("en-IN", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: false,
//     timeZone: "Asia/Kolkata",
//   });
// };

// /* --- 🛠 HELPER: Custom Tooltip --- */
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-slate-800 text-white p-3 rounded shadow-lg border border-slate-700 text-sm z-50">
//         <p className="font-bold mb-2 border-b border-slate-600 pb-1 text-slate-300">
//           {new Date(label).toLocaleString("en-IN", {
//             timeZone: "Asia/Kolkata",
//             month: "short",
//             day: "numeric",
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </p>
//         {payload.map((entry, index) => (
//           <div key={index} className="flex items-center gap-2 mb-1">
//             <div
//               className="w-3 h-3 rounded-full"
//               style={{ backgroundColor: entry.color }}
//             ></div>
//             <span className="text-slate-400 capitalize">
//               {entry.name}:
//             </span>
//             <span className="font-mono font-semibold text-white">
//               {Number(entry.value).toFixed(3)}
//             </span>
//           </div>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// export default function IoTCharts({
//   apiUrl,
//   deviceId,
//   startTime,
//   endTime,
//   resolution,
//   selectedGroup,
// }) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setData([]);
//       const params = new URLSearchParams({ deviceId, startTime, endTime, resolution });

//       try {
//         const res = await fetch(`${apiUrl}?${params.toString()}`);
//         const json = await res.json();
//         const items = json.items || [];
//         items.sort((a, b) => Number(a.timestamp) - Number(b.timestamp));

//         // --- 🟢 DATA PROCESSING ---
//         let currentDay = null;
//         let baselineInto = 0;
//         let baselineOut = 0;

//         const formatted = items.map((row) => {
//           const ts = Number(row.timestamp);
//           const payload = row.payload || {};
//           const dayStr = new Date(ts).toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
          
//           // 1. Daily Energy
//           const rawInto = Number(payload.Energy_Into || 0);
//           const rawOut = Number(payload.Energy_Out || 0);
          
//           if (dayStr !== currentDay) {
//             currentDay = dayStr;
//             baselineInto = rawInto;
//             baselineOut = rawOut;
//           }
//           const diffInto = Math.max(0, rawInto - baselineInto);
//           const diffOut = Math.max(0, rawOut - baselineOut);

//           // 2. Power Processing (Watts -> kW)
//           const gridKw = Number(payload.Power_Total || 0);
//           const inv1 = Number(payload.inverter_power_w || 0);
//           const inv2 = Number(payload.inverter_2_power_w || 0);
          
//           const inv1Kw = inv1 / 1000;
//           const inv2Kw = inv2 / 1000;
//           const totalInvKw = inv1Kw + inv2Kw;
//           const consumptionKw = gridKw + totalInvKw;

//           // ✅ FIX: Wrap .toFixed() in Number() so graph scales correctly
//           return {
//             ...payload,
//             timestamp: ts,
            
//             // Calculated Fields (as Numbers)
//             daily_import_kwh: Number((diffInto / 1000).toFixed(3)), 
//             daily_export_kwh: Number((diffOut / 1000).toFixed(3)),
//             inverter_kw: Number(totalInvKw.toFixed(3)),
//             inv1_kw: Number(inv1Kw.toFixed(3)), 
//             inv2_kw: Number(inv2Kw.toFixed(3)), 
//             consumption_kw: Number(consumptionKw.toFixed(3)),
//           };
//         });

//         setData(formatted);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     };

//     fetchData();
//   }, [apiUrl, deviceId, startTime, endTime, resolution]);

//   if (!data.length) return <div className="text-center p-10 text-gray-400">No data available</div>;

//   // --- 📊 CHART CONFIGURATION ---
//   const groups = {
//     voltage: ["V_A_N", "V_B_N", "V_C_N"],
//     current: ["I_A", "I_B", "I_C"],
//     power_total: ["Power_Total", "inverter_kw", "consumption_kw"], 
//     inverter_1: ["inv1_kw"],
//     inverter_2: ["inv2_kw"],
//     power: ["Power_A", "Power_B", "Power_C"],
//     pf: ["PF_Total"],
//     frequency: ["Frequency"],
//     energy_daily: ["daily_import_kwh", "daily_export_kwh"],
//   };

//   const currentLines = groups[selectedGroup] || ["Power_Total"];

//   return (
//     <div className="bg-white p-1 rounded-lg"> 
//       <ResponsiveContainer width="100%" height={400}>
//         <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          
//           <XAxis 
//             dataKey="timestamp" 
//             tickFormatter={formatXAxis} 
//             type="number" 
//             scale="time" 
//             domain={['auto', 'auto']} 
//             tick={{ fontSize: 12, fill: "#64748b" }} 
//             minTickGap={60} 
//           />
          
//           {/* ✅ FIXED: domain={['auto', 'auto']} enables auto-scaling */}
//           <YAxis 
//             tick={{ fontSize: 12, fill: "#64748b" }} 
//             domain={['auto', 'auto']}
//           />
          
//           <Tooltip content={<CustomTooltip />} />
//           <Legend wrapperStyle={{ paddingTop: "20px" }} />

//           {currentLines.map((key, index) => {
//             let strokeColor = COLORS[index % COLORS.length];
//             let name = key.replace(/_/g, " ");
//             let dashArray = "";

//             // --- 🎨 Custom Styles ---
//             if (key === "Power_Total") { strokeColor = COL_GRID; name = "Grid Power (Meter)"; }
//             if (key === "inverter_kw") { strokeColor = COL_SOLAR; name = "Total Solar Power"; }
//             if (key === "consumption_kw") { strokeColor = COL_NET; name = "Net Power"; dashArray = "5 5"; }
            
//             if (key === "inv1_kw") { strokeColor = COL_INV1; name = "Inverter 1 Power"; }
//             if (key === "inv2_kw") { strokeColor = COL_INV2; name = "Inverter 2 Power"; }

//             if (key.includes("daily_import")) name = "Today's Import (kWh)";
//             if (key.includes("daily_export")) name = "Today's Export (kWh)";

//             return (
//                 <Line
//                   key={key}
//                   type="monotone"
//                   dataKey={key}
//                   name={name}
//                   stroke={strokeColor}
//                   strokeWidth={2}
//                   strokeDasharray={dashArray}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                 />
//             );
//           })}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

/* --- 🎨 COLORS --- */
const COLORS = ["#3b82f6", "#ef4444", "#22c55e", "#f59e0b"];
const COL_GRID = "#0f172a";   // Black (Grid)
const COL_SOLAR = "#f97316";  // Orange (Solar)
const COL_NET = "#8b5cf6";    // Purple (Net)
const COL_INV1 = "#d946ef";   // Fuchsia (Inv 1)
const COL_INV2 = "#06b6d4";   // Cyan (Inv 2)

/* --- 🕒 HELPER: Format Time --- */
const formatXAxis = (tickTime) => {
  const date = new Date(tickTime);
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  });
};

/* --- 🛠 HELPER: Custom Tooltip --- */
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 text-white p-3 rounded shadow-lg border border-slate-700 text-sm z-50">
        <p className="font-bold mb-2 border-b border-slate-600 pb-1 text-slate-300">
          {new Date(label).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 mb-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-slate-400 capitalize">
              {entry.name}:
            </span>
            <span className="font-mono font-semibold text-white">
              {Number(entry.value).toFixed(3)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function IoTCharts({
  apiUrl,
  deviceId,
  startTime,
  endTime,
  resolution,
  selectedGroup,
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setData([]);
      const params = new URLSearchParams({ deviceId, startTime, endTime, resolution });

      try {
        const res = await fetch(`${apiUrl}?${params.toString()}`);
        const json = await res.json();
        const items = json.items || [];
        items.sort((a, b) => Number(a.timestamp) - Number(b.timestamp));

        // --- 🟢 DATA PROCESSING ---
        let currentDay = null;
        let baselineInto = 0;
        let baselineOut = 0;

        const formatted = items.map((row) => {
          const ts = Number(row.timestamp);
          const payload = row.payload || {};
          const dayStr = new Date(ts).toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
          
          // 1. Daily Energy Logic
          const rawInto = Number(payload.Energy_Into || 0);
          const rawOut = Number(payload.Energy_Out || 0);
          
          if (dayStr !== currentDay) {
            currentDay = dayStr;
            baselineInto = rawInto;
            baselineOut = rawOut;
          }
          const diffInto = Math.max(0, rawInto - baselineInto);
          const diffOut = Math.max(0, rawOut - baselineOut);

          // 2. Power Processing
          
          // Grid Power: Use Power_Total directly as it is available
          // If missing, default to 0
          const gridKw = Number(payload.Power_Total || 0);

          // Inverters (Watts -> kW)
          // ✅ FIX: Updated to match your JSON keys exactly
          const inv1 = Number(payload.inverter1_power_w || 0); 
          const inv2 = Number(payload.inverter2_power_w || 0);
          
          const inv1Kw = inv1 / 1000;
          const inv2Kw = inv2 / 1000;
          const totalInvKw = inv1Kw + inv2Kw;

          // Net Consumption (Grid + Solar)
          const consumptionKw = gridKw + totalInvKw;

          // Phase Powers (Fallback to 0 if missing)
          const pA = Number(payload.Power_A || 0);
          const pB = Number(payload.Power_B || 0);
          const pC = Number(payload.Power_C || 0);

          return {
            ...payload,
            timestamp: ts,
            
            // Calculated Fields (Numbers for Auto-Scaling)
            daily_import_kwh: Number((diffInto / 1000).toFixed(3)), 
            daily_export_kwh: Number((diffOut / 1000).toFixed(3)),
            
            // Power Data
            Power_Total: Number(gridKw.toFixed(3)), 
            inverter_kw: Number(totalInvKw.toFixed(3)),
            inv1_kw: Number(inv1Kw.toFixed(3)), 
            inv2_kw: Number(inv2Kw.toFixed(3)), 
            consumption_kw: Number(consumptionKw.toFixed(3)),

            // Phase Data
            Power_A: Number(pA.toFixed(3)),
            Power_B: Number(pB.toFixed(3)),
            Power_C: Number(pC.toFixed(3)),
          };
        });

        setData(formatted);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [apiUrl, deviceId, startTime, endTime, resolution]);

  if (!data.length) return <div className="text-center p-10 text-gray-400">No data available</div>;

  // --- 📊 CHART CONFIGURATION ---
  const groups = {
    voltage: ["V_A_N", "V_B_N", "V_C_N"],
    current: ["I_A", "I_B", "I_C"],
    
    // The "Total Power" graph uses these keys
    power_total: ["Power_Total", "inverter_kw", "consumption_kw"], 
    
    inverter_1: ["inv1_kw"],
    inverter_2: ["inv2_kw"],
    
    // If Power_A/B/C are missing, this might be empty, 
    // but we updated the fallback logic to default to 0 so it won't crash.
    power: ["Power_A", "Power_B", "Power_C"],
    
    pf: ["PF_Total"],
    frequency: ["Frequency"],
    energy_daily: ["daily_import_kwh", "daily_export_kwh"],
  };

  const currentLines = groups[selectedGroup] || ["Power_Total"];

  return (
    <div className="bg-white p-1 rounded-lg"> 
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          
          <XAxis 
            dataKey="timestamp" 
            tickFormatter={formatXAxis} 
            type="number" 
            scale="time" 
            domain={['auto', 'auto']} 
            tick={{ fontSize: 12, fill: "#64748b" }} 
            minTickGap={60} 
          />
          
          <YAxis 
            tick={{ fontSize: 12, fill: "#64748b" }} 
            domain={['auto', 'auto']}
          />
          
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: "20px" }} />

          {currentLines.map((key, index) => {
            let strokeColor = COLORS[index % COLORS.length];
            let name = key.replace(/_/g, " ");
            let dashArray = "";

            // --- 🎨 Custom Styles ---
            if (key === "Power_Total") { strokeColor = COL_GRID; name = "Grid Power (Meter)"; }
            if (key === "inverter_kw") { strokeColor = COL_SOLAR; name = "Total Solar Power"; }
            if (key === "consumption_kw") { strokeColor = COL_NET; name = "Net Power"; dashArray = "5 5"; }
            
            if (key === "inv1_kw") { strokeColor = COL_INV1; name = "Inverter 1 Power"; }
            if (key === "inv2_kw") { strokeColor = COL_INV2; name = "Inverter 2 Power"; }

            if (key.includes("daily_import")) name = "Today's Import (kWh)";
            if (key.includes("daily_export")) name = "Today's Export (kWh)";

            return (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  name={name}
                  stroke={strokeColor}
                  strokeWidth={2}
                  strokeDasharray={dashArray}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}