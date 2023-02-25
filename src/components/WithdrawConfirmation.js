import {Link} from 'react-router-dom'
import './WithdrawConfirmation.css'

const WithdrawConfirmation = (props) => {
    return (
<div className='fullWithdrawComponent'>
          
          
          <div className='toprow'>
            <div className='Xout'>&#9747;</div>
            <div className='withdrawHeader'>Are you sure</div>
          </div>

          <div className='withdrawSection'>
            <div className='withdrawSectionHeader'>Deposit Amount</div>
            <div className='withdrawField'>you will be withdrawing {props.withdrawAmount}</div>
          </div>
          <div className='descriptionSection'>description</div>
          <button onClick={props.makeWithdrawal} className='withdrawButton'>Make Deposit</button>
          
          
          </div>      )
}


export default WithdrawConfirmation;