import React from 'react'
import Seat from '../seat/seat'
// import SeaterPage from '../seater-page/seater-page';
// import SleeperPage from '../sleeper-page/sleeper-page';

function SeatSelection({ data }) {
 
  return (
    <div>
      
      {data.map((seat, index) => (
        <Seat key={index} totalSeats={seat} />
      ))}
      
      {/*{Array.from(data).map((seat, index) => (
        <Seat key={index} data={seat} />
      ))}*/}
     
    </div>
  )
}

export default SeatSelection
