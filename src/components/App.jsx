import { Component } from "react"
import { ContactForm } from "./ContactForm"
import { Filter } from "./Filter"
import { ContactList } from "./ContactList"







export class App extends Component {


  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }


  onFilterChange = str => {
   this.setState({
      filter: str
    })
  }   
  

  searchName(obj) {
    
return this.state.contacts.find(el=> el.name===obj.name)

  }
  

  onSubmit = obj => {

    if (this.searchName(obj)) {
      return alert(`${obj.name} is already in contacts`)
    }

    this.setState(prevState=>({
      contacts: [...prevState.contacts, obj ]
    
    }))


  }

  

  handleFilter = () => {
    
    const { filter, contacts } = this.state

    
   return contacts.filter(el => {
      const name = el.name.toLowerCase()
      return name.includes(filter.toLowerCase())
    })
    

  }

  onClick = (id) => {
    
   

    this.setState(prevState => {
      const updateState = prevState.contacts.filter(el => el.id !== id);

      return { contacts: updateState };
    });

  }

 


  
  render() {

    
    
    const { filter, contacts } = this.state
    
  

    return (
   <div>
        <h1>Phonebook</h1>
        
      <ContactForm onSubmit={this.onSubmit}/>


        <h2>Contacts</h2>
        <Filter onChange={ this.onFilterChange} />
       
        < ContactList 
          contacts={this.handleFilter()}
          onClick={this.onClick}
          />
        

    </div>
)
   

  }
};
