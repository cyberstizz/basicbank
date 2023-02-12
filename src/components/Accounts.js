import './Accounts.css'
import { useEffect, useState } from 'react';


const Accounts = () => {
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




    <div className='bottomsection'>

        <div className='coverimage'>

            <div></div>

            <div></div>

        </div>

    </div>

    </div>
  )
}

export default Accounts;
