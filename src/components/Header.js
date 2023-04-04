import "./Header.css"
const Header =(props) => {
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
        </nav>
    )
}
export default Header