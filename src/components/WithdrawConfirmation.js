import {Link} from 'react-router-dom'
import './WithdrawConfirmation.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const WithdrawConfirmation = (props) => {

let success = ''

const withdrawAmount = useSelector((state) => state.withdraw.withdraw_amount)

const withdrawFrom = useSelector((state) => state.withdraw.withdraw_from)


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



const makeWithdrawal = async () => {
  console.log('i am the makewithdrawal function and I have been called')

//make post request to server
const withdrawCall = await fetch('http://localhost:8000/withdraw', {
method: "POST",
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-CSRFToken': await getCsrfToken()
},
credentials: 'include',
body: JSON.stringify({
  account_number: withdrawFrom,
  withdrawal_amount: Number(withdrawAmount) 
})
})

console.log(withdrawCall.status)
if(withdrawCall.status == 200){
  alert('success! your withdrawal went through')
  window.location.reload();
}

success = 'succeeded'

//if request is succesful alert success
// if(withdrawCall.status() == 201){
//   alert(`you have sucessfully withdrawn $${amouunt} from account# ${accountNumber}`)
// }
}


    return (
<div className='fullWithdrawComponent'>
          
          
          <div className='toprow'>
            <div className='Xout' onClick={props.xoutHandler}>&#9747;</div>
            <div className='withdrawHeader'>Are you sure</div>
          </div>

          <div className='withdrawSection'>
            <div className='withdrawSectionHeader'>Withdraw Amount</div>
            <div className='thewithdrawField'>you will be withdrawing ${withdrawAmount} from account # {withdrawFrom}</div>
          </div>
          <div className='descriptionSection'>description</div>
          <button onClick={makeWithdrawal} className='withdrawButton'>Make Deposit</button>
          
          
          </div>      )
}


export default WithdrawConfirmation;