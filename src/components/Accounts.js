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
  




//step one is to grab the parameters
// const { name } = useParams();

// console.log(name)

const [data, setData] = useState([])

//function for setting data 
useEffect(() => {

const databaseCall = async () => {
  const getAccountObject = await fetch(`http://localhost:8000/accounts`, {
    headers: {'X-CSRFToken': await getCsrfToken()},
    method: "POST",
    body: {
      "name": "chicken"
    }
  })
    

                          setData(Object.entries(JSON.parse(await getAccountObject.text())).map(acc => acc))

                        

                            
                          

  }



//now write the useEffect hook which will call the database with the parameter

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

        <div className='name'>Name</div>

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
      return <AccountCard key={index} accountType={acc[1].accounttype} accountNumber={acc[1].accountnumber} accountBalance={acc[1].accountbalance} />
                            
                            })}
          
 

        </div>

    </div>

    </div>
  )
}

export default Accounts;
