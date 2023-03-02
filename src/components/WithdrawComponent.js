import {Link} from 'react-router-dom'
import './WithdrawComponent.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionCreaters from './ActionCreaters'
import { basicBankstore } from '../index'

const WithdrawComponent = (props) => {

const withdrawAmountActionCreater = actionCreaters.withdrawAmountActionCreater

const [withdrawField, setWithdrawField] = useState('')

const withdrawState = useSelector((state) => state.withdraw.withdraw_amount)

const dispatch = useDispatch(withdrawAmountActionCreater(withdrawField))



    const WithdrawFieldHandler = (e) => {
      e.preventDefault()
      setWithdrawField(e)

      dispatch(withdrawAmountActionCreater(withdrawField))

    }
useEffect(() => {
  console.log(`this is the new state the withdraw amount ${withdrawState}`)
}, [withdrawField])
    // useEffect(() => {
    //   useDispatch(withdrawAmountActionCreater(withdrawField))
    // }, [withdrawField])



    return (
        <div className='fullWithdrawComponent'>
          
          
          <div className='toprow'>
            <div className='Xout' onClick={props.xoutHandler}>x</div>
            <div className='withdrawHeader'>Withdraw</div>
          </div>

          <div className='withdrawSection'>
            <div className='withdrawSectionHeader'>Withdrawal Amount</div>
            <input onChange={(event) => dispatch(withdrawAmountActionCreater(event.target.value))} type='number'  min="1" max="100000" placeholder='$0.00' className='withdrawField'></input>
          </div>
          <div className='descriptionSection'>description</div>
          <button onClick={props.handler} className='withdrawButton'>Make Withdrawal</button>

          
          
          
          </div>
      )
}


export default WithdrawComponent;