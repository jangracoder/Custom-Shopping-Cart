import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

function Home() {
  const [products] = useContext(ProductContext);

  const {search}=useLocation();
 
  const category =decodeURIComponent(search.split("=")[1]);

  

  const [filteredProducts,setfilteredProducts] =useState(null);
  
  const getProductCategory = async () =>{
    try {
      const {data}=await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    if(!filteredProducts || category =="undefined")setfilteredProducts(products);
    if(category!="undefined")getProductCategory();

  },[category,products]);

  return products ? (
    <>
      <Nav />

      <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap  overflow-y-auto overflow-x-hidden  ">
        {filteredProducts && filteredProducts.map((p, i) => (
          <Link key={i}
            to={`/details/${p.id}`}
            className="card p-3 mr-3 mb-3 shadow-lg shadow-blue-200 rounded w-[18%] h-[40vh] flex flex-col items-center justify-center "
          >
            <div
              className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-105"
              style={{
                backgroundImage:
                  ` url(${p.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-300">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
