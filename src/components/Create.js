 import {Link} from 'react-router-dom'

const Create = () => {
    return(

<div className='fullAccountsPage'>
    
    
    <div className='topHeader'>

    <Link to={"/"} style={{textDecoration:"none"}}>  <div className='logo'>
        Basic Bank
        </div></Link>
        <div className='logout'>
        Back
        </div>

    </div>


    <div className='infoSection'>

    <div className='createNewAccountHeader'>Create new account</div>


    </div>


        <div className="createbottomsection">

        
        
        <form className="createNewAccountForm">
            <div className="createUserSection">
                
                
                <div className="firstNameBlock">
        <input placeholder="First Name" type="text" className="firstname"></input>
        <div className="decorativeLine"></div>
        <p className="nameText">First Name</p>

                </div>


                <div className="lastNameBlock">
        <input placeholder="Password" type="password" className="lastname"></input>
        <div className="decorativeLine"></div>
        <p className="lastNameText">Password</p>
                </div>



                <div className="emailBlock">
        <input placeholder="email" type="text" className="email"></input>
        <div className="decorativeLine"></div>
        <p className="emailText">Email</p>
                </div>
       
       
        </div>




        <div className="createAccountSection">


        <div className="accountTypeBlock">

        <select placeholder="Account Type" type="text" className="accounttype">
            <option>Checking</option>
            <option>Savings</option>
        </select>
        <div className="decorativeLine"></div>
        <p className="accountTypeText">Account type</p>

        </div>


        <div className="depositBlock">

        <input placeholder="Deposit" type="text" className="deposit"></input>
        <div className="decorativeLine"></div>
        <p className="emailText">Deposit</p>
        </div>


        </div>
        <input type="submit" value="Open Account" className="openAccountButton"></input>



        </form>




        </div>




    </div>
      )
}


export default Create;