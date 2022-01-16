import React from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';

class Bookings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            response_data: ""
        };
        this.map = this.map.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }
    componentDidMount() {
        fetch("http://localhost:5000/subscriptions")
            .then(response => response.json())
            .then(data => this.setState({ response_data: data }));
    };
    render() {
        const cap_tabel = <tr><th>Full Name</th><th>Date</th><th>Time</th><th>Phone</th></tr>;
        let table_content = undefined;
        return (
            <div>
                <Header />
                <h1 className="title">Booking items list</h1>
                <div>
                    <table className="table">
                        {cap_tabel}
                        <tr>
                            <th>{this.state.response_data}</th>
                        </tr>
                        {this.state.response_data.map((renderRow) => (
                            table_content = <tr><th>renderRow[0]</th><th>renderRow[1]</th><th>renderRow[2]</th><th>renderRow[3]</th></tr>;
                            return table_content;
                        ))};
                    </table>
                </div>
                <Footer />
            </div>
        );
    };
}
/*
table_content(response_data) {
    for (let row in response_data) {
        let r = row.split(',');
        console.log(r);
        this.setState(prevState => ({
            rows: prevState.rows + <tr><th>r[0]</th><th>r[1]</th><th>r[2]</th><th>r[3]</th></tr>
        }));
    }
}
                        {this.state.response_data.map((row) => (
                            <tr>
                                <td>{row[0]}</td>
                                <td>{row[1]}</td>
                                <td>{row[2]}</td>
                                <td>{row[3]}</td>
                            </tr>
                        ))}
    /*reservation(rsvp) {
        let full_name = rsvp[0];
        let date = rsvp[1];
        let hour = rsvp[2];
        let phone = rsvp[3];
    }*/

export default Bookings;
