'use client';
import { useEffect, useState } from 'react';

export default function Client() {
 let [res, setRes] = useState(null);

 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch('/next5/api/data', { method: 'POST', });
   const data = await response.json();
   console.log(data)
   setRes(data);
  };
  fetchData();
 }, []);

 return res ?
  <>
   {res.map((item, i) => (
    <div key={i}>{item.ClientName}</div>
   ))}
  </>
  : null

};