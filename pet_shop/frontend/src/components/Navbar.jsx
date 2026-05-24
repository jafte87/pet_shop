import './Navbar.css';
import hero from '../assets/hero.png';

function Navbar() {
    return (
        <nav className="navbar">
            <img className="logo" src="" alt="" />
            <div className="search-bar">
                <input type="text" placeholder="Search for pets..." 
                onKeyDown={ (e) => {
                    if (e.key === 'Enter') {
                        console.log('Loading...');
                    }
                }}/>
            </div>
            <ul className='nav-btns'>
                <li>Cart</li>
                <li>Orders</li>
                <li>Wishlist</li>
            </ul>
            <div className='sign-btns'>
               <a href="" className='sign-btn'>Login</a>
               <a href="" className='sign-btn'>Siginup</a>
            </div>
        </nav>
    );
}

export default Navbar;