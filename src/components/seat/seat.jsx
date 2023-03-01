import React, { useState } from 'react'
import "./seat.css";
import Modal from "react-modal"
import { useLocation } from 'react-router-dom';
import SleeperPage from '../sleeper-page/sleeper-page';
import SeaterPage from '../seater-page/seater-page';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Seat({ totalSeats }) {
    // const busTypes = 'sleeper'; 
  // const Bustype = "Sleeper"  
    // const query = new URLSearchParams(useLocation().search);
    // const from = query.get("from");
    // const to = query.get("to");
    // const date = query.get("date");
   
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>

{totalSeats.Bustype === 'Sleeper' ? <SleeperPage /> : <SeaterPage />}
     <h3>Total Seats: {totalSeats.TotalSeats}</h3>
      <h3>Available: {totalSeats.AvailableSeats}</h3>
      <h3>Unavailble:{totalSeats.BookedSeats}</h3>

            <button
                onClick={openModal}
                disabled={totalSeats.available ? "false" : "true"} className={`seat ${totalSeats.isAvailable ? "available" : "unavailable"}`}>


                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                    <button onClick={closeModal}>Cancel</button>


                  


                    {/* <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
                    <h3>Continue to Payment</h3>



                </Modal>


            </button>

        </div>
    )
}

export default Seat