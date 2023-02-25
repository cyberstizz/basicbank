import {Link} from 'react-router-dom'
import './WithdrawComponent.css'
import { useState } from 'react'

const WithdrawComponent = (props) => {

//first the useState varaibles

const [withdrawField, setWithdrawField] = useState('')


    return (
        <div className='fullWithdrawComponent'>
          
          
          <div className='toprow'>
            <div className='Xout'>x</div>
            <div className='withdrawHeader'>Withdraw</div>
          </div>

          <div className='withdrawSection'>
            <div className='withdrawSectionHeader'>Withdrawal Amount</div>
            <input onChange={props.onChange} type='text' placeholder='$0.00' className='withdrawField'></input>
          </div>
          <div className='descriptionSection'>description</div>
          <button onClick={props.handler} className='withdrawButton'>Make Withdrawal</button>

          
          
          
          </div>
      )
}


export default WithdrawComponent;