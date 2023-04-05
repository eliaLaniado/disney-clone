import { auth, provider } from "../firebase"
import "./Header.css"
const Header =(props) => {
    const handleAuth = () =>{
        auth.signInWithPopup(provider).then((result)=>{
            console.log(result)
        } ).catch((error) =>alert(error.message))
    }
    return (
        <nav class="Nav"> 
            <div class="Logo">
                <img src="/images/logo.svg" alt="Disney+"/>
            </div>
            <div class="NavMenu"> 
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="HOME"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="SEARCH"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="WHATCHLIST"/>
                    <span>WHATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="ORIGINALS"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="MOVIES"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="SERIES"/>
                    <span>SERIES</span>
                </a>
            </div>
            <a class="Login"> LOGIN</a>
        </nav>

    )
}
export default Header