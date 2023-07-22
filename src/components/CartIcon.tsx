import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <div>
        <Link href="/tum" className='flex items-center gap-4 md:h-5 md:w-5'>
            <div className='relative w-8 h-8'>
                <Image src="/cart.png" alt="" fill/>
            </div>
            <span>Cart(3)</span>
        </Link>
    </div>
  )
}

export default CartIcon