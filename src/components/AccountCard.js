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
      
      <button className='depositButton' onClick={props.depositHandler}>Deposit</button>
      <br />
      <button className='withdrawButton' onClick={props.withdrawHandler}>Withdraw</button>

      </div>

      
      
      </div>
  )
}

export default AccountCard;
