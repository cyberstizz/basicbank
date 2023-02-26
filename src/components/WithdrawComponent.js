import {Link} from 'react-router-dom'
import './WithdrawComponent.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as actionCreaters from './ActionCreaters'

const WithdrawComponent = (props) => {

//first the useState varaibles


const [withdrawField, setWithdrawField] = useState('')

    const withdrawFieldHandler = (e) => {
      e.preventDefault()
      setWithdrawField(e)

      useDispatch()
    }

    c



    return (
        <div className='fullWithdrawComponent'>
          
          
          <div className='toprow'>
            <div className='Xout'>x</div>
            <div className='withdrawHeader'>Withdraw</div>
          </div>

          <div className='withdrawSection'>
            <div className='withdrawSectionHeader'>Withdrawal Amount</div>
            <input onChange={withdrawFieldHandler} type='text' placeholder='$0.00' className='withdrawField'></input>
          </div>
          <div className='descriptionSection'>description</div>
          <button onClick={withdrawClickHandler} className='withdrawButton'>Make Withdrawal</button>

          
          
          
          </div>
      )
}


export default WithdrawComponent;