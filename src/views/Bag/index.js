import React from 'react';
import Homescreen from '../../components/Homescreen/index';
import Wallet from '../../components/Wallet/index';
import InvestBox from '../../components/InvestBox/index';
import { useWeb3React } from '@web3-react/core';
import './main.css';

function Bag() {
  const { active } = useWeb3React();

  return (
    <>
      <div className="wallet">
      {
        active
          ? <>
              <div>
                <Wallet />
                <InvestBox />
              </div>
            </>
            : <Homescreen/> 
        }
      </div>
    </>
  )
}

export default Bag;
