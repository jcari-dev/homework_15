import React from 'react'
import { nanoid } from 'nanoid'
import receipt1 from '../justjs/receipts'

import receipts from '../justjs/receipts'


const Receiptsbody = () => {
    
    return (
        // <div className="receiptBody">
        // <ul> {receipts.map((recep)=>{
            
        // })}

        // </ul>
        
        // </div>
        <div className="receiptsBody">
         <ul> <p className="customerName">{receipt1.receipt1.person}</p>
          <li>Main: {receipt1.receipt1.order.main}</li>
          <li>Protein: {receipt1.receipt1.order.protein}</li>
          <li>Rice: {receipt1.receipt1.order.rice}</li>
          <li>Sauce: {receipt1.receipt1.order.sauce}</li>
          <ul> Toppings: 
            <li>{receipt1.receipt1.order.toppings[0]}</li>
              <li>{receipt1.receipt1.order.toppings[1]}</li>
              
         
             
          </ul>
          <li>Drink: {receipt1.receipt1.order.drink}</li>
          <li>Cost: {receipt1.receipt1.order.cost}</li>
        </ul> 
        </div>
    )
}

export default Receiptsbody;


