import React from 'react';

const TextArea = (props) => {    
    return (
        <div className="form-group">    
            <label className="form-label">{props.title}</label>
            <textarea 
                style={props.resize ? null:{resize: 'none'}}
                name={props.name}
                rows={props.rows}
                value={props.content}
                onChange={props.handler}
                placeholder={props.placeholder}                 
                className="form-input">
            </textarea>
        </div>
    )
}; 

TextArea.propTypes = {
    title: React.PropTypes.string.isRequired, 
    rows: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    resize: React.PropTypes.bool, 
    placeholder: React.PropTypes.string,
    content: React.PropTypes.string.isRequired, 
    handler: React.PropTypes.func.isRequired
}; 

export default TextArea; 