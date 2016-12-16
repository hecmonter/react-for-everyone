import React from 'react';

class ControlledForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '', 
            pass: ''
        }; 

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        
    }

    handleEmailChange(event) {   
        this.setState({
            email: event.target.value
        });
    }

    handlePassChange(event) {
        this.setState({
            pass: event.target.value
        }); 
    }
    
    handleSubmit(event){
        if(!this.canFormBeSubmitted()){
            event.preventDefault();
            return;
        }          
        
        // actual submit logic...        
        //const {name, pass} = this.state;         
        
    }

    canFormBeSubmitted() {
        const {email, pass} = this.state; 
        return email.length > 0 && pass.length > 0;
    }

    render(){         
        const canSubmit =  this.canFormBeSubmitted();

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email account</label>
                        <input 
                            type="text" 
                            name="email"
                            placeholder="Enter email" 
                            value={this.state.email} 
                            onChange={this.handleEmailChange} 
                        />
                    </div>
                    <br />
                    <div>
                        <label>Email Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter password"
                            name="password" 
                            value={this.state.pass} 
                            onChange={this.handlePassChange} 
                        />
                    </div>
                    <div>
                        <button type="submit" disabled={!canSubmit}>Add New</button>
                    </div>              
                </form>                
            </div>
        )
    }
}

export default ControlledForm;
