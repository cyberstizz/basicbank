 import {Link} from 'react-router-dom';
 import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

const Create = () => {

const navigate = useNavigate();
//name, email, account, deposit

const [name, setName] = useState('');

const [password, setPassword] = useState('');

const [email, setEmail] = useState('');

const [account, setAccount] = useState('checking');

const [deposit, setDeposit] = useState(0);



const setNameHandler = (e) => {

setName(e.target.value)

}

const setPasswordHandler = (e) => {
    
    setPassword(e.target.value)
    
    }


const setEmailHandler = (e) => {
        
    setEmail(e.target.value)
        
}

const setAccountHandler = (e) => {

            
    setAccount(e.target.value)
            
};


const setDepositHandler = (e) => {

    
    setDeposit(e.target.value)
    
    };

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




    const makeAccount = async () => {

        const allMyStuffObject = {
            body: {
            username: name,
            password: password,
            email: email,
            account: account,
            deposit: deposit
            }
        }
    
        console.log(`I am the makeAccount function and I have been called,
        further, you should know that this is the information that you will be sending
        ${allMyStuffObject.body.account}`)





        const createAccountCall = await fetch('http://localhost:8000/create', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': await getCsrfToken()
        },
        credentials: 'include',
        body: JSON.stringify({
            username: name,
            password: password,
            email: email,
            account: account,
            deposit: deposit
        })
        })

console.log(createAccountCall.status)
if(createAccountCall.status === 200){
  alert('success! your account has been succesfulyy created!')
  navigate('/')
}

        



    }




    return(

<div className='fullAccountsPage'>
    
    
    <div className='topHeader'>

    <Link to={"/"} style={{textDecoration:"none"}}>  <div className='logo'>
        Basic Bank
        </div></Link>

        <Link to={"/"} style={{textDecoration:"none"}}><div className='logout'>
        Back
        </div>
        </Link>


    </div>


    <div className='infoSection'>

    <div className='createNewAccountHeader'>Create new account</div>


    </div>


        <div className="createbottomsection">

        
        
        <div className="createNewAccountForm">
            <div className="createUserSection">
                
                
                <div className="firstNameBlock">
        <input placeholder="Name" type="text" className="firstname" onChange={setNameHandler}></input>
        <div className="decorativeLine"></div>
        <p className="nameText">Name</p>

                </div>


                <div className="lastNameBlock">
        <input placeholder="Password" type="password" className="lastname" onChange={setPasswordHandler}></input>
        <div className="decorativeLine"></div>
        <p className="lastNameText">Password</p>
                </div>



                <div className="emailBlock">
        <input placeholder="email" type="text" className="email" onChange={setEmailHandler}></input>
        <div className="decorativeLine"></div>
        <p className="emailText">Email</p>
                </div>
       
       
        </div>




        <div className="createAccountSection">


        <div className="accountTypeBlock">

        <select placeholder="Account Type" type="text" className="accounttype" onChange={setAccountHandler}>
            <option>Checking</option>
            <option>Savings</option>
        </select>
        <div className="decorativeLine"></div>
        <p className="accountTypeText">Account type</p>

        </div>


        <div className="depositBlock">

        <input placeholder="Deposit" type="text" className="deposit" onChange={setDepositHandler}></input>
        <div className="decorativeLine"></div>
        <p className="emailText">Deposit</p>
        </div>


        </div>
        <input type="submit" value="Open Account" className="openAccountButton" onClick={makeAccount}></input>



        </div>




        </div>




    </div>
      )
}


export default Create;