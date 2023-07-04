import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Fetch = () => {
  const [data, setData] = useState([]);
  const url = 'https://backendfinal-re0q.onrender.com/getAllInquiries';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const json = response.data; // Use response.data instead of response.json()
        setData(json.data);
        console.log(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-4">Inquiries</h1>
      <ul className="mt-4">
        {data.map((datum) => (
          <li key={datum._id} className="py-2">
            <h2 className="text-xl font-semibold">
              {datum.fname} {datum.mname} {datum.lname}
            </h2>
            <p className="text-gray-600">{datum.message}</p>
            <p className="text-gray-600">Email: {datum.email}</p>
            <p className="text-gray-600">Date Posted: {datum._id.substring(0, 8)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
