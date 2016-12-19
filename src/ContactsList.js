import React from 'react';
import Contact from './Contact';
import InputElement from './formElements/InputElement'; 

class ContactsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '', 
            contacts: props.contacts, 
            name: '',
            phone: ''
        }; 

        this.updateSearch = this.updateSearch.bind(this);
        this.addContact = this.addContact.bind(this);
        this.contactsFilter = this.contactsFilter.bind(this);  
        this.inputHandler = this.inputHandler.bind(this);               
    }

    addContact(event) {
        event.preventDefault();        

        let id = Math.floor((Math.random() * 100) + 1); 
        let name = this._name.value;
        let phone = this._phone.value;
        
        this.setState({
            contacts: this.state.contacts.concat({id, name, phone})
        });

        this._name.value = ''; 
        this._phone.value = '';          
    }

    updateSearch(event) {        
        this.setState({
            search: event.target.value.substr(0, 20),
        });
    }

    /**
     *  @name contactsFilter
     *  @param {object} c is a single contact object. 
     *  @return {boolean} false or true, where contact has been found.
    */
    contactsFilter(c) {
        return c.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    }

    inputHandler(evt) {
        console.log(evt.target.value); 
    }

    

    render() {
        let filteredContacts = this.state.contacts.filter(this.contactsFilter);

        return (
            <div>
                <InputElement inputType="text" model="Hola" title="Titulo" name="input-name" handler={this.inputHandler} />                                           
            </div>            
        )
    }

    // <form onSubmit={this.addContact}>
    //     <input type="text" ref={i => this._name = i}/>
    //     <input type="text" ref={i => this._phone = i}/>
    //     <button type="submit">Add New</button>                    
    // </form>

    // <input 
    //     type="text" 
    //     placeholder="Search"
    //     value={this.state.search} 
    //     onChange={this.updateSearch}
    // />                
    // <ul>
    //     {filteredContacts.map( (c) => { 
    //         return <Contact key={c.id} contact={c} />
    //     })}                                
    // </ul>

}

export default ContactsList;
