import {Link} from 'react-router-dom'
import './DepositConfirmation.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const DepositConfirmation = (props) => {

let success = ''

const depositAmount = useSelector((state) => state.deposit.deposit_amount)

const depositFrom = useSelector((state) => state.deposit.deposit_from)


const API_HOST = process.env.REACT_APP_API_HOST || 'http://localhost:8000';

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



const makeDeposit = async () => {
  console.log('i am the makedeposit function and I have been called')

//make post request to server
const depositCall = await fetch('http://localhost:8000/deposit', {
method: "POST",
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-CSRFToken': await getCsrfToken()
},
credentials: 'include',
body: JSON.stringify({
  account_number: depositFrom,
  deposit_amount: Number(depositAmount) 
})
})

console.log(depositCall.status)
if(depositCall.status == 200){
  alert('success! your deposit went through')
  window.location.reload();
}

success = 'succeeded'

//if request is succesful alert success
// if(withdrawCall.status() == 201){
//   alert(`you have sucessfully withdrawn $${amouunt} from account# ${accountNumber}`)
// }
}


    return (
<div className='fullDepositComponent'>
          
          
          <div className='toprow'>
            <div className='Xout' onClick={props.xoutHandler}>&#9747;</div>
            <div className='depositConfrimationHeader'>Are you sure?</div>
          </div>

          <div className='depositSection'>
            <div className='depositSectionHeader'>deposit Amount</div>
            <div className='thedepositField'>you will be depositing ${depositAmount} into account # {depositFrom}</div>
          </div>
          <button onClick={makeDeposit} className='depositButton'>Make Deposit</button>
          
          
          </div>      )
}


export default DepositConfirmation;