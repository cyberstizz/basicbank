import {Link} from 'react-router-dom'
import { useState } from 'react'
import './DepositComponent.css'
import { useDispatch } from 'react-redux'
import { depositAmountActionCreater } from './ActionCreaters'

const DepositComponent = (props) => {

  const dispatch = useDispatch()

  const addDepositHandler = (event) =>{
    event.preventDefault()

    let whatWasTyped = Number(event.target.value)

    console.log(typeof(whatWasTyped))

    // dispatch(depositAmountActionCreater(event.target.value))
  }

    return (
<div className='fullDepositComponent'>
          
          
          <div className='toprow'>
            <div className='Xout' onClick={props.xoutHandler}>x</div>
            <div className='depositHeader'>deposit</div>
          </div>

          <div className='depositSection'>
            <div className='depositSectionHeader'>Deposit Amount</div>
            <div className='depositFieldSection'>  <div className='dollarSign'>$</div>   <input onChange={(event) => dispatch(depositAmountActionCreater(event.target.value))} type='number' min="1" max="100000" placeholder='0.00' className='depositField'></input>  </div>
          </div>
          <div className='descriptionSection'>description</div>
          <button onClick={props.depositHandler} className='depositButton'>Make deposit</button>

          
          
          
          </div>      
          
          )
}


export default DepositComponent;