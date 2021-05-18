import React from 'react'
import { nanoid } from 'nanoid'
import {useState} from 'react'



const Receiptsbody = () => {
  const [receipts, setreceipt] = useState([{
      person: 'Karolin',
      order: [{
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: [
          'Baby Bok Choy', 'Cucumber Kimchi'
        ],
        drink: 'Korchata',
        cost: 22
      }],
      paid: false
    },
{
    person: 'Jerrica',
    order: [{
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: [
        'Yuzu Pickled Sweet Pepper', 'Kale'
      ],
      drink: 'Korchata',
      cost: 19
    }],
    paid: false
  },
 {
    person: 'Matt',
    order: [{
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: [
        'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
      ],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20
    }],
    paid: true
  }])

    return (
      <div>
        <ul  key={nanoid()}>
        {receipts.map(receipt => (
          receipt.paid ? null : <div className="receiptsBody">
                    <li key={nanoid()}>{receipt.person}</li>
                    {receipt.order.map(order =>(
                    <div>
                          <li key={nanoid()}>Main: {order.main}</li>
                          <li key={nanoid()}>Protein: {order.protein}</li>
                          <li key={nanoid()}>Rice: {order.rice}</li>
                          <li key={nanoid()}>Sauce: {order.sauce}</li>
                          <li key={nanoid()}>Drink: {order.drink}</li>
                          <li key={nanoid()}>Cost: {order.cost}</li>
                    </div>
                    ))}
          </div> 

        ))}
        </ul>
      </div>
    )
}



export default Receiptsbody;


// HOW TO SHOW THE TOPPINGS WITHOUT REPEATING IT BY THE AMOUNT OF TOPPINGS 






// import React from 'react'
// import { nanoid } from 'nanoid'
// import {useState} from 'react'



// const Receiptsbody = () => {
//   const [receipts, setreceipt] = useState([{
//     person: 'Karolin',
//     order: [{
//       main: 'Burrito',
//       protein: 'Organic Tofu',
//       rice: 'Purple Rice',
//       sauce: 'Green Crack',
//       toppings: [
//         'Baby Bok Choy', 'Cucumber Kimchi'
//       ],
//       drink: 'Korchata',
//       cost: 22
//     }],
//     paid: false
//   }])

//     return (
//       <div>
//         <ul>
//         {receipts.map(receipt => {
         
//           return receipt.order.map(order =>{
            
//             return order.toppings.map(toppings =>(
//               <div>
//                 {receipt.person}
//                 <li>{order.main}</li>
//               <li>{order.protein}</li>
//               <li>{order.rice}</li>
//               <li>{order.sauce}</li>
//                 <li>{toppings}</li>
//                 </div>
              
//           ))
//           })
//         })}
//         </ul>
//       </div>
//     )
// }



// export default Receiptsbody;


