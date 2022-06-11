import React from 'react';

const Records = ({record,handleToDelete,updateRecords}) => {
    // console.log(record)
    const {name,imgOne,imgTwo} = record;
    return (
        <div>
       
        <div class="card-body items-center text-center">
        <div class="w-24 rounded-full">
  
  </div>
            <h2 class="card-title">{name}</h2>
            <img src={imgOne} alt="" />
            <img src={imgTwo} alt="" />
            <button onClick={()=>handleToDelete(record._id)} className='btn hover:bg-red-700 '>Delete</button>
            <button onClick={()=>updateRecords(record._id)} className='btn hover:bg-red-700 '>Update</button>
         
        </div>
    </div>
    );
};

export default Records;