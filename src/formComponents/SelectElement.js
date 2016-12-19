import React from 'react';

const SelectElement = (props) => (  
  <div className="form-group">
    <div className="col-2">
      <label className="form-label">{props.title}</label>
    </div>
    <div className="col-10">
      <select
        name={props.name}
        value={props.selectedOption}
        onChange={props.handler}
        className="form-select">
        <option value="">{props.placeholder}</option>
        {props.options.map((o) => {
          return (
            <option key={o} value={o}>{o}</option>
          );
        })}
      </select>    
    </div>
  </div>
);

SelectElement.propTypes = {  
  title: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  selectedOption: React.PropTypes.string,
  handler: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string
};

export default SelectElement;  