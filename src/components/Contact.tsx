import React from 'react';

interface IProps {
    name: string,
    email?: string,
    handleRemove: (email: string) => void
}

const Contact = ({name, email = "N/A", handleRemove}:IProps) => {
    const cardStyle = {
        backgroundColor: "lightgray",
        borderRadius:'5px',
        margin:'10px',
        padding:'10px',
        width:'300px',
    }

    const btnStyle = {
        display:'block',
        width:'100%',
        padding:'5px'
    }
    return (
        <div style={cardStyle}>
            <p><strong>Name : </strong> {name}</p>
            <p><strong>Email : </strong> {email}</p>
            <button style={btnStyle} onClick={() => handleRemove(email)}>Remove</button>
        </div>
    );
};

export default Contact;