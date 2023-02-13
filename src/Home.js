import './Home.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

    let mytest = ''


const Home = () => {
        const [accounts, setAccounts] = useState('')
        const [searchField, setSearchField] = useState('')
        const [name, setName] = useState('')



    useEffect(() => {
        const mountCall = async () => {
const testCall = await fetch('http://localhost:8000');


        mytest = await testCall.text()

console.log(mytest)
setAccounts(mytest)
        }

    mountCall()

    },[])


    const handleSearchText = async (event) =>{
        event.preventDefault();
        const searchQuery = event.target.value;
        console.log(searchQuery)
        setSearchField(searchQuery);
        setName(event.target.username)
      };



    return(
        <div id="fullpage">
        <div class="top_section">
        <br/>
       <span class="logo"> Basic Bank</span>
        <ul class="navlist">
            <li>About</li>
            <li>Help</li>
            <li>Locations</li>


        </ul>
        <button id="signin">Sign in</button>

        </div>
        <div class="moreOptions">
        <ul class="navListTwo">
       <span class="hoverStart"> <li>Personal</li></span> 
        <li>Investment & Wealth Management</li>
        <li>Commercial</li>
        <li>Loans</li>
        <li>Small Business</li>


        </ul>
        
        </div>

        <div class="secondOptionstab">

        <ul class="navListThree">
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

        <div class="bodysection">

            <div class="siginInSection">
            <form type="submit" onChange={handleSearchText}>
            <input type="text" class="username" placeholder="username" name='username'></input>
            <input type="text" class="password" placeholder="password" name='password'></input>
           <Link to={`accounts/${name}`}><input type="submit" class="submitButton" value="Login"></input></Link>
            <div class="fillersection">


            </div>
            <div></div>
            </form>





            </div>

            {/* some words for the slogan section*/}
            <div class="sloganSection">
            <span className='buildingsmart'>$200 Checking </span>
            <br/>
                <span class="wealth">On Us!</span>
            <br/>
                    <span class="bottomslogantext">Open an eligible checking 
                    <br/>
                    account with qualifying deposits</span>

                    <button class="learnmore">Learn More</button>
            </div>


          

            {/*words for the filler section */}

            <div class="fillerSection">

            </div>

        </div>
       




        </div>
    )
};

export default Home;
