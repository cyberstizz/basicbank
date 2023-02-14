import './AccountCard.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const AccountCard = (accountType, accountNumber, accountBalance) => {
  return (
    <div className='cardbackground'>
      
      <div className='accountType'>{accountType}</div>

      <div className='accountNumber'>{accountNumber}</div>
      <div className='goldLine'></div>
      <div className='accountBalance'><span className='dollarsign'>$</span>{accountBalance}</div>
      <div className='accountButtons'>
      
      <button className='depositButton'>Deposit</button>
      <br />
      <button className='withdrawButton'>Withdraw</button>

      </div>

      
      
      </div>
  )
}

export default AccountCard;
