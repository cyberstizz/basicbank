import './Accounts.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AccountCard from './AccountCard';


const Accounts = () => {


//step one is to grab the parameters
const { name } = useParams();

console.log(name)

const [data, setData] = useState('')

//function for setting data 






//now write the useEffect hook which will call the database with the parameter
useEffect(() => {


  const databaseCall = async () => {
  const getAccountObject = await fetch(`http://localhost:8000/accounts`)
    
                         const theResponse = await getAccountObject.text()

                          setData(theResponse)

  }


  databaseCall()

}, [])






  return (
    <div className='fullAccountsPage'>
    
    
    <div className='topHeader'>

        <div className='logo'>
        Basic Bank
        </div>
        <div className='logout'>
        Logout
        </div>

    </div>


    <div className='infoSection'>

        <div className='name'>Name</div>

        <div className='accountnumber'>Account Number</div>

        <div className='state'>State</div>

    </div>

    {data}


    <div className='bottomsection'>

        <div className='coverimage'>

        <AccountCard />

            <div></div>

        </div>

    </div>

    </div>
  )
}

export default Accounts;
