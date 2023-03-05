import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OpenComponent.css'


const OpenComponent = (props) => {

    
   
   
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
               username: props.user,
               account: account,
               deposit: deposit
               }
           }
       
           console.log(`I am the makeAccount function and I have been called,
           further, you should know that this is the information that you will be sending
           ${allMyStuffObject.body.account}`)
   
   
   
   
   
           const createOpenAccountCall = await fetch('http://localhost:8000/create', {
           method: "POST",
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
               'X-CSRFToken': await getCsrfToken()
           },
           credentials: 'include',
           body: JSON.stringify({
               username: props.user,
               account: account,
               deposit: deposit
           })
           })
   
   console.log(createOpenAccountCall.status)
   if(createOpenAccountCall.status === 200){
     alert('success! your account has been succesfulyy created!')
     navigate('/accounts')
   }
   
           
   
   
   
       }
   




    return(

        <div className='fullOpenComponent'>

        
        
            <div className="opencreateUserSection">



        <div className="openAccountType">

        <select placeholder="Account Type" type="text" className="" onChange={setAccountHandler}>
            <option>Checking</option>
            <option>Savings</option>
        </select>
        <div className=""></div>
        <p className="">Account type</p>

        </div>


        <div className="opendepositclass">

        <input placeholder="Deposit" type="number" min='1' max='1000000' className="" onChange={setDepositHandler}></input>
        <div className=""></div>
        <p className="">Deposit</p>
        </div>


        </div>
        <input type="submit" value="Open Account" className="" onClick={makeAccount}></input>


        </div>
    )
};


export default OpenComponent;