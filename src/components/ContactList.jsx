
import { Component } from "react";
import { ContactItem } from "./ContactItem";

export class ContactList extends Component {
  

    render() {

        const { contacts,onClick } = this.props;
        
        return (
            <ul>
                {
                   contacts.map(el => {
                    return (
                        <ContactItem key={el.id} name={el.name} number={el.number} onClick={ onClick } />
                    )
              
                })}

      
            </ul>
        );
    }
}

