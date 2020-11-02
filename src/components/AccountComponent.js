import React from 'react';
import Table from 'react-bootstrap/Table'
import AccountService from "../services/AccountService";
import {Container} from "react-bootstrap";

class AccountComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {}
        }
    }

    componentDidMount() {
        AccountService.getAccountInformation().then((response) => {
            console.log(response.data)
            this.setState({account: response.data})
        });
    }

    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr className="text-center" >
                        <td colSpan="2"> <h3>Current Account</h3></td>
                    </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Account Id</td>
                            <td>{this.state.account.userId}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>{this.state.account.userName}</td>
                        </tr>
                        <tr>
                            <td>Registration Date</td>
                            <td>{this.state.account.registrationDate}</td>
                        </tr>
                        <tr>
                            <td>UserType</td>
                            <td>{this.state.account.userType}</td>
                        </tr>
                        <tr>
                            <td>First Name</td>
                            <td>{this.state.account.firstName}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{this.state.account.lastName}</td>
                        </tr>
                        <tr>
                            <td>Total Balance</td>
                            <td>{this.state.account.totalBalance}</td>
                        </tr>
                    </tbody>

                </Table>
            </div>
        )
    }
}

export default AccountComponent