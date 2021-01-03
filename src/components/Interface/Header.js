import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav className="nav navBar navbar-dark bg-primary mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand">AppContacts</a>

                        <ul className="navbar-nav d-inline-block">
                            <li className="nav-item d-inline-block mr-2">
                                <Link to="/liste" className="nav-link">Accueil</Link>
                            </li>
                            <li className="nav-item d-inline-block mr-2">
                                <Link to="/ajoute" className="nav-link">Ajouter</Link>
                            </li>
                            <li className="nav-item d-inline-block mr-2">
                                <Link to="/apropos" className="nav-link">A Propos</Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;