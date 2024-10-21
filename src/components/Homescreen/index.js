import React from 'react';
import monster from '../../assets/CRCc.png';
import './main.css';

function Homescreen() {
  return (
    <>
      <div className="homescreen">
        <div className="breadcrumb-content text-right mb-5">
          <h2><span className='d-block'>Welcome to </span>Costa Rica Crypto</h2>
        </div>
        <div className="breadcrumb-content text-left">
          <img src={monster} width="112" height="112" />
          <p>Connect your wallet and <span>Let's start</span></p>
        </div>
      </div>
    </>
  )
}

export default Homescreen;
