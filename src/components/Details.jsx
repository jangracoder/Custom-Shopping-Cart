import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";

function Details() {
  const {id} =useParams();
  const [product,setproduct]=useState(null);
  
  const getsingleproduct =async()=>{
    try {
      const{data}=await axios.get(`/products/${id}`);
     setproduct(data);
    }
    catch{

    }
  };


  useEffect(()=>{
    getsingleproduct();
  },[])

  return product?  (
    <div className="w-[70%] h-full  m-auto flex gap-8 items-center p-[10%] border">
      <img
        className="object-contain h-[70%] w-[40%] "
        src={product.image}
        alt=""
      />
      <div className="content ">
        <h1 className="text-3xl my-3">{product.title}</h1>
        <h2 className="text-2xl text-zinc-500 mb-3">${product.price}</h2>
        <h3 className="mb-3"># {product.category}</h3>
        <p className="mb-5">{product.description}</p>
        <Link className="py-2 px-5 border rounded-md border-blue-200 text-blue-300 mr-5">Edit</Link>
        <Link className="py-2 px-5 border rounded-md border-red-200 text-red-300">Delete</Link>
      </div>
    </div>
  ) :(
    <Loading/>
  );
}

export default Details;
