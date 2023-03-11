import {Link} from 'react-router-dom'
import './TransferConfirmation.css'
import { useSelector } from 'react-redux'

const TransferConfirmation = (props) => {

  const transferConfirmationAmount = useSelector((state) => state.transfer.transfer_Amount)

  const transferConfirmationFromAccount = useSelector((state) => state.transfer.transfer_from)

  const transferConfirmationToAccount = useSelector((state) => state.transfer.transfer_to)


  const API_HOST = 'http://localhost:8000';

  let _csrfToken = null;

  const getCsrfToken = async () => {
    if (_csrfToken === null) {
      const response = await fetch(`${API_HOST}/csrf/`, {
        credentials: 'include',
      });
      const data = await response.json();
      _csrfToken = data.csrfToken;
    }
    return _csrfToken;
  }






    return (
        <div className='fullCompleteTransferComponent'>
          <div className='transferConfirmationTopDiv'>
          <div className='transferXout' onClick={props.xoutHandler}>x</div>
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