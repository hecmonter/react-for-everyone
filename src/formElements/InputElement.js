import React from 'react';

const InputElement = (props) => {
    return (  
        <div className="form-group">
            <div className="col-3">
                <label className="form-label">{props.title}</label>
            </div>
            <div className="col-9">
                <input
                    className="form-input"
                    name={props.name}
                    type={props.inputType}
                    value={props.model}
                    onChange={props.handler}
                    placeholder={props.placeholder} />
            </div>            
        </div>
    )                
};

InputElement.propTypes = {  
    inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
    title: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    handler: React.PropTypes.func.isRequired,
    model: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number]).isRequired,
    placeholder: React.PropTypes.string
};


export default InputElement;  