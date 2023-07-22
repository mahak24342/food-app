"use client"

import Image from 'next/image'
import Link from 'next/link'
import React ,{useState} from 'react'
import CartIcon from './CartIcon'

const Menu = () => {
  const  [open,setOpen]=useState(false)
  const user=false;
  const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Services", url: "/" },
    { id: 4, title: "Contact", url: "/" },
  ];
  
    return (
    <div>
        { !open ?(
        <Image src="/open1.png" alt="" width={30} height={25}  onClick={()=>setOpen(true)}/>
   ):(
   <Image src="/close.png" alt="" width={20} height={20}   onClick={()=>setOpen(false)}/>
)   }
   {open && (
   <div className='bg-red-500 text-white absolute right-0 top-24 h-[calc(100vh-6rem)] flex flex-col pr-20 items-center justify-center text-3xl gap-8 '>
    {links.map(item=>(
        <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
            {item.title}
        </Link>
    ))}
    {!user ? <Link href="/login"  onClick={()=>setOpen(false)}>Login</Link>:
    <Link href="/orders"  onClick={()=>setOpen(false)}>Orders</Link>}

<Link href="/cart"  onClick={()=>setOpen(false)}>
    <CartIcon/>
    </Link>    
   </div>
 
    )}
 </div>
  
     
  )
}

export default Menu