// import React, { useState, useEffect } from 'react';
// import Papa from 'papaparse';


// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     Papa.parse('src\components\seesv\data\psx.csv', {
//       header: true,
//       download: true,
//       complete: function(results) {
//         setData(results.data);
//         console.log(data[1]);
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Stock Prices</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Open</th>
//             <th>High</th>
//             <th>Low</th>
//             <th>Close</th>
//             <th>Change</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index}>
//               <td>{row.company}</td>
//               <td>{row.high}</td>
//               <td>{row.low}</td>
//               <td>{row.current}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

function CSVTable({ file }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse(file, {
      header: true,
      download: true,
      complete: function(results) {
        setData(results.data);
      }
    });
  }, [file]);

  return (
    <table>
      <thead>
        <tr>
          {data[0] && Object.keys(data[0]).map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CSVTable;
