// import React from 'react'
// import { useLocation } from 'react-router-dom';

// function ViewPage({data}) {
//     const query = new URLSearchParams(useLocation().search);
//     const from = query.get("from");
//     const to = query.get("to");
//     const date = query.get("date");
     
//     const handleClick=(e)=> [
//         e.preventDefaultValue()
//      ]

//   return (
//     <div>

//           <h4>Boarding: {from}</h4>
//           <h4>Dropping: {to}</h4>
//           <h4>Date: {date}</h4>  
//           <button onClick={handleClick}>Proceed to Payment</button>
//     </div>
//   )
// }

// export default ViewPage