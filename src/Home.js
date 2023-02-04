import './Home.css';


const Home = () => {
//const testCall = await fetch('http://localhost:8001');

    return(
        <div id="fullpage">
        <div class="top_section">
        Basic bank

        <ul>
            <li></li>
            <li></li>

        </ul>
        <button id="signin">Sign in</button>

        </div>

        <div class="hero">
         Basic bank
        </div>

        <div id="midsection">
        Accounts

        <div id="midsectionmenus">
        <div class="accountsection">
        <ul class ="uselessList">
        <li><button>chicken</button></li>
        <li><button>cupcakes</button></li>
        <li><button>pears</button></li>
        <li><button>mangos</button></li>
        <li><button>carraot cake</button></li>


        </ul>

        </div>
        <div class="infosection">
        Welcome to basic bank, the only place where 
        everyone can see your account and there is no privacy!!!


        </div>
        </div>
        <div class="buttonssection">

        <button>Sign in</button>
        <button>Create account</button>

        </div>
        
        </div>


        <div class="footer"></div>




        </div>
    )
};

export default Home;