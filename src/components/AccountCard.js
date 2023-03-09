import './AccountCard.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { withdrawFromActionCreater, depositFromActionCreater, transferFromActionCreater } from './ActionCreaters'
import { useDispatch } from 'react-redux';


const AccountCard = (props) => {


  const dispatch = useDispatch();


  const handleStartWithdrawal = () => {
    //steps
    //1)dispatch props.accountNumber to the top level state
    dispatch(withdrawFromActionCreater(props.accountNumber))

    //2)call the props handler that will open the withdraw component
    props.withDrawHandler()
  }

  const handleStartDeposit = () => {
    //steps
    //1)dispatch props.accountNumber to the top level state

    console.log(props.transferFrom)

    dispatch(depositFromActionCreater(props.accountNumber))

    //2)call the props handler that will open the withdraw component
    props.depositHandler()
  }

  const handleStartTransfer = () => {
    //steps
    //1)dispatch props.accountNumber to the top level state
    dispatch(transferFromActionCreater(props.accountNumber))

    //2)call the props handler that will open the transfer component
    props.transferHandler()
  }       

  return (
    <div className='cardbackground'>
      
      <div className='accountType'>{props.accountType}</div>

      <div className='accountNumber'>Account #{props.accountNumber}</div>
      <div className='goldLine'></div>
      <div className='accountBalance'><span className='dollarsign'>$</span>{props.accountBalance}</div>
      <div className='accountButtons'>
      
      <button className='accountCardDepositButton' onClick={handleStartDeposit}>Deposit</button>
      <br />
      <button className='accountCardWithdrawButton' onClick={handleStartWithdrawal}>Withdraw</button>
      <button className='WithdrawButton' onClick={handleStartTransfer}>Transfer</button>


      </div>

      
      
      </div>
  )
}

export default AccountCard;
