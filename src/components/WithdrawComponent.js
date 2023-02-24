import {Link} from 'react-router-dom'
import './WithdrawComponent.css'

const WithdrawComponent = () => {
    return (
        <div className='fullWithdrawComponent'>
          
          
          <div className='toprow'>
            <div className='Xout'>&#9747;</div>
            <div className='withdrawHeader'>Withdraw</div>
          </div>

          <div className='withdrawSection'>
            <div className='withdrawSectionHeader'></div>
            <input type='text' value='Withdraw Amount' className='withdrawField'></input>
          </div>
          <div className='descriptionSection'>description</div>
          <button className='withdrawButton'>Make Withdrawal</button>

          
          
          
          </div>
      )
}


export default WithdrawComponent;