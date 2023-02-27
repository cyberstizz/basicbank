import {Link} from 'react-router-dom'
import './WithdrawConfirmation.css'
import { useSelector } from 'react-redux'

const WithdrawConfirmation = (props) => {

const withdrawState = useSelector((state) => state.withdraw.withdraw_amount)


    return (
<div className='fullWithdrawComponent'>
          
          
          <div className='toprow'>
            <div className='Xout'>&#9747;</div>
            <div className='withdrawHeader'>Are you sure</div>
          </div>

          <div className='withdrawSection'>
            <div className='withdrawSectionHeader'>Deposit Amount</div>
            <div className='withdrawField'>you will be withdrawing {withdrawState} from account # {}</div>
          </div>
          <div className='descriptionSection'>description</div>
          <button onClick={props.makeWithdrawal} className='withdrawButton'>Make Deposit</button>
          
          
          </div>      )
}


export default WithdrawConfirmation;