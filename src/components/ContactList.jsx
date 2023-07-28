
import { Component } from "react";
import { ContactItem } from "./ContactItem";

export class ContactList extends Component {
  
    state = {
        contacts: this.props.contacts,
        filter: this.props.filter
    }



    render() {

        const { contacts, filter } = this.state;
        
        return (
            <ul>
                {filter ? this.props.fn 
                    :
                   contacts.map(el => {
                    return (
                        <ContactItem key={el.id} name={el.name} number={el.number} />
                    )
              
                })}

      
            </ul>
        );
    }
}

