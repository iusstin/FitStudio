/*import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
//import data from '.../data.txt';

function SubsPage() {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        fetch("http://localhost:5000/subscriptions")
            .then(response => response.json())
            .then(data => {
                setData(data)
                console.log(data);
            }); 
    }, []);
    const table_header = <tr><th>Full Name</th><th>Date</th><th>Hour</th><th>Phone</th></tr>;
    let table_content = "";
    for (let r in data) {
        let row = r.split(',');
        table_content += <tr><th>{r[0]}</th><th>{r[1]}</th><th>{r[2]}</th><th>{r[3]}</th></tr>
    }

    return (
        <div>{table_content}</div>
    );
}

export default SubsPage;*/