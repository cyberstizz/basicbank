import {Link} from 'react-router-dom'
import './TransferComponent.css'
import { useSelector } from 'react-redux'

const TransferComponent = (props) => {

    const transferFrom = useSelector(state => state.transfer.transfer_from)
    
    return (
        <div className='fullTransferComponent'>
        
        <div className='transferTop'>
            <div className='Xout' onClick={props.xoutHandler}>x</div>
            <div className='transferTextheader'>Transfer</div>
        </div>
            <div className='transferAmountField'>
            <div className='transferDollarSign'>$</div>
            <input className='transferInput' type='number'></input>
        </div>


        <div className='transferFromToField'>
            <div className='transferFromToTop'>From account {transferFrom}</div>
            <div className='transferFromToBottom'></div>
        </div>
        <button className='transferButton'>Transfer {transferFrom}</button>

        
        
        
        
        </div>
      )
}


export default TransferComponent;