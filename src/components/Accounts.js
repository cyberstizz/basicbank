import './Accounts.css'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import AccountCard from './AccountCard';
import { Link } from 'react-router-dom';
import DepositComponent from './DepositComponent'
import DepositConfirmation from './DepositConfirmation'
import TransferComponent from './TransferComponent'
import TransferConfirmation from './TransferConfirmation'
import WithdrawComponent from './WithdrawComponent'
import WithdrawConfirmation from './WithdrawConfirmation'



const Accounts = () => {

 //first are the usestate variables for the page

 const [depositAccount, setDepositAccount] = useState(null)

 const [depositAmount, setDepositAmount] = useState(0)
 
 const [withdrawAccount, setWithdrawAccount] = useState(null)
 
 const [withdrawAmount, setWithdrawAmount] = useState(0)
 
 const [transferFrom, setTransferFrom] = useState(null)
 
 const [transferTo, setTransferTo] = useState(null)
 
 const [transferType, setTransferType] = useState('')
 
 const [transferAmount, setTransferAmount] = useState(0)
 
 const [data, setData] = useState([])
 
 const [usersname, setUsersName] = useState()


  //next are the functions that will actually make the transactions

  const makeDeposit = async (accountNumber, amount) => {

    //make post request to server
    const depositCall = await fetch('http://localhost:8000/deposit', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': await getCsrfToken()
      },
      credentials: 'include',
      body: {
        account: accountNumber,
        amount: amount
      }
    })
    console.log(depositCall.status())

    //if request is succesful alert success
    // if(depositCall.status() == 201){
    //   alert(`you have sucessfully deposited $${amouunt} into account# ${accountNumber}`)
    // }

  }
  
  const makeWithdrawal = async (accountNumber, amount) => {

//make post request to server
const withdrawCall = await fetch('http://localhost:8000/withdraw', {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRFToken': await getCsrfToken()
  },
  credentials: 'include',
  body: {
    account: accountNumber,
    amount: amount
  }
})
console.log(withdrawCall.status())

//if request is succesful alert success
// if(withdrawCall.status() == 201){
//   alert(`you have sucessfully withdrawn $${amouunt} from account# ${accountNumber}`)
// }


  }
  
const makeTranser = async (fromAccount, toAccount, type, amount) => {

  //make post request to server
  const transferCall = await fetch('http://localhost:8000/transfer', {
    method: "POST",
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRFToken': await getCsrfToken()
    },
    credentials: 'include',
    body: {
    fromAccount: fromAccount,
    toAccount: toAccount,
    type: type,
    amount: amount
  }
})



console.log(transferCall.status())

//if request is succesful alert success
// if(transferCall.status() == 201){
//   alert(`you have sucessfully deposited $${amouunt} into account# ${accountNumber}`)
// }




  }


  //now the functions which will be handlers for text input and opening modals
  //and fyi I hate leaving non descriptive variables but react now INSISTS upon
  //this e variable I am using as a parameter for the event



  const handleDepositText = (e) => {
    e.preventDefault()

    setDepositAmount(e.target.value)
  }





  const startDeposit = (accountNumber) => {

    //open modal by setting the display to the deposit value of
    //the display array which is 0
    let transactionSpace = document.getElementById('displayField');

    let selectedComponent = displayArray[0];

    transactionSpace.innerHTML = selectedComponent;


    setDepositAccount(accountNumber)
  }
  




  const handleWithdrawText = (e) => {
    e.preventDefault()

    setWithdrawAmount(e.target.value)
  } 
  
  


  
  const startWithdrawal = (accountNumber) => {


    let transactionSpace = document.getElementById('displayField');

    let selectedComponent = displayArray[2];

    transactionSpace.innerHTML = selectedComponent;


    setWithdrawAccount(accountNumber)
  }
  
  
  
  
  const handleTransferTo = () => {


    // setTransferTo(e.target.value)

    console.log('time to complete the handletransferto function')
  }


  const handleTransferFrom = () => {

    // setTransferFrom(e.target.value)

    console.log('time to complete the handletransferfrom function')

  }



  const handleTransferAmount = () => {

    // setTransferAmount(e.target.value)
    console.log('time to complete the handletransferamount function')


  }



  const StartTransfer = () => {


  //open modal by setting the display to the transaction conponent from
  //the display array which is 4
    let transactionSpace = document.getElementById('displayField');

    let selectedComponent = displayArray[4];

    transactionSpace.innerHTML = selectedComponent;


    //set depositAmount useState variable
    //setDepositAmount(e.target.value)
  }


