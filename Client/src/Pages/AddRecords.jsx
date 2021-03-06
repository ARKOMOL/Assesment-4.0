import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';

const AddRecords = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
    const onSubmit = data => {
console.log(data);
  const url = `https://still-beyond-69108.herokuapp.com/add-records`
 
  console.log(url);
  fetch(url, {
      method:'POST',
      headers: {
          'content-type':'application/json'
      },
      body:JSON.stringify(data)
  })
  .then(res =>res.json())
  .then(r => {
  toast.success('success')
    console.log(r)
    reset()
    
  })



    
  };
  

  
    return (
        <div className=''>
            <h1 className='text-4xl text-yellow-400'>Add Records</h1>
        <div className='flex  justify-center items-center'>

        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Name' class="input w-full input-bordered"  {...register("name", { required: true })} />
        <p> {errors.name && <span>This field is required</span>}</p>
        
        <input placeholder='Imgage-1'  class="input mt-5 w-full input-bordered" {...register("imgOne", { required: true })} />
       <p> {errors.imgOne && <span>This field is required</span>}</p>
       <input placeholder='Imgage-2' class="input mt-5 w-full input-bordered" {...register("imgTwo", { required: true })} />
       <p> {errors.imgTwo && <span>This field is required</span>}</p>
        <div class="form-control mt-6">

        <input className='btn btn-primary hover:btn-ghost' type="submit" />
        </div>
      </form>
      </div>

      </div>
      </div>
    
      </div>
    );
};

export default AddRecords;