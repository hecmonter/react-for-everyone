import React from 'react';
import Contact from './Contact';
import InputElement from './formElements/InputElement';
import SelectElement from './formElements/SelectElement'; 
import SingleCheckBox from './formElements/SingleCheckBox';

class ContactsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '', 
            contacts: props.contacts, 
            name: '',
            phone: '',
            fullName: '', 
            favoriteColor: ''
        }; 

        this.updateSearch = this.updateSearch.bind(this);
        this.addContact = this.addContact.bind(this);
        this.contactsFilter = this.contactsFilter.bind(this);  
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.handleFavColorChange = this.handleFavColorChange.bind(this);               
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

    handleFullNameChange(e) {
        this.setState({ fullName: e.target.value });         
    }

    handleFavColorChange(e) {
        this.setState({ favoriteColor: e.target.value });
    }
    
    render() {
        let filteredContacts = this.state.contacts.filter(this.contactsFilter);
        return (
            <div>
                <InputElement 
                    inputType="text" 
                    model={this.state.fullName} 
                    title="Enter your full Name" 
                    name="fullname" 
                    handler={this.handleFullNameChange} />

                <SelectElement 
                    title="Select your option"
                    name="select-fav-color"
                    options={['options_1', 'options_2', 'options_3']}
                    selectedOption={this.state.favoriteColor}                     
                    handler={this.handleFavColorChange} />
                
                <SingleCheckBox label="Single Checkbox" />
                                                           
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
