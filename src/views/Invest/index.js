import React from 'react';
import Homescreen from '../../components/Homescreen/index';
import { useWeb3React } from '@web3-react/core';
import './main.css';

function Invest() {
  const { active } = useWeb3React();

  return (
    <>
      <div className="invest">
      {
        active
          ? <>
              <div className="section-title title-style-two text-center mb-60">
                <span>Exchange</span>
                <h2>Crypto Colón <span className='d-block'>Costa Rica Token</span></h2>
              </div>
              
            </>
          : <Homescreen/> 
      }
      </div>
    </>
  )
}

export default Invest;
