import './AccountCard.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const AccountCard = (accountType, accountNumber, accountBalance) => {
  return (
    <div className='cardbackground'>
      
      <div className='accountType'>Checking</div>

      <div className='accountNumber'>Account #47839</div>
      <div className='goldLine'></div>
      <div className='accountBalance'>$12738</div>
      <div className='accountButtons'>
      
      <button>Deposit</button>
      
      <button>Withdraw</button>

      </div>

      
      
      </div>
  )
}

export default AccountCard;
