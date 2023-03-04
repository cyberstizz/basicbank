


const OpenComponent = () => {
    return(
        <div>
        <div className="">

        
        
        <div className="">
            <div className="">
                
                
                <div className="">
        <input placeholder="Name" type="text" className="" onChange={setNameHandler}></input>
        <div className=""></div>
        <p className="">Name</p>

                </div>


                <div className="">
        <input placeholder="Password" type="password" className="" onChange={setPasswordHandler}></input>
        <div className=""></div>
        <p className="">Password</p>
                </div>



                <div className="">
        <input placeholder="email" type="text" className="" onChange={setEmailHandler}></input>
        <div className=""></div>
        <p className="">Email</p>
                </div>
       
       
        </div>




        <div className="">


        <div className="">

        <select placeholder="Account Type" type="text" className="" onChange={setAccountHandler}>
            <option>Checking</option>
            <option>Savings</option>
        </select>
        <div className=""></div>
        <p className="">Account type</p>

        </div>


        <div className="">

        <input placeholder="Deposit" type="number" min='1' max='1000000' className="" onChange={setDepositHandler}></input>
        <div className=""></div>
        <p className="">Deposit</p>
        </div>


        </div>
        <input type="submit" value="Open Account" className="" onClick={makeAccount}></input>



        </div>




        </div>
        </div>
    )
};

export default OpenComponent;