import React from 'react';
import metamaskIcon from '../../assets/metamask.png';
import Loading from '../../components/Loading/index';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../config/connector';
import TokenList from '../../config/tokens/token-list-sepolia.json';
import useBalance from '../../hooks/useBalance';
import './main.css';

function Header() {

  const [selectedToken, setSelectedToken] = React.useState(TokenList[0]);
  let [isLoading, setIsLoading] = React.useState(false);
  const { active, activate, deactivate } = useWeb3React();

  async function connect() {
    setIsLoading(true);
    try {
      await activate(injected);
      localStorage.setItem('isWalletConnected', 'true');
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  async function disconnect() {
    setIsLoading(true);
    try {
      await deactivate();
      localStorage.setItem('isWalletConnected', 'false');
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  const [balance] = useBalance(
    selectedToken.address,
    selectedToken.decimals
  );

  return (
    <>{(active)
        ?
          <nav className="navbar">
            <div className='container'>
              <div className="logo d-flex align-items-center mb-2">
                <h2>Cólones <span>Wallet</span></h2>
              </div>
              <button  onClick={disconnect} type="button">
                Logout
              </button>
            </div>
          </nav>
        : isLoading === true 
        ? <Loading /> 
        : <button className="connect-btn d-flex align-items-center justify-content-center m-0" onClick={connect}>
            <img src={metamaskIcon} alt="" />
            Connect your Metamask
          </button>
      }
      
    </>
  )
}

export default Header;
