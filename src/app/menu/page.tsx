import React from 'react'
import "./menu.css"
import { menu } from '@/Data'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      {menu.map((category)=>(


        <Link href={'/menu/${category.slug}'}
        key={category.id}>
          <div id="fle">
          <img src={category.img} width={450} height={400}
            className='ig' alt=""/>
          
        
          <h1>{category.title}</h1>
        

          <p>{category.desc}</p>
          <img src={category.ug} width={200} height={240} className='op'/>
         
</div>
        </Link>
      ))}


<button id="flp">Explore Now</button>

    </div>
  )
}

export default page