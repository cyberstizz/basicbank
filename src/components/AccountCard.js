import './AccountCard.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const AccountCard = (props) => {
  return (
    <div className='cardbackground'>
      
      <div className='accountType'>{props.accountType}</div>

      <div className='accountNumber'>Account #{props.accountNumber}</div>
      <div className='goldLine'></div>
      <div className='accountBalance'><span className='dollarsign'>$</span>{props.accountBalance}</div>
      <div className='accountButtons'>
      
      <button className='depositButton' onClick={props.depositHandler(props.accountNumber)}>Deposit</button>
      <br />
      <button className='withdrawButton' onClick={props.withdrawHandler(props.accountNumber)}>Withdraw</button>
      <button className='WithdrawButton' onClick={props.transferHandler(props.accountNumber)}>Transfer</button>


      </div>

      
      
      </div>
  )
}

export default AccountCard;
