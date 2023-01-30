import './Home.css';


const Home = () => {
    return (
        <div id="fullpage">


        <div class="hero">
         Basic bank
        </div>

        <div id="midsection">
        Accounts
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