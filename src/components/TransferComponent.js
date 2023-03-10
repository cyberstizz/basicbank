import {Link} from 'react-router-dom'
import './TransferComponent.css'
import { useSelector } from 'react-redux'
import { transferAmountActionCreater, transferToActionCreater} from './ActionCreaters'
import { useDispatch } from 'react-redux'




const TransferComponent = (props) => {

    const transferFrom = useSelector(state => state.transfer.transfer_from)

    let transferAmount = useSelector((state) => state.transfer.transfer_Amount)
    let transferTo = useSelector((state) => state.transfer.transfer_to)

    const dispatch = useDispatch();


const transferInputchangeHandler = (event) => {

        console.log(event.target.value)

        dispatch(transferAmountActionCreater(Number(event.target.value)))
}


    const transferToChangeHandler = (event) => {
        //attempt to store the account if the dropdown was used
            let whereToTransfer = event.target.value
            console.log(event.target.value)
            if(whereToTransfer == null){
        dispatch(transferToActionCreater(props.data[0].accountnumber))
            }
    }

    const handleClickedTransfer = () => {

        if(transferTo == null){
            dispatch(transferToActionCreater(props.data[0].accountnumber))
                } else{
        //set transfer to with action creater
        dispatch(transferToActionCreater(transferTo))
                }
        //log both transfer amount and tranfer to to the console
      
        //call function from props to change display field to transferComplete

        props.transferHandler()
    }

    
    return (
        <div className='fullTransferComponent'>
        
        <div className='transferTop'>
            <div className='Xout' onClick={props.xoutHandler}>x</div>
            <div className='transferTextheader'>Transfer</div>
        </div>
            <div className='transferAmountField'>
            <div className='transferDollarSign'>$</div>
            <input className='transferInput' type='number' onChange={transferInputchangeHandler}></input>
        </div>


        <div className='transferFromToField'>
            <div className='transferFromToTop'>From account #{transferFrom}</div>
            <div className='transferDecorativeLine'></div>
            <div className='transferFromToBottom'>
                <div className='transferToWord'>To:</div>
                <select className='transferDropDown' onChange={transferToChangeHandler}>
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