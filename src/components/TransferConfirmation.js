import {Link} from 'react-router-dom'
import './TransferConfirmation.css'

const TransferConfirmation = (props) => {
    return (
        <div className='fullCompleteTransferComponent'>
          <div className='transferConfirmationTopDiv'>
          <div className='Xout' onClick={props.xoutHandler}>x</div>
            <div className='depositHeader'>Are you sure?</div>
          </div>




          <div className='transferConfirmationMiddleSection'>
              <div></div>
              <div></div>
              <div></div>
              <div>&#8595;</div>
              <div></div>
              <div></div>            
          </div>
          
          
          
          
          <button className='transferConfirmationButton'> Make Transfer</button>

        </div>
      )
}


export default TransferConfirmation;