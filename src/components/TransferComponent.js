import {Link} from 'react-router-dom'
import './TransferComponent.css'
import { useSelector } from 'react-redux'
import { transferAmountActionCreater, transferToActionCreater} from './ActionCreaters'

const TransferComponent = (props) => {

    const handleClickedTransfer = () => {


        //set transfer to with action creater
        transferToActionCreater
        //log both transfer amount and tranfer to to the console

        //call function from props to change display field to transferComplete
    }

    const transferFrom = useSelector(state => state.transfer.transfer_from)
    
    return (
        <div className='fullTransferComponent'>
        
        <div className='transferTop'>
            <div className='Xout' onClick={props.xoutHandler}>x</div>
            <div className='transferTextheader'>Transfer</div>
        </div>
            <div className='transferAmountField'>
            <div className='transferDollarSign'>$</div>
            <input className='transferInput' type='number' onChange={(event) => dispatch(transferAmountActionCreater(event.target.value))}></input>
        </div>


        <div className='transferFromToField'>
            <div className='transferFromToTop'>From account #{transferFrom}</div>
            <div className='transferDecorativeLine'></div>
            <div className='transferFromToBottom'>
                <div className='transferToWord'>To:</div>
                <select className='transferDropDown'>
                    {props.data.map((account, index) => {
                    if(account.accountnumber !== transferFrom){
                    return <option key={index} className="deletetype">{account.accountnumber}</option>
                            }})}
                </select>

            </div>
        </div>
        <button className='transferButton' onClick={handleClickedTransfer}>Transfer</button>

        
        
        
        
        </div>
      )
}


export default TransferComponent;