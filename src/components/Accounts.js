import './Accounts.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import AccountCard from './AccountCard';
import { Link } from 'react-router-dom';
import DepositComponent from './DepositComponent';
import DepositConfirmation from './DepositConfirmation';
import TransferComponent from './TransferComponent';
import TransferConfirmation from './TransferConfirmation';
import WithdrawComponent from './WithdrawComponent';
import WithdrawConfirmation from './WithdrawConfirmation';
import DeleteComponent from './DeleteComponent';
import CompleteDelete from './CompleteDelete';
import DeleteConfirmation from './'
import DeleteBasicBankComponent from './DeleteBasicBankComponent';
import { useDispatch, useSelector } from 'react-redux';



const Accounts = () => {
const tranferStore = useSelector((state) => state.withdraw.withdraw_amount)

const deposit_from = useSelector((state) => state.deposit.deposit_from)

const depositAmount = useSelector((state) => state.deposit.deposit_amount)

const withdrawFrom = useSelector((state) => state.withdraw.withdraw_from)

const withdrawAmount = useSelector((state) => state.withdraw.withdraw_amount)

const transferFrom = useSelector((state) => state.transfer.transfer_from)

const transferTo = useSelector((state) => state.transfer.transfer_to)

const transferType = useSelector((state) => state.transfer.transfer_type)

const transferAmount = useSelector((state) => state.withdraw.withdraw_from)

// console.log(`these are all the variables for transfer all baked in ${tranferStore}`)


  const handleWithdrawText = (e) => {
    e.preventDefault()

    // setWithdrawAmount(e.target.value)
  } 
 //first are the usestate variables for the page


 
 const [data, setData] = useState([])
 
 const [usersname, setUsersName] = useState()


  //next are the functions that will actually make the transactions

  const completeWithdraw = () => {
  
    console.log('this is the complete withdraw function and I have been called')
      setComponentToShow(<WithdrawConfirmation xoutHandler={xoutHandler} handler={makeWithdrawal} />)
      
    
    
    }
    





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
    withdrawal_amount: withdrawAmount 
  })
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

    // setDepositAmount(e.target.value)
  }





  const startDeposit = () => {

    //open modal by setting the display to the deposit value of
    //the display array which is 0
    let transactionSpace = document.getElementById('displayField');

    transactionSpace.style.visibility = 'visible';


    let selectedComponent = displayArray[0];

    transactionSpace = selectedComponent;


    setComponentToShow(<DepositComponent xoutHandler={xoutHandler} depositHandler={completeDeposit} />)


  }
  




 
  


  
  const startWithdrawal = () => {


    let transactionSpace = document.getElementById('displayField');

    transactionSpace.style.visibility = 'visible';

    // let selectedComponent = displayArray[2];

    // transactionSpace = selectedComponent;
    setComponentToShow(<WithdrawComponent xoutHandler={xoutHandler} onChange={handleWithdrawText} handler={completeWithdraw} />)

    // setWithdrawAccount(accountNumber)
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

    transactionSpace.style.visibility = 'visible';


    let selectedComponent = displayArray[4];

    transactionSpace = selectedComponent;


    setComponentToShow(<TransferComponent xoutHandler={xoutHandler} transferHandler={completeTransfer} />)

  }


const completeDeposit = () => {

  let transactionSpace = document.getElementById('displayField');

  transactionSpace.style.visibility = 'visible';

  // let selectedComponent = displayArray[1];

  // transactionSpace.innerHTML = selectedComponent;

  setComponentToShow(<DepositConfirmation xoutHandler={xoutHandler} handler={completeDeposit} />)
}




const completeTransfer = () => {
  
  let transactionSpace = document.getElementById('displayField');

  let selectedComponent = displayArray[5];

  transactionSpace.innerHTML = selectedComponent;


}

const xoutHandler = () => {

  let transactionSpace = document.getElementById('displayField');

  transactionSpace.style.visibility = 'hidden';


}

const startDelete = () => {

//open modal by setting the display to the transaction conponent from
  //the display array which is 4
  let transactionSpace = document.getElementById('displayField');

  transactionSpace.style.visibility = 'visible';

  if(data.length < 2){
    setComponentToShow(<DeleteBasicBankComponent data={data} xoutHandler={xoutHandler} deleteHandler={CompleteDelete} />)
  }else{

  setComponentToShow(<DeleteComponent data={data} xoutHandler={xoutHandler} deleteOne={deleteConfirmation} />)
  }

};


const deleteConfirmation = () => {

  //make deleteConfirmation show up



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


  const [componentToShow, setComponentToShow] = useState(<WithdrawComponent xoutHandler={xoutHandler} onChange={handleWithdrawText} handler={completeWithdraw} />)

//this is an array that will toggle between values in the display field
//it will consist of six components and the string 'none'

const displayArray = [<DepositComponent onchange={handleDepositText} handler={completeDeposit} />, <DepositConfirmation handler={makeDeposit} />, <WithdrawComponent handler={completeWithdraw} />, <WithdrawConfirmation handler={makeWithdrawal} />, <TransferComponent onChange={handleTransferAmount} toChangeHandler={handleTransferTo} fromChangeHandler={handleTransferFrom} handler={completeTransfer} />, <TransferConfirmation  handler={makeTranser} />, 'none']


//function for setting data 
useEffect(() => {

  // console.log(`this is the redux store state: ${deposit_from}`)

  console.log(`these are all the variables for transfer all baked in ${tranferStore}`)


  
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

        <div className='state' onClick={startDelete}>Delete</div>

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
          {componentToShow}
        </div>
         {data.map((acc, index) => {

          if(acc.accounttype){
      return <AccountCard key={index} depositHandler={startDeposit} withDrawHandler={startWithdrawal} transferHandler={StartTransfer} accountType={acc.accounttype} accountNumber={acc.accountnumber} accountBalance={acc.accountbalance} />
        }     
                            })} 
          
 

        </div>

    </div>

    </div>
  )
}

export default Accounts;