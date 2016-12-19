import React from 'react';

const CheckboxOrRadioGroup = (props) => (
  <div className="form-group">

    <div className="col-2">
      <label className="form-label">{props.title}</label>
    </div>

    <div className="col-10">
      <div className="checkbox-group">
        {props
          .options
          .map(opt => (
            <label key={opt} className="form-checkbox capitalize">
              <input
                className='form-checkbox'
                name={props.setName}
                onChange={props.handler}
                value={opt}
                checked={props.selectedOptions.indexOf(opt) > -1}
                type={props.type}/>
              <i className="form-icon"></i>
              {opt}
            </label>
          ))}
      </div>
    </div>
  </div>
);

CheckboxOrRadioGroup.propTypes = {
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  setName: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  selectedOptions: React.PropTypes.array,
  handler: React.PropTypes.func.isRequired
};

export default CheckboxOrRadioGroup;