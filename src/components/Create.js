

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
        
        <input placeholder="firstname" type={"text"} className="firstname"></input>
        <div className="decorativeLine"></div>
        <p className="nameText">Name</p>

                </div>



        <input placeholder="lastname"></input>
        <input placeholder="email"></input>

        </div>
        <div className="createAccountSection">

        <input placeholder="account type"></input>
        <input placeholder="account balance"></input>
        </div>
        <input type="submit" value={"Open Account"} className="openAccountButton"></input>



        </form>




        </div>




    </div>
      )
}


export default Create;