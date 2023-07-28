import { Component } from "react"
import { ContactForm } from "./ContactForm"
import { Filter } from "./Filter"







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
  

onSubmit=obj=> {

    this.setState(prevState=>({
      contacts: [...prevState.contacts, obj ],
    
    }))


  }

  handleFilter = () => {
    
    const { filter, contacts } = this.state

    
   const filtered= contacts.filter(el => {
      const name = el.name.toLowerCase()
      return name.includes(filter.toLowerCase())
    })
    
    return filtered.map(el => {
           return(<li key={el.id}>
             <p>{el.name}: { el.number }</p>
            </li>)
          })
   

  }

 


  
  render() {

    
    
    const { filter, contacts } = this.state
    
  

    return (
   <div>
        <h1>Phonebook</h1>
        
      <ContactForm onSubmit={this.onSubmit}/>


        <h2>Contacts</h2>
        <Filter onChange={ this.onFilterChange} />
        <ul>

          {filter ? this.handleFilter()
            : contacts.map(el => {
           return(<li key={el.id}>
             <p>{el.name}: { el.number }</p>
            </li>)
          })}

        </ul>
        

       




    </div>
)
   

  }
};
