import { Link } from "react-router-dom"
import React, { useState } from "react"
import Dropdown from "../dropdown/Dropdown"
import "./header.css"
import Profile from "../profile/Profile"

function Header() {
    const [dropdown, setDropdown] = useState<Boolean>(false)
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/" className="link">
                    MoSiKaengE
                </Link>
            </div>
            <div className="headerCenter">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" className="search" placeholder="Search" />
            </div>
            <div className="headerRight">
                <ul className="headerList">
                    <Link to="/" className="link">
                        <li className="headerListItem">
                            <i className="fa-sharp fa-solid fa-house"></i>
                        </li>
                    </Link>
                    <li className="headerListItem">
                        <i className="fa-regular fa-paper-plane"></i>
                    </li>
                    <Link to="/write" className="link">
                        <li className="headerListItem">
                            <i className="fa-regular fa-square-plus"></i>
                        </li>
                    </Link>
                    <Link to="/explore" className="link">
                        <li className="headerListItem">
                            <i className="fa-regular fa-compass"></i>
                        </li>
                    </Link>
                    <li className="headerListItem">
                        <i className="fa-regular fa-heart"></i>
                    </li>
                    <li className="headerListItem">
                        <div className="headerListItemProfile">
                            <span onClick={() => setDropdown(!dropdown)}>
                                <Profile/>
                            </span>
                            <Dropdown visible={dropdown}>
                                <ul>
                                    <Link to={`/:id`} className="link">
                                        <li>
                                            <i className="fa-solid fa-user"></i>
                                            Profile
                                        </li>
                                    </Link>
                                    <Link to="/setting" className="link">
                                        <li>
                                            <i className="fa-solid fa-gear"></i>
                                            Setting
                                        </li>
                                    </Link>
                                    <hr />
                                    <li>
                                        Logout
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header