import {Link} from 'react-router-dom'
import './TransferConfirmation.css'
import { useSelector } from 'react-redux'

const TransferConfirmation = (props) => {

  const transferConfirmationAmount = useSelector((state) => state.transfer.transfer_Amount)

  const transferConfirmationFromAccount = useSelector((state) => state.transfer.transfer_from)

  const transferConfirmationToAccount = useSelector((state) => state.transfer.transfer_to)


    return (
        <div className='fullCompleteTransferComponent'>
          <div className='transferConfirmationTopDiv'>
          <div className='Xout' onClick={props.xoutHandler}>x</div>
            <div className='transferConfirmationHeader'>Are you sure?</div>
          </div>



          <div className='transferConfirmationMiddleSection'>
              <div className='transferConfirmationTransferAmountText'>Transfer Amount</div>
              <div className='transferConfirmationAmountValue'>${transferConfirmationAmount}</div>
              <div className='transferConfirmationFromAccountText'>From Account # {transferConfirmationFromAccount}</div>
              <div className='transferConfirmationArrow'>&#8595;</div>
              <div className='transferConfirmationToText'>to Account # {transferConfirmationToAccount}</div>
              <div className='transferConfirmationDecorativeLine'></div> 
              <button className='transferConfirmationButton'> Make Transfer</button>
           
          </div>
          
          
          
          

        </div>
      )
}


export default TransferConfirmation;