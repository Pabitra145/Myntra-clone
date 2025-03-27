import logo from "../images/myntra_logo.webp"
const Header = () => {
    return(
        <header>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
             <div className="logo_container">
            <a href="/"><img className="myntra_home" src={logo} alt="Myntra Home"/></a>


        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
                <span className="material-symbols-outlined action_icon">person</span>
                <span className="action_name">Profile</span>
            </div>
            <div className="action_container">
                <span className="material-symbols-outlined action_icon">favorite</span>
                <span className="action_name">Wishlist</span>
            </div>
            <div className="action_container">
                <span className="material-symbols-outlined action_icon">shopping_bag</span>
                <a href="/bag"><span className="action_name">Bag</span></a>
            </div>
        </div>
        </header>
    )
}
export default Header