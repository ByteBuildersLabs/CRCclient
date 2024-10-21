import React from 'react';
import { Link } from 'react-router-dom';
import investIcon from '../../assets/trade.jpg';
import walletIcon from '../../assets/wallet.png';
import './main.css';

function Navbar() {
  return (
    <>
      <div className="navbar-bottom">
        <div className="container d-flex">
          <Link to="/" className="button">
            <img src={investIcon} alt="" />
            Excahnge
          </Link>
          <Link to="/bag" className="button">
            <img src={walletIcon} alt="" />
            Wallet
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;
