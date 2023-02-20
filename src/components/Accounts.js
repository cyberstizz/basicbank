import './Accounts.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AccountCard from './AccountCard';
import { Link } from 'react-router-dom';


const Accounts = () => {

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


const [data, setData] = useState([])

const [usersname, setUsersName] = useState()




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







  return (
    <div className='fullAccountsPage'>
    
    
    <div className='topHeader'>

      <Link to={"/"} style={{textDecoration:"none"}}><div className='logo'>
      Basic Bank 
        </div></Link>
        <div className='logout'>
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
          {console.log(data)}
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
