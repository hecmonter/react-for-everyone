import React, {Component} from 'react';
import Input from './formComponents/InputElement';
import Select from './formComponents/SelectElement';
import SingleCheckBox from './formComponents/SingleCheckBox';
import CheckboxOrRadioGroup from './formComponents/CheckboxOrRadioGroup';
import TextArea from './formComponents/TextAreaElement'; 

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFavColorChange = this.handleFavColorChange.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleCBGroupSelection = this.handleCBGroupSelection.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

    this.state = {
      model: '', 
      favoriteColor: '', 
      options: ['Red', 'Blue'], 
      selectedCheckBoxes: [], 
      fullName: '', 
      description: ''
    }
  }

  componentDidMount() {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          fullName: data.ownerName,
          petSelections: data.petSelections,
          selectedPets: data.selectedPets,
          ageOptions: data.ageOptions,
          ownerAgeRangeSelection: data.ownerAgeRangeSelection,
          siblingOptions: data.siblingOptions,
          siblingSelection: data.siblingSelection,
          currentPetCount: data.currentPetCount,
          description: data.description
        });
      });
  }

  handleFormSubmit() {
    // submit logic goes here
  }

  handleClearForm() {
    // clear form logic goes here
  }

  handleFavColorChange(evt){
  }

  handleFullNameChange(evt){
    this.setState({       
      fullName: evt.target.value
    });
  }

  handleCBGroupSelection(evt){
  }

  handleTextAreaChange(evt){
    this.setState({
      description: evt.target.value
    }); 
  }

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
          
          <Input
              inputType="text"
              content={this.state.fullName}
              title="Fullname"
              name="fullname"
              handler={this.handleFullNameChange}/> 
                    
          <Select
              title="Select your option"
              name="select-fav-color"
              options={['options_1', 'options_2', 'options_3']}
              selectedOption={this.state.favoriteColor}
              handler={this.handleFavColorChange}/> 
          
          <SingleCheckBox label="Single Checkbox"/>

          <br/>
          <CheckboxOrRadioGroup
              title="Check your options"
              type="checkbox"
              setName="cbname-group"
              options={this.state.options}
              selectedOptions={this.state.selectedCheckBoxes}
              handler={this.handleCBGroupSelection}/>

          <br/> 
          <TextArea 
            title="Type some description" 
            rows={3} 
            name='textarea' 
            content={this.state.description} 
            handler={this.handleTextAreaChange}/>

          <br/>
          <button className="btn btn-primary" type="submit">Save</button>
      </form>
    );
  }


}

export default FormContainer; 
  