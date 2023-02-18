import './Home.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

    let mytest = ''


const Home = () => {
        const [accounts, setAccounts] = useState('')
        const [searchField, setSearchField] = useState('')
        const [name, setName] = useState('')
        const [data, setData] = useState('')




    useEffect(() => {
        const mountCall = async () => {
const testCall = await fetch('http://localhost:8000', {
        username: "tima",
        password: "tima@tima"
});
                                                // login/<str:username>/<str:password>

        mytest = await testCall.text()

        setName(mytest)

 console.log(mytest)
setAccounts(mytest)
        }

    mountCall()

    }, [])


    const handleSearchText = async (event) =>{
        event.preventDefault();
        const searchQuery = event.target.value;
        console.log(searchQuery)
        setSearchField(searchQuery);
        setName(event.target.username)
      };



    return(
        <div id="fullpage">
        <div className="top_section">
        <br/>
       <span className="logo"> Basic Bank</span>
        <ul className="navlist">
            <li>About</li>
            <li>Help</li>
            <li>Locations</li>


        </ul>
        <button id="signin">Sign in</button>

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
            <form type="submit" onChange={handleSearchText}>
            <input type="text" className="username" placeholder="username" name='username'></input>
            <input type="text" className="password" placeholder="password" name='password'></input>
           <Link to={"/accounts"}><input type="submit" className="submitButton" value="Test Me"></input></Link>
            <div className="fillersection">


            </div>
            <div></div>
            </form>





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

            <div className="fillerSection">

            </div>

        </div>
       




        </div>
    )
};

export default Home;
