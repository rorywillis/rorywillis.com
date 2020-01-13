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
        <div className="d-flex justify-content-start align-items-center mt-3">
            <Link to="/">
                <img src={"/images/rory.jpg"} className="img img-fluid rounded-circle mr-4" style={{maxWidth: 100}} />
            </Link>
            <nav class="nav">
                {links.map(link => (
                    <NavLink 
                        to={link.url} 
                        activeClassName="" 
                        className={cc([{
                            "nav-link": true,
                            "text-muted": pathname === link.url ? false : true,
                            "text-primary": pathname === link.url ? true : false
                        }])}
                        exact={true}
                    >
                        {link.title}
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}
