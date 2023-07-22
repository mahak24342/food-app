
"use client"
import React,{useState} from 'react'
import {featuredProducts} from "@/Data"
import "@/app/me/page.css"
const page = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div id='left'>
{featuredProducts.map((gun)=>(
    <>
   
<div className='right'>
<h1 className='title' id="left">{gun.title}</h1>
<img src={gun.img} className="imgContainer "alt=""  />
<h2 className='fl' id="left">${gun.price}</h2>
<div className='ui'>
<input type="number" defaultValue={1} id="gf" />


<button className='red' id="left">Add To Cart</button>
</div>
    </div>
    </>
))}

    </div>
  )
}

export default page