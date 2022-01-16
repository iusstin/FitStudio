import React from 'react';
import './Reservation.css';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            full_name: "",
            date: "",
            hour: "",
            phone: "",
        }
    }
    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        if (name == "full_name") {
            this.setState({
                full_name: value
            });
        }
        else if (name == "date") {
            this.setState({
                date: value
            })
        }
        else if (name == "hour") {
            this.setState({
                hour: value
            });
        }
        else if (name == "phone") {
            this.setState({
                phone: value
            });
        }
        console.log(name, value);
    }

    handleClick(event) {
        event.preventDefault();
        const data = {
            "full_name": this.state.full_name,
            "date": this.state.date,
            "hour": this.state.hour,
            "phone": this.state.phone
        }
        console.log(data);
        console.log(JSON.stringify(data));
        fetch("http://localhost:5000/save-subscription", {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(data)
        }).then(function () {
            alert("Congrats, you've booked a class");
        });
    }

    render() {
        return (
            <div className="contact-form">
                <h2 className = "formtitle">Book a class</h2>
                <form action="/">
                    <div>
                        <label className="form-label">Full Name</label>
                        <input className="form-element" type="text" name="full_name" onChange={this.handleChange.bind(this)} />
                    </div>

                    <div>
                        <label className="form-label">Date</label>
                        <input className="form-element" name="date" type="date" onChange={this.handleChange.bind(this)} />
                    </div>

                    <div>
                        <label className="form-label">Hour</label>
                        <input className="form-element" name="hour" rows="20" onChange={this.handleChange.bind(this)} />
                    </div>

                    <div>
                        <label className="form-label">Phone number</label>
                        <input className="form-element" name="phone" rows="20" onChange={this.handleChange.bind(this)} />
                    </div>

                    <div>
                        <button className="form-button" onClick={this.handleClick.bind(this)}> Send booking </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;