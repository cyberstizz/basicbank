import {Link} from 'react-router-dom'
import './TransferConfirmation.css'
import { useSelector } from 'react-redux'

const TransferConfirmation = (props) => {

  const transferConfirmationAmount = useSelector((state) => state.transfer.transfer_Amount)

    return (
        <div className='fullCompleteTransferComponent'>
          <div className='transferConfirmationTopDiv'>
          <div className='Xout' onClick={props.xoutHandler}>x</div>
            <div className='transferConfirmationHeader'>Are you sure?</div>
          </div>



          <div className='transferConfirmationMiddleSection'>
              <div className='transferConfirmationTransferAmountText'>Transfer Amount</div>
              <div className='transferConfirmationAmountValue'>{transferConfirmationAmount}</div>
              <div className='transferConfirmationFromAccountText'>From Account</div>
              <div className='transferConfirmation'>&#8595;</div>
              <div className='transferConfirmation'></div>
              <div className='transferConfirmation'></div>            
          </div>
          
          
          
          
          <button className='transferConfirmationButton'> Make Transfer</button>

        </div>
      )
}


export default TransferConfirmation;