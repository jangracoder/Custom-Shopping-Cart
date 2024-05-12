import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context';

function Create() {

  const [products,setproduct]=useContext(ProductContext);

    const [title,setTitle] =useState("");
    const [image,setImage] =useState("");
    const [category,setCategory] =useState("");
    const [price,setPrice] =useState("");
    const [description,setdescription] =useState("");

    const AddProductHandler = (e)=> {
        e.preventDefault();
        const product ={
            title,image,category,price,description,
        }

        setproduct([...products,product]);

        console.log(product)
    }
   

  return (
   <form onSubmit={AddProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
    <h1 className=' w-1/2 mb-3 text-3xl'>Add New Product</h1>
    <input type="url" 
    placeholder='image link'
    className='text-1xl bg-zinc-100 rounded w-1/2 p-3 mb-3'
    onChange={(e)=> setImage(e.target.value)}
    value={image}
    />


    <input type="text" 
    placeholder='title'
    className='text-1xl bg-zinc-100 rounded w-1/2 p-3 mb-3'
    onChange={(e)=> setTitle(e.target.value)}
    value={title}
    />
    <div className='w-1/2 flex justify-between mb-3'>
    <input type="text" 
    placeholder='category'
    className='text-1xl bg-zinc-100 rounded w-[49%] p-3  '
    onChange={(e)=> setCategory(e.target.value)}
    value={category}
    />


    <input type="text" 
    placeholder='price'
    className='text-1xl bg-zinc-100 rounded w-[49%] p-3 '
    onChange={(e)=> setPrice(e.target.value)}
    value={price}
    />
    </div>
    <textarea 
    onChange={(e)=> setdescription(e.target.value)}
    value={description}
    placeholder='enter product description'
    rows={5}
    
    className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
    ></textarea>
    <button
      
      className="py-2 px-5 border rounded-md border-blue-200 text-blue-300"
    >
      Addd New Product
    </button>
   </form>
  )
}

export default Create


