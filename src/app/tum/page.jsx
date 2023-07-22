import Image from 'next/image'
import React from 'react'
import "@/app/tum/page.css"
const page = () => {
  return (
    <div className='containerr'>
        <div className='left'>
            <table className='table'>
                <tr className='tr'>
                    <th className='pr'>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
<th>Quantity</th>
<th>Total</th>
                </tr>
                <tr>
<td>
    <div className='imgContainer'>
        
   <Image src="/temporary/p10.png" alt="" width={100} height={100}/>
    </div>
</td>
<td>
 <span className='name'>CORALZO</span>
</td>
<td>
         
<span className='extras'>
Double Ingredient,spicy sauce
</span>
</td>
<td>
    <span className='price'>
        $19.00
    </span>
</td>
<td>
    <span className='quantity'>2</span>
</td>
<td>
    <span className='total'>$39.0</span>
</td>
                </tr>
                <tr>
<td>
    <div className='imgContainer'>
        
   <Image src="/temporary/p10.png" alt="" width={100} height={100}/>
    </div>
</td>
<td>
 <span className='name'>CORALZO</span>
</td>
<td>
         
<span className='extras'>
Double Ingredient,spicy sauce
</span>
</td>
<td>
    <span className='price'>
        $19.00
    </span>
</td>
<td>
    <span className='quantity'>2</span>
</td>
<td>
    <span className='total'>$39.0</span>
</td>
                </tr>
                <tr>
<td>
    <div className='imgContainer'>
        
   <Image src="/temporary/p10.png" alt="" width={100} height={100}/>
    </div>
</td>
<td>
 <span className='name'>CORALZO</span>
</td>
<td>
         
<span className='extras'>
Double Ingredient,spicy sauce
</span>
</td>
<td>
    <span className='price'>
        $19.00
    </span>
</td>
<td>
    <span className='quantity'>2</span>
</td>
<td>
    <span className='total'>$39.0</span>
</td>
                </tr>
                <tr>
<td>
    <div className='imgContainer'>
        
   <Image src="/temporary/p10.png" alt="" width={100} height={100}/>
    </div>
</td>
<td>
 <span className='name'>CORALZO</span>
</td>
<td>
         
<span className='extras'>
Double Ingredient,spicy sauce
</span>
</td>
<td>
    <span className='price'>
        $19.00
    </span>
</td>
<td>
    <span className='quantity'>2</span>
</td>
<td>
    <span className='total'>$39.0</span>
</td>
                </tr>
                <tr>
<td>
    <div className='imgContainer'>
        
   <Image src="/temporary/p10.png" alt="" width={100} height={100}/>
    </div>
</td>
<td>
 <span className='name'>CORALZO</span>
</td>
<td>
         
<span className='extras'>
Double Ingredient,spicy sauce
</span>
</td>
<td>
    <span className='price'>
        $19.00
    </span>
</td>
<td>
    <span className='quantity'>2</span>
</td>

    

<td>
    <span className='total'>$39.0</span>
</td>
                </tr>
            </table>
        </div >
        <div className="right">
<div className='wrapper'>
    <h2 className='title'>CART TOTAL</h2>
<div className='totalText'>
<b className='totalTextTitle'>Subtotal</b>$89.00
</div>
<div className='totalText'>
<b className='totalTextTitle'>Subtotal</b>$89.00
</div>
<div className='totalText'>
<b className='totalTextTitle'>Subtotal</b>$89.00
</div>
<button className='button'>CHECKOUT NOW</button>
</div>

        </div>
    </div>
  )
}

export default page