import React, { Component } from "react";
import './Match.scss';
class Match extends Component {
    render() {
        return (
            <div>
                <div className="list-match">
                    <div className="tablelist mt-5">
                        <h1> Danh sách trận đấu</h1>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Full Name</th>
                                    <th>Birthday</th>
                                    <th>Address</th>
                                    <th>Positions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Default</td>
                                    <td>Defaultson</td>
                                    <td>12/11/1999</td>
                                    <td>Defaultson</td>
                                    <td>Defaultson</td>
                                </tr>
                                <tr className="table-primary">
                                    <td>Primary</td>
                                    <td>Joe</td>
                                    <td>12/11/1999</td>
                                    <td></td>
                                </tr>
                                <tr className="table-success">
                                    <td>Success</td>
                                    <td>Doe</td>
                                    <td>12/11/1999</td>
                                </tr>
                                <tr className="table-danger">
                                    <td>Danger</td>
                                    <td>Moe</td>
                                    <td>12/11/1999</td>
                                </tr>
                                <tr className="table-info">
                                    <td>Info</td>
                                    <td>Dooley</td>
                                    <td>12/11/1999</td>
                                </tr>
                                <tr className="table-warning">
                                    <td>Warning</td>
                                    <td>Refs</td>
                                    <td>12/11/1999</td>
                                </tr>
                                <tr className="table-active">
                                    <td>Active</td>
                                    <td>Activeson</td>
                                    <td>12/11/1999</td>
                                </tr>
                                <tr className="table-secondary">
                                    <td>Secondary</td>
                                    <td>Secondson</td>
                                    <td>12/11/1999</td>
                                </tr>
                                <tr className="table-light">
                                    <td>Light</td>
                                    <td>Angie</td>
                                    <td>12/11/1999</td>
                                </tr>
                                <tr className="table-dark">
                                    <td>Dark</td>
                                    <td>Bo</td>
                                    <td>12/11/1999</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
}
export default Match;