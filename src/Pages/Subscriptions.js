import React from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../components/Subscriptions.css';

class Bookings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            response_data: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:5000/subscriptions")
            .then(response => response.json())
            .then(data => this.setState({ response_data: data }));
    };
    row_content(row_data) {
        let row = row_data.split(',');
        return <tr><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td></tr>
    }
    render() {
        const cap_tabel = <thead id= "table_head"><th>Full Name</th><th>Date</th><th>Time</th><th>Phone</th></thead>;
        let table_content = undefined;
        return (
            <div>
                <Header />
                <div className="tableTitle"><caption><strong>Bookings</strong></caption></div>
                <hr />
                <div>
                    <table className="table">
                        {cap_tabel}
                        <tbody>
                        {this.state.response_data.map((renderRow) => (
                            this.row_content(renderRow)
                            ))}
                        </tbody>
                    </table>
                </div>
                <Footer />
            </div>
        );
    };
}
export default Bookings;
