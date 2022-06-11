import React from 'react';

const Records = ({record}) => {
    console.log(record)
    const {name,img1,img2} = record;
    return (
        <div>
       
        <div class="card-body items-center text-center">
        <div class="w-24 rounded-full">
    <img src="https://api.lorem.space/image/face?hash=0" className='rounded-full w-25 h-25' alt='' />
  </div>
            <img src={img1} alt="" />
            <h2 class="card-title">{name}</h2>
            <img src={img2} alt="" />
            <button className='btn hover:bg-red-700 '>Delete</button>
         
        </div>
    </div>
    );
};

export default Records;