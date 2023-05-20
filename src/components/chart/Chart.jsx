// import React from "react";
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

// const data = require('./prices.json');

// const StockMarketGraph = () => {
//   return (
//     <ResponsiveContainer width="100%" height={500}>
//       <LineChart
//         data={data}
//         margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="actual" stroke="#c1121f" />
//         <Line type="monotone" dataKey="predicted" stroke="#82ca9d" />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// };

// export default StockMarketGraph;
// import React from "react";
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

// const data = require('./prices.json');

// const formatTimeLabel = (time) => {
//   const date = new Date(time);
//   const monthNames = [
//     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//   ];

//   // Format the time label for the last 12 months
//   const month = monthNames[date.getMonth()];
//   const year = date.getFullYear().toString().substr(-2);
//   return `${month} '${year}`;
// };

// const StockMarketGraph = () => {
//   return (
//     <ResponsiveContainer width="100%" height={500}>
//       <LineChart
//         data={data}
//         margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" tickFormatter={formatTimeLabel} />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="actual" stroke="#c1121f" />
//         <Line type="monotone" dataKey="predicted" stroke="#82ca9d" />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// };

// export default StockMarketGraph;
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = require('./monthly.json');

const formatTimeLabel = (time) => {
  return time.substr(0, 3); // Extract the first three characters (month abbreviation)
};

const StockMarketGraph = () => {
  // Extract unique months and limit them to 12 intervals
  const uniqueMonths = Array.from(new Set(data.map(item => item.Date))).slice(0, 12);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="Date"
          tickFormatter={formatTimeLabel}
          ticks={uniqueMonths}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="actual" stroke="#c1121f" />
        <Line type="monotone" dataKey="predicted" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockMarketGraph;


