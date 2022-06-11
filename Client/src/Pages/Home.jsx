import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';

const Home = () => {
    const [records,setRecords] = useState([])
    useEffect(() => {
      fetch('http://localhost:5000/records')
      .then(res =>res.json())
      .then(data =>{
          console.log(data);
          setRecords(data)
      })
        },[])
    
    
    return (
        <div>
            <h1 className='text-4xl text-yellow-300'>
                All Records : {records.length}
            </h1>

            <div class="Lg:mx-32 md:mx-32 container gap-5 card bg-base-100 shadow-xl  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mt-5  l">
                {
                    records.map(record=>)
                }
            
            </div>
        </div>
    );
};

export default Home;