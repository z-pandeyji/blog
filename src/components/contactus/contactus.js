import './contactus.css';
import { useState } from 'react';
const Contactus = () => {
  const[status,setStatus] = useState("");
  const showStatus =() =>{
    setStatus('Form Submitted Successfully')
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-3"> &nbsp; &nbsp; </div>
        <div className=" col-md-6 col-sm-6">
          <div className="contact-wrapper">
            <h3>contact us</h3>
            <div className="input-wrapper">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="input-wrapper">
              <label>Subject</label>
              <input type="text" className="form-control" />
            </div>
            <div className="input-wrapper">
              <label>Message</label>
              <input type="text" className="form-control" />
            </div>
            <button className="btn btn-success" onClick={showStatus}>Send</button>
            <div>
              <p>{status}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-3"></div>
      </div>
    </div>
  );
};
export default Contactus;
