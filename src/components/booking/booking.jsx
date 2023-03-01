import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { redirect, useLocation } from 'react-router-dom'
import BusDetails from '../bus-details/bus-details';
import './booking.css'

function Booking() {
  const [searchBus, setSearchBus] = useState("");
  const [loading, setLoading] = useState(false);
  const query = new URLSearchParams(useLocation().search);
  const from = query.get("from");
  const to = query.get("to");
  const date = query.get("date");
  useEffect(() => {
    setLoading(true)
    if (from && to && date) {
      axios.get(`http://192.168.1.8/api/Bus?from=${from}&to=${to}`)
        .then(res => {
          setSearchBus(res.data)
          console.log(res.data)
          setLoading(false)
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      redirect("/dashboard")
    }
  }, [])
  return (
        <div>
          {loading && <div>Loading....</div>}
          <div className='ad'>
          <h4>FROM : {from}</h4>
          <h4>TO : {to}</h4>
          <h4>JOURNEY DATE : {date}</h4>
          </div><br/><br/>
          <div>
            <tr className='title'>
              <td>Bus</td>
              <td>Type</td>
              <td>Seat Available</td>
              <td>Price</td>
              <td>BOOK</td>
            </tr>
          </div>
          { Array.from(searchBus).map((item, index) =>(
              <BusDetails key={index} data={item} />
              
        ))}
        </div>
      )
    }
export default Booking