const completeDeposit = () => {

  let transactionSpace = document.getElementById('displayField');

  let selectedComponent = displayArray[1];

  transactionSpace.innerHTML = selectedComponent;


}

const completeWithdraw = () => {
  
  let transactionSpace = document.getElementById('displayField');

  let selectedComponent = displayArray[3];

  transactionSpace.innerHTML = selectedComponent;


}


const completeTransfer = () => {
  
  let transactionSpace = document.getElementById('displayField');

  let selectedComponent = displayArray[5];

  transactionSpace.innerHTML = selectedComponent;


}





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



//this is an array that will toggle between values in the display field
//it will consist of six components and the string 'none'

const displayArray = [<DepositComponent onchange={handleDepositText} handler={completeDeposit} />, <DepositConfirmation handler={makeDeposit} />, <WithdrawComponent onchange={handleWithdrawText} handler={completeWithdraw} />, <WithdrawConfirmation handler={makeWithdrawal} />, <TransferComponent onChange={handleTransferAmount} toChangeHandler={handleTransferTo} fromChangeHandler={handleTransferFrom} handler={completeTransfer} />, <TransferConfirmation  handler={makeTranser} />, 'none']


//function for setting data 
useEffect(() => {


  
const databaseCall = async () => {

  const getAccountObject = await fetch(`http://localhost:8000/accounts`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': await getCsrfToken()
    },
    credentials: 'include',
  })
    
  const results = await getAccountObject.json()
  console.log(results.data.accounts)

   setData(results.data.accounts.map(acc => acc))
   setUsersName(results.data.username)
                     
                          

  }

  databaseCall()


}
, [])

let navigate = useNavigate()


const handleLogout = async () => {
  const logout = await fetch('http://localhost:8000/logout', {
    method: "POST",
  headers: {
    'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': await getCsrfToken()
  },
  credentials: 'include',

  })

  navigate('/');
}


const testFunction = (secret) => {
  console.log(`i have been called without interruption hopefully, and the secret is.....${secret}`)
}



  return (
    <div className='fullAccountsPage'>
    
    
    <div className='topHeader'>

      <Link to={"/"} style={{textDecoration:"none"}}><div className='logo'>
      Basic Bank 
        </div></Link>
        <div className='logout' onClick={handleLogout}>
        Logout
        </div>

    </div>


    <div className='infoSection'>

        <div className='name'>{usersname}</div>

        <div className='accountnumber'>Accounts</div>

        <div className='state'>State</div>

    </div>
  
{/*                             
{Object.entries(JSON.parse(data)).map(acc => {
                              return acc[1].accounttype
                            })} */}
{/* 
{data.map(acc => {
      return <AccountCard accountType={acc[1].accounttype} accountNumber={acc[1].accountnumber} accountBalance={acc[1].accountbalance} />
                            
                            })} */}




    <div className='bottomsection'>
    
        <div className='coverimage'>

        <div id='displayField'>
          <WithdrawComponent onChange={testFunction} />
        </div>
         {data.map((acc, index) => {

          if(acc.accounttype){
      return <AccountCard key={index} depositHandler={startDeposit} withDrawHandler={startWithdrawal} tranferHandler={StartTransfer} accountType={acc.accounttype} accountNumber={acc.accountnumber} accountBalance={acc.accountbalance} />
        }     
                            })} 
          
 

        </div>

    </div>

    </div>
  )
}

export default Accounts;
