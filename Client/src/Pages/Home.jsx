import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Records from './Records';

const Home = () => {
    const [records,setRecords] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
      fetch('http://localhost:5000/records')
      .then(res =>res.json())
      .then(data =>{
          console.log(data);
          setRecords(data)
      })
        },[])


        const handleToDelete = id =>{
            const confirm = window.confirm ('Want to delete this item?')
           if (confirm) {
             const url = `http://localhost:5000/records/${id}`;
           
           
            fetch(url,{
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                const restItems = records.filter(record => record._id !== id);
                setRecords(restItems);
            })
           }}
           const updateRecords = id =>{
            navigate(`/records/${id}`)
            
           }
    
    
    return (
        <div>
            <h1 className='text-4xl text-yellow-300'>
                All Records : {records.length}
            </h1>

            <div class="Lg:mx-32 md:mx-32 container gap-5 card bg-base-100 shadow-xl  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mt-5  l">
                {
                    records.map(record=><Records key={record._id} record={record} handleToDelete={handleToDelete} updateRecords={updateRecords} ></Records>)
                }
            
            </div>
        </div>
    );
};

export default Home;