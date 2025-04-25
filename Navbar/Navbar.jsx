import React, { useContext, useState, useRef } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';
import all_product from '../Assets/all_product'; // Make sure the path is correct

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    const toggleSearch = () => {
        setShowSearch(prev => !prev);
        setSearchQuery('');
        setSearchResults([]);
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        if (query.trim() !== '') {
            const results = all_product.filter(product =>
                product.name.toLowerCase().includes(query)
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <Link to="/" className="nav-logo-link">
                    <img src={logo} alt="Logo" />
                    <p>TrendyFits</p>
                </Link>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="Dropdown" />

            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" && <hr />}</li>
                <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>{menu === "men" && <hr />}</li>
                <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>{menu === "women" && <hr />}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" && <hr />}</li>
            </ul>

            <div className="nav-login-cart">
                <i className="fa fa-search" onClick={toggleSearch} style={{ fontSize: '22px', cursor: 'pointer' }}></i>
                {showSearch && (
                    <div className="nav-search-container">
                        <input
                            type="text"
                            className="nav-search-box"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        {searchQuery && (
                            <div className="search-results">
                                {searchResults.length > 0 ? (
                                    searchResults.map((item) => (
                                        <div key={item.id} className="search-result-item">
                                            <img src={item.image} alt={item.name} />
                                            <p>{item.name}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No results found</p>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {localStorage.getItem('auth-token')
                    ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
                    : <Link to='/login'><button>Login</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
