import React from 'react'
import Image from 'next/image'
import "@/app/order/page.css"
const Order = () => {
  return (
    <div className='containerr'>
        <div className='left'>
          <div className='lo'>
            <table>
              <tr>
                <th>
                  ORDER ID
                </th>
                <th>
                  Customer
                </th>
                <th>
                  Address
                </th>
                <th>
                  Total
                </th>
              </tr>
              <tr>
              <td>
 <span className='name'>24414</span>
</td>

<td>
    <span className='total'>John</span>
    </td>

<td>
         
<span className='extras'>
Elton Street New Jersey
</span>
</td>
<td>
    <span className='price'>
        $19.00
    </span>
</td>

<td>
    <div className='imgContainer'>
        
   <Image src="/payment.png" alt="" width={100} height={100}/>
    </div>
</td>

    

</tr>
            </table>
          </div>
          <div className='clg'>
            <div>
              <Image src="/p22.jpg" alt="" width={80} height={80}/>
          <span>Delivery</span>
            </div>
            <div>
              <Image src="/p21.jpg" alt=""  width={60} height={60}/>
          <span>Payment</span>
            </div>
            <div>
              <Image src="/ship.png" alt="" width={150} height={150}/>
          <span>Shipment</span>
            </div>
          </div>
<div className='right'>
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
<button className='button'>PAID</button>
</div>

</div>
        </div>
        </div>
    
  )
}

export default Order