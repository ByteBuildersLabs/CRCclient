import React from 'react';
import exchangeIcon from '../../assets/exchange.png';
import usdcIcon from '../../assets/ethereum.png';
import coinIcon from '../../assets/CRCc.png';
import { useWeb3React } from '@web3-react/core';
import './main.css';

function InvestBox() {

  const { account } = useWeb3React();

  return (
    <>
      <div className="invest-box section-tab">
        <div className='d-flex align-items-center mb-2'>
          <div className='col-12'>
            <p className={ 'title ' + (account ? '' : 'gray') }>
              Crypto Colón gives you all the perks <span> Enjoy our ecosystem</span>
            </p>
          </div>
        </div>
        <div className="trade-box mt-5">  
          <div className="d-flex you-pay">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <img className="token-pic" src={usdcIcon} alt="" />
              <span className={ account ? '' : 'gray' }>ETH</span>
              <span className="title-input">You give</span>
            </div>
            <div>
            </div>
            <div className="d-flex align-items-center">
              <input 
                placeholder="0.00"
                min="1"
                max="1000000000"
                type="number"
                disabled={ account ? false : true}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center exchange-icon">
            <div>
            </div>
            <div className="exchange-icon-img text-center">
              <img src={exchangeIcon} alt="" />
            </div>
            <div>
            </div>
          </div>

          <div className="d-flex you-receive">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <img className="token-pic" src={coinIcon} alt="" />
              <span className={ account ? '' : 'gray' }>Colón</span>
              <span className="title-input">You receive</span>
            </div>
            <div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <span className={ account ? '' : 'gray' }>₡</span>
              <input
                placeholder="0"
                type="number"
                className={ account ? '' : 'gray' }
                disabled={ account ? false : true }
              />
            </div>
          </div>
          <button 
            className="main-button" 
            disabled={ account ? false : true }
          >Exchange</button>
          <p className={ 'subtitle mt-3 mb-0 text-center' }>
            Empowering the Future with Crypto Colón
          </p>
        </div>
      </div>
    </>
  )
}

export default InvestBox;