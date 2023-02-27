import {Link} from 'react-router-dom'
import './WithdrawConfirmation.css'
import { useSelector } from 'react-redux'

const WithdrawConfirmation = (props) => {

const withdrawAmount = useSelector((state) => state.withdraw.withdraw_amount)

const withdrawFrom = useSelector((state) => state.withdraw.withdraw_from)



    return (
<div className='fullWithdrawComponent'>
          
          
          <div className='toprow'>
            <div className='Xout'>&#9747;</div>
            <div className='withdrawHeader'>Are you sure</div>
          </div>

          <div className='withdrawSection'>
            <div className='withdrawSectionHeader'>Withdraw Amount</div>
            <div className='withdrawField'>you will be withdrawing ${withdrawAmount} from account # {withdrawFrom}</div>
          </div>
          <div className='descriptionSection'>description</div>
          <button onClick={props.makeWithdrawal} className='withdrawButton'>Make Deposit</button>
          
          
          </div>      )
}


export default WithdrawConfirmation;