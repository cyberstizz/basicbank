import './Home.css';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

let mytest = ''


const Home = () => {
        const [accounts, setAccounts] = useState('')
        const [searchField, setSearchField] = useState('')
        const [userName, setName] = useState('')
        const [password, setPassword] = useState('')
        const [data, setData] = useState('')
        const [csrfToken, setCsrfToken] = useState(null)


         const API_HOST = process.env.REACT_APP_API_HOST || 'http://localhost:8000';



        const getCsrfToken = async () => {
            if (csrfToken === null) {
              const response = await fetch(`${API_HOST}/csrf`, {
                credentials: 'include',
              });
              const data = await response.json();
              console.log(`this is the data inside the if statement ${data.csrfToken}`)
              setCsrfToken(csrfToken)
              return data.csrfToken;
            }
            console.log(`this is the token outside of the if statement ${csrfToken}`)
            return csrfToken;
          }


    useEffect(() => {
        const mountCall = async () => {
        const testCall = await fetch(API_HOST);
        const fullCall = await testCall.text()
        console.log(fullCall)
        setAccounts(fullCall)
        }

        const csrfCall = async () => {
            if(!csrfToken) await getCsrfToken();
        }

    mountCall()
    csrfCall();

    }, [])


    const navigate = useNavigate()

  
    // const getCsrfToken = async () => {
    //   if (csrfToken === null) {
    //     const response = await fetch(`${API_HOST}/csrf/`, {
    //       credentials: 'include',
    //     });
    //     const data = await response.json();
    //   }

    //   console.log('CSRF Token:', data.csrfToken);
    //   setCsrfToken(data.csrfToken)

    //   return csrfToken;
    // }




    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('Sending CSRF Token:', csrfToken); 
        const loginCall = await fetch(`${API_HOST}/login`, {
            method: "POST",
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken ? csrfToken : await getCsrfToken()
              },
              credentials: 'include',
              body: JSON.stringify({
              username: userName,
              password: password
              })
        })
console.log(loginCall.status)

    if(loginCall.status == 200){
         navigate('/accounts')
    }else {
        alert('sorry your login failed, either your username or password is incorrect')
    }
    
}





  




    const handleLogout = async (event) => {
        event.preventDefault()

        const logoutCall = await fetch(`${API_HOST}/logout`, {
            method: "POST",
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': await getCsrfToken()
              },
              credentials: 'include',
        })
    }


    const handleUsernameText = async (event) =>{
        event.preventDefault();
        const searchQuery = event.target.value;
        console.log(searchQuery)
        // setSearchField(searchQuery);
        setName(searchQuery)
      };

      const handlePasswordText = async (event) =>{
        event.preventDefault();
        const searchQuery = event.target.value;
        console.log(searchQuery)
        // setting the password
        setPassword(searchQuery)
      };

      

      const logTestAccount = async () => {
        const loginCall = await fetch(`${API_HOST}/login`, {
            method: "POST",
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken ? csrfToken : await getCsrfToken()
              },
              credentials: 'include',
              body: JSON.stringify({
              username: 'John_Doe',
              password: '$ucce$$5'
              })
        })


console.log(loginCall.status)

    if(loginCall.status == 200){
         navigate('/accounts')
    };
    
}
    return(
        <div id="fullpage">
                    <div className="top_section">
                    <p className="logo"> Basic Bank</p>
                        <ul className="navlist">
                            <li>About</li>
                            <li>Help</li>
                            <li>Locations</li>


                        </ul>
                    <Link to={"/create"}><button id="signin">Sign up</button></Link>
        </div>

        <div className="moreOptions">
        <ul className="navListTwo">
       <span className="hoverStart"> <li>Personal</li></span> 
        <li>Investment & Wealth Management</li>
        <li>Commercial</li>
        <li>Loans</li>
        <li>Small Business</li>


        </ul>
        
        </div>

        <div className="secondOptionstab">

        <ul className="navListThree">
        <li>Checking</li>
        <li>Savings & CD's</li>
        <li>Credit Cards</li>
        <li>Home Loans</li>
        <li>Personal Loans</li>
        <li>Auto Loans</li>
        <li>Premier</li>
        <li>Education & Tools</li>




        </ul>

        </div>

        <div className="bodysection">

            <div className="siginInSection">
            <form type="submit" onSubmit={handleLogin}>
            <input type="text"  onChange={handleUsernameText} className="username" placeholder="username" name='username'></input>
            <input type="password" onChange={handlePasswordText} className="password" placeholder="password" name='password'></input>
            <input type="submit" className="submitButton" value="Sign In"></input>
            <div className="fillersection">

            </div>
            <div></div>
            </form>
            <input type="submit" className="submitButton" value="Test Me" onClick={logTestAccount}></input>





            </div>

            {/* some words for the slogan section*/}
            <div className="sloganSection">
            <span className='buildingsmart'>$200 Checking </span>
            <br/>
                <span className="wealth">On Us!</span>
            <br/>
                    <span className="bottomslogantext">Open an eligible checking 
                    <br/>
                    account with qualifying deposits</span>

                    <button className="learnmore">Learn More</button>
            </div>


          

            {/*words for the filler section */}
            {/* <div className='firstFillerSection'>
            Keep it simple
            <br />
            keep it Basic!
            </div> */}



            <div className="fillerSection">


                <div className='firstFillerSection'>
            Keep it simple
            <br />
            keep it <span className='basic'>Basic</span>
                 </div>

            <div className='secondFillerSection'>
               
            Secure your future
            <br />
            With One Click!

                </div>

            </div>

        </div>
       




        </div>
    )
};

export default Home;
