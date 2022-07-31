import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Sidebar.css";
import {Link} from "react-router-dom";

export default () =>
{
    return (
        <Menu>
            <Link className="menu-item" to="/">
                Home
            </Link>
            <Link className="menu-item" to="/about">
                About
            </Link>
            <Link className="menu-item" to="/members">
                Members
            </Link>
            <Link className="menu-item" to="/#blog">
                Blog
            </Link>
            <Link className="menu-item" to="/contact">
                Contact
            </Link>
        </Menu>
    );
};
