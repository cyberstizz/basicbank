import './Home.css';


const Home = () => {
//const testCall = await fetch('http://localhost:8001');

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
            <form type="submit">
            <input type="text" class="username" placeholder="username"></input>
            <input type="text" class="password" placeholder="password"></input>
            <input type="submit" class="submitButton"></input>
            <div></div>
            <div></div>
            </form>





            </div>

            {/* some words for the slogan section*/}
            <div class="sloganSection">


            </div>


          

            {/*words for the filler section */}

            <div class="fillerSection">

            </div>

        </div>
       




        </div>
    )
};

export default Home;