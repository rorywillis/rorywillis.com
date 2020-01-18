import React from 'react'
import { Link, NavLink, useLocation } from "react-router-dom";
import cc from "classcat";

export default function Header(props) {

    const { pathname } = useLocation();

    const links = [
        {
            url: "/",
            title: "Home"
        },
        {
            url: "/posts",
            title: "Posts"
        },
        {
            url: "/about",
            title: "About"
        }
    ]

    return (
        <div className="d-flex justify-content-between align-items-center mt-4">
            <Link to="/" className="d-flex justify-content-start align-items-center" style={{textDecoration: "none"}}>
                <img src={"/images/rory.jpg"} className="img img-fluid rounded-circle mr-2" alt="Rory Willis" style={{ maxWidth: 100 }} />
                <h3 className="m-0 ml-3 text-dark" style={{fontFamily: "Reey"}}>Rory Willis</h3> 
            </Link>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {links.map(link => (
                            <NavLink 
                                to={link.url} 
                                activeClassName="" 
                                className={cc([{
                                    "nav-item nav-link": true,
                                    "text-muted": pathname === link.url ? false : true,
                                    "text-primary": pathname === link.url ? true : false
                                }])}
                                exact={true}
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}
