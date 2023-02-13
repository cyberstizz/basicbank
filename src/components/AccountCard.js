import './AccountCard.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const AccountCard = () => {
  return (
    <div className='cardbackground'>
      
      <div className='accountType'>Checking</div>

      <div className='accountNumber'>47839</div>
      <div className='goldLine'>goldline</div>
      <div className='accountBalance'>$12738</div>
      <div className='accountButtons'>buttons</div>

      
      
      </div>
  )
}

export default AccountCard;
