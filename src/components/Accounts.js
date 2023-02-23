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

  //first are the functions that will actually make the transactions

  const makeDeposti = async (accountNumber, amount) => {

  }
  
  const makeWithdrawal = async (accountNumber, amount) => {

  }
  
  const makeTranser = async (from, to, type, amount) => {

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

  //now declaring the usestate variables for the page

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

//this is an array that will toggle between values in the display field
//it will consist of six components and the string 'none'

const displayArray = [<DepositComponent />, <DepositConfirmation />, <WithdrawComponent />, <WithdrawConfirmation />, <TransferComponent />, <TransferConfirmation />, 'none']


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

  console.log(logout)
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

        <div className='displayField'></div>
         {data.map((acc, index) => {

          if(acc.accounttype){
      return <AccountCard key={index} accountType={acc.accounttype} accountNumber={acc.accountnumber} accountBalance={acc.accountbalance} />
        }     
                            })} 
          
 

        </div>

    </div>

    </div>
  )
}

export default Accounts;
