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
            <input onChange={props.handleWithdrawAmountChange} type='text' placeholder='$0.00' className='withdrawField'></input>
          </div>
          <div className='descriptionSection'>description</div>
          <button onClick={props.completeWithdraw} className='withdrawButton'>Make Deposit</button>

          
          
          
          </div>      )
}


export default WithdrawConfirmation;