import {Link} from 'react-router-dom'
import { useState } from 'react'
import './DepositComponent.css'
import { useDispatch } from 'react-redux'
import { depositAmountActionCreater } from './ActionCreaters'

const DepositComponent = (props) => {

  const dispatch = useDispatch()

  const addDepositHandler = (event) =>{
    event.preventDefault()

    dispatch(depositAmountActionCreater(event.target.value))
  }

    return (
<div className='fullDepositComponent'>
          
          
          <div className='toprow'>
            <div className='Xout' onClick={props.xoutHandler}>x</div>
            <div className='depositHeader'>deposit</div>
          </div>

          <div className='depositSection'>
            <div className='depositSectionHeader'>Deposit Amount</div>
            <input onChange={addDepositHandler} type='text' placeholder='$0.00' className='depositField'></input>
          </div>
          <div className='descriptionSection'>description</div>
          <button onClick={props.depositHandler} className='depositButton'>Make deposit</button>

          
          
          
          </div>      
          
          )
}


export default DepositComponent;