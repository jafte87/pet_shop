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
                <li className="cart">Cart</li>
                <li className="orders">Orders</li>
                <li className="wishlist">Wishlist</li>
            </ul>
            <a href="">Login</a>
            <a href="">Sigin up</a>
        </nav>
    );
}

export default Navbar;