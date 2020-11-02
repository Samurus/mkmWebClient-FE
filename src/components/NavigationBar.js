import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavLink from "react-bootstrap/NavLink";
import logo from '../assets/Test.png';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {}
        }
    }

    render() {
        return (
            <Navbar variant={"dark"} bg={"dark"} sticky={"top"}>
                <NavbarBrand href="/">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Test Logo"
                    />
                </NavbarBrand>
                <Nav>
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/upload"}>Upload Sorter CSV</NavLink>
                </Nav>
            </Navbar>
        )

    }
}

export default NavigationBar