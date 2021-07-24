import React, { useState } from 'react';
import Contact from './Contact';

interface IContacts {
    name: string,
    email: string
}

const Contacts = () => {
    const [contact, setContact] = useState<IContacts>({
        name: "",
        email: ""
    });
    const [contactList, setContactList] = useState<IContacts[]>([]);

    const handleAdd = () => {
        setContactList([...contactList, contact]);
        setContact({
            name: "",
            email: ""
        })
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setContact({...contact, [e.target.name] : e.target.name})

    const handleRemove = (email: string) => {
        const newContactList = contactList.filter(c => c.email !== email)
        setContactList(newContactList)
    }
    
    return (
        <div>
            <div>
                <input value={contact.name} onChange={handleOnChange} placeholder="Enter Name" type="text" name="name" />
                
                <input value={contact.email} onChange={handleOnChange} placeholder="Enter Email" type="text" name="email" />
                
                <button onClick={handleAdd}>Add</button>
            </div>
            {
                contactList.map(item => <Contact key={item.name} name={item.name} email={item.email}handleRemove={handleRemove}/>)
            }
        </div>
    );
};

export default Contacts;