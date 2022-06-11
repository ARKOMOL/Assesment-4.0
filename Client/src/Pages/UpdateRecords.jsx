import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateRecords = () => {
    const {id} = useParams();
    const [record, setRecord] = useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/records/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setRecord(data));
    }, []);

    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const imgOne = event.target.imgOne.value;
        const imgTwo = event.target.imgTwo.value;

        const updatedRecords = {name,imgOne,imgTwo };

        // send data to the server
        const url = `http://localhost:5000/records/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedRecords)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            toast('users added successfully!!!');
            event.target.reset();
        })
    }
    return (
        <div>
            <h1>Upadating Records : {record.name}</h1>
               <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='Name' required />
                <br />
                <input type="text" name="imgOne" placeholder='ImageOne' required />
                <br />
                 <input type="text" name="imgTwo" placeholder='ImageTwo' required />
                <br />
                <input type="submit" value="Update Records" />
            </form>


            
        </div>
    );
};

export default UpdateRecords;