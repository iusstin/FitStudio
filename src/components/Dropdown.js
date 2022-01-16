import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'react', label: 'React' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' }
];

const MyComponent = () => {
    const ddStyle = {
        margin: "50px 50px",
        backgroundColor: "red",
        color: "orange"
    };
    return (<Select styles={ddStyle} options={options} />);
};
export default MyComponent;