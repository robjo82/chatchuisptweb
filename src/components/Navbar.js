import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Main</Link>
            <Link to="/conditions-generales">Conditions générales</Link>
        </nav>
    );
}

export default Navbar;
