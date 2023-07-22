import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import Image from 'next/image';
import "@/components/Navbar.css"
const Navbar = () => {
    const user=false;
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
     <div className='urope'>
        <Link href="/"><h3 >Home </h3></Link>
        <Link href="/me"><h3>Menu</h3></Link>
        <Link href="/my"><h3>Offers</h3></Link>
        </div>
      
      
        <div className='text-xl md:font-bold flex-1 md:text-center'> 
        <Link href="/">Lapinoz</Link></div>
<div className='md:hidden'>
        
        <Menu/>
        </div>
<div className='hidden md:flex gap-4 items-center justify-end flex-1'>
    <div className=' md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300  px-1 rounded-md'>
        <Image src="/OIP.jpg" color="red" height={40} width={20} alt=""/>
<span>904249503</span>
    </div>
    {
        !user ?(
  
<Link href="/login">Login</Link>):
        (<Link href="/menu">Menu</Link>)}
        <CartIcon/>
</div>
    </div>
    
  )
}

export default Navbar