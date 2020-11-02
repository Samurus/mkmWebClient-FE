import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
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
            <Navbar bg="dark">
                <NavbarBrand href="#home">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Test Logo"
                    />
                </NavbarBrand>
            </Navbar>
        )

    }
}

export default NavigationBar