import React from 'react';
import AccountService from "../services/AccountService";

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
                <h1 className="text-center">Current Account</h1>
                <table className="table table-dark text-center">
                    <tbody>
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

                </table>

            </div>
        )
    }
}

export default AccountComponent