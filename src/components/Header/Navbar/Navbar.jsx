import React, {useState} from 'react';
import s from "./Navbar.module.css"
import Link from "next/link";
function Navbar(props) {
    const [activePage, setActivePage] = useState(0)
    const links = [
        {
            text:"Home",
            href:"/"
        },
        {
            text:"About",
            href:"/about"
        },
        {
            text:"Shop",
            href:"/shop"
        },
        {
            text:"Contacts",
            href:"/contacts"
        },
    ]
    return (
        <div>
            <nav className={s.navbar}>
                <ul>
                    {links.map((link,i) => {
                        return (
                            <li
                                key={link.text + link.href}
                                className={activePage === i && s.active}
                                onClick={() => {
                                    setActivePage(i)
                                }
                                }
                            >
                                <Link href={link.href}>{link.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;