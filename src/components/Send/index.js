import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { getERC20Contract } from '../../config/tokens/contractStore';
import { useAlert } from 'react-alert';
import Loading from '../../components/Loading/index';
import TokenList from '../../config/tokens/token-list-sepolia.json';
import walletIcon from '../../assets/CRCc.png';
import closetIcon from '../../assets/close.png';
import metamaskIcon from '../../assets/metamask.png';
import sendIcon from '../../assets/send.png';
import './main.css';

function Send(props) {

  const alert = useAlert();
  const [selectedToken, setSelectedToken] = React.useState(TokenList[0]);
  let [isLoading, setIsLoading] = React.useState(false);
  const { account, library } = useWeb3React();

  const Send = function(e) {
    e.preventDefault();
    setIsLoading(true);

    const target = e.target;

    const decimals = 100000000;
    const amount = target.amount.value;
    const recipient = target.recipient.value;
    const coraTokenContract = getERC20Contract(selectedToken.address, library);

    if(coraTokenContract) {
      coraTokenContract.methods.transfer(recipient, amount * decimals)
      .send({
        from: account,
      })
      .on('error', (error) => {
        alert.show('There was an error ' + error.message);
        setIsLoading(false);
      })
      .on('transactionHash', (txHash) => {
        alert.show('Transaction sent');
      })
      .on('receipt', () => {
        alert.show('Transaction confirmed');
        target.amount.value = 0.00;
        target.recipient.value = '';
        setIsLoading(false);
      });
    }
  }

  const [closeSendWindow, setCloseSendWindow] = React.useState(false);
  React.useEffect(() => {
    if (closeSendWindow === true) props.setShowSendWindow(false);
  }, [closeSendWindow])

  return (
    <>
      <form className="send-box" onSubmit={Send}>
        <img src={closetIcon} className="close-window" onClick={() => setCloseSendWindow(true)} alt="" />
        <div className="d-flex justify-content-center align-items-center mb-3">
          <img src={sendIcon} className="mr-2" alt="" />
          <p className={ account ? 'headline' : 'gray headline' }>Send your Cólones</p>
        </div>
        <div className="send-box-input">
          <div className="d-flex justify-content-between you-send">
            <div className="d-flex align-items-center">
              <span className={ account ? '' : 'gray' }>I want to send</span>
            </div>
            <div className="d-flex align-items-center">
              <input 
                name="amount" 
                placeholder="0.00" 
                type="number" 
                min="1"
                max="1000000000"
                disabled={ account ? false : true}
                required />
              <img className="pic" src={walletIcon} alt="" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center you-send-address">
            <div className="d-flex align-items-center">
              <input 
                name="recipient" 
                placeholder="Recipient address?" 
                type="text"
                disabled={ account ? false : true}
                required />
            </div>
            <img className="pic" src={metamaskIcon} alt="" />
          </div>
        </div>
        {
          isLoading === true 
          ? <Loading /> 
          : <button 
              className="main-button"
              disabled={ account ? false : true}
            >Send Cólones</button>
        }
        <p className={ 'subtitle mt-3 mb-0'}>
          Make sure you copied the metamask address properly. If the address is incorrect, your Cólones will be lost
        </p>
      </form>
    </>
  )
}

export default Send;
