import {Link} from 'react-router-dom'
import './TransferComponent.css'

const TransferComponent = (props) => {
    return (
        <div className='fullTransferComponent'>TransferComponent
        
        <div className='transferTop'>
        <div className='Xout' onClick={props.xoutHandler}>x</div>
        <div className='opennewaccounttextheader'>Open new account</div>

        </div>
        <div className='transferAmountField'></div>
        <div className='transferFromToField'></div>
        <button></button>

        
        
        
        
        </div>
      )
}


export default TransferComponent;