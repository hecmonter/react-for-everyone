import React from 'react'; 

class CheckBox extends React.Component {

    constructor(props) {         
        super(props);

        this.state = {
            isChecked: false
        }; 

        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }    

    toggleCheckbox() {
        this.setState({
            isChecked: !this.state.isChecked
        }); 
        
        //this.props.handleCheckboxChange(this.props.label);
    }

    render() {
        return (
            <div className="form-group">
                <label className="form-checkbox">
                    <input type="checkbox" 
                        value={this.props.label} 
                        checked={this.state.isChecked} 
                        onChange={this.toggleCheckbox} />
                        <i className="form-icon"></i>

                    {this.props.label}
                </label>
            </div>
        );
    }
}

/* Property Types */
CheckBox.propTypes = {
    label: React.PropTypes.string.isRequired,
    handleCheckboxChange: React.PropTypes.func
};

export default CheckBox; 