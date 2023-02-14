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
                            console.log(Object.entries(JSON.parse(theResponse)).map(acc => {
                              return acc[1].accounttype
                            }))
                          

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

        <div className='accountnumber'>Accounts</div>

        <div className='state'>State</div>

    </div>

    {Object.entries(JSON.parse(theResponse)).map(acc => {
                              return <AccountCard accountType={acc[1].accounttype} accountNumber={acc[1].accountnumber} accountBalance={acc[1].accountbalance} />
                            })}


    <div className='bottomsection'>

        <div className='coverimage'>
        
        {/* <AccountCard accountType={data.accounttype} accountNumber={data.accountnumber} accountBalance={data.accountbalance} /> */}

            <div></div>

        </div>

    </div>

    </div>
  )
}

export default Accounts;
