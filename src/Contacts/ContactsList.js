import React from 'react';
import Contact from './Contact';
import InputElement from '../formElements/InputElement';
import SelectElement from '../formElements/SelectElement'; 
import SingleCheckBox from '../formElements/SingleCheckBox';
import CheckboxOrRadioGroup from '../formElements/CheckboxOrRadioGroup';

class ContactsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '', 
            contacts: props.contacts, 
            name: '',
            phone: '',
            fullName: '', 
            favoriteColor: '',             
            selectedCheckBoxes: ['dog', 'pony'], 
            options:['dog', 'pony', 'fish', 'cat']

        }; 

        this.updateSearch = this.updateSearch.bind(this);
        this.addContact = this.addContact.bind(this);
        this.contactsFilter = this.contactsFilter.bind(this);  
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.handleFavColorChange = this.handleFavColorChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);     
        this.handleCBGroupSelection = this.handleCBGroupSelection.bind(this);         

          
    }

    componentDidMount() {
    }

    componentWillMount() {         
    }

    componentWillUnmount() {
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
        // Apply validation here.
        this.setState({ fullName: e.target.value });         
    }

    handleFavColorChange(e) {
        this.setState({ favoriteColor: e.target.value });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log('Form submitted: %O', e); 
    }

    handleCBGroupSelection(e) {
        const newSelection = e.target.value;
        let newSelectionArray;

        if(this.state.selectedCheckBoxes.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.selectedCheckBoxes.filter(s => s !== newSelection); 
        }
        else {
            newSelectionArray = [...this.state.selectedCheckBoxes, newSelection];
        }

        this.setState({ selectedCheckBoxes: newSelectionArray });         
    }
    
    render() {
        let filteredContacts = this.state.contacts.filter(this.contactsFilter);
        
        return (
            <div>
                <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
                    {/* Single Input element */}                    
                    <InputElement 
                        inputType="text" 
                        model={this.state.fullName} 
                        title="Fullname" 
                        name="fullname" 
                        handler={this.handleFullNameChange} />

                    {/* Select element */}
                    <SelectElement 
                        title="Select your option"
                        name="select-fav-color"
                        options={['options_1', 'options_2', 'options_3']}
                        selectedOption={this.state.favoriteColor}                     
                        handler={this.handleFavColorChange} />
                    

                    {/* Single Checkbox */}
                    <SingleCheckBox label="Single Checkbox" />
                    <br />

                    {/* Group Checkbox */}
                    <CheckboxOrRadioGroup 
                        title="Check your options" 
                        type="checkbox" 
                        setName="cbname-group" 
                        options={this.state.options}  
                        selectedOptions={this.state.selectedCheckBoxes} 
                        handler={this.handleCBGroupSelection} />

                    <br />

                    {/* Single Button */}
                    <button className="btn btn-primary" type="submit">Save</button>                        
                </form>                                                                           
            </div>            
        )
    }
}

export default ContactsList;
