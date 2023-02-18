

const Create = () => {
    return(

<div className='fullAccountsPage'>
    
    
    <div className='topHeader'>

        <div className='logo'>
        Basic Bank
        </div>
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
        <input placeholder="Password" type="text" className="lastname"></input>
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


        <div className="lastNameBlock">
        <input placeholder="account type" type="text" className="email"></input>
        <div className="decorativeLine"></div>
        <p className="emailText">Account type</p>

        </div>



        <input placeholder="account balance"></input>
        </div>
        <input type="submit" value="Open Account" className="openAccountButton"></input>



        </form>




        </div>




    </div>
      )
}


export default Create;