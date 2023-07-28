import { Component } from "react";

import { nanoid } from "nanoid";

export class ContactForm extends Component{


    state={
        name: '',
        number:''
    }
  


    onChangeInput = e => {
    const {name,value}=e.target
    this.setState({ [name]:value})
  }

    saveContact = e => {
        e.preventDefault()
        this.props.onSubmit({ ...this.state, id: nanoid() })
        this.setState({name:'',number:''})
    }

  

    render() {

        const { name, number } = this.state
       
    
        return (
            <form onSubmit={this.saveContact}>
      <label>
        Name
        <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  value={name}
  onChange={this.onChangeInput}          
  required      
/>
          </label>
          
          <label>
            Number
            <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  value={number}
  onChange={this.onChangeInput}
  required
/>
          </label>

          <button type="submit" >Add contact</button>
          </form>
        )
    }
}