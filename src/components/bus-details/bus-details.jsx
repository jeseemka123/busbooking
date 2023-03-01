
import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import SeatSelection from '../seat-selection/seat-selection';

function BusDetails({data}) {

  const { busName,busNo,busType,noOfSeats,boarding,seatsType,destination,fare, busId } = data;

  const [ busData, setBusData ] = useState(null)
  const [ showDetails, setShowDetails ] = useState(false)
   
 
  
  const getSeatsData = ()=>{
    axios.get(`https://6396d95586d04c7633827a23.mockapi.io/Busbokking`)
    .then(({data})=>{
      setBusData(data)
      setShowDetails(true)
    })
  }

  return (
    <div className="row">
      {/* <tr className='list'>
    <td>{busName} </td>
    <p> {busNo} </p>
    <td>{busType}  </td>
    <td> {noOfSeats} </td>
    <p> {borading} </p>
    <p> {seatsType} </p>
    <p> {destination} </p>
    <td>{fare} </td>
    <Button> View Seats</Button>
    </tr> */}

      <tr className="list">
        <td className="bold">{busName}</td>
        <td>{busType}</td>
        <td>{noOfSeats}</td>
        <td className="bold">{fare}</td>
        <td className="btn-display">
          <Button onClick={getSeatsData}> View Seats</Button>
          {/* <button onClick={()=> getSeatsData(busId)}> View Seats</button> */}
        

    {showDetails && <SeatSelection data={busData}  />}
        </td>
      </tr>
    </div>
    
  );
}


export default BusDetails;
