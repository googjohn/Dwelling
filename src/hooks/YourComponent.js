// import React from 'react';
// import Fetch from './Fetch';

// const DataComponent = () => {
//   return (
//     <div>
//       <h1>Data Component</h1>
//       <Fetch />
//     </div>
//   );
// };

// export default DataComponent;

import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://backendfinal-re0q.onrender.com/getAllInquiries')
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item._id}>
          <h2>{item.fname}</h2>
          <p>ID: {item._id}</p>
          <p>Message: {item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default YourComponent;
