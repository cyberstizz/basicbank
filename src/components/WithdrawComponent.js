import {Link} from 'react-router-dom'
import './WithdrawComponent.css'

const WithdrawComponent = (props) => {
    return (
        <div className='fullWithdrawComponent'>
          
          
          <div className='toprow'>
            <div className='Xout'>&#9747;</div>
            <div className='withdrawHeader'>Withdraw</div>
          </div>

          <div className='withdrawSection'>
            <div className='withdrawSectionHeader'>Withdrawal Amount</div>
            <input onChange={props.onChange} type='text' placeholder='$0.00' className='withdrawField'></input>
          </div>
          <div className='descriptionSection'>description</div>
          <button className='withdrawButton'>Make Withdrawal</button>

          
          
          
          </div>
      )
}


export default WithdrawComponent;