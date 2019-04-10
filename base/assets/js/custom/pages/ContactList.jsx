import React from 'react';
import ReactDOM from 'react-dom';
import { contactListApp as ContactListApp } from "../modules/ContactListApp";

export class ContactList extends React.Component {
    constructor(props) {
        super(props);

        //data
        this.contacts = [
            {
                "id": 1,
                "name": "Victor",
                "occupation": "Web Developer",
                "email": "victorgoyea@hotmail.com",
                "telephone": "07876572919"
            },
            {
                "id": 3,
                "name": "Fred",
                "occupation": "Web Designer",
                "email": "fredwilson@gmail.com",
                "telephone": "07123456789"
            }
        ];
    }
    
    render() {
        return (
            <ContactListApp data={this.contacts} />
        )
    }

}


module.exports = {
    contactList: ContactList
}
