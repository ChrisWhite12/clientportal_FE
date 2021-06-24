import React, { useEffect, useState } from 'react';  

const Button = (props) => {
    return(
      <button 
        style={props.style} 
        className={props.type=='primary'? 'btn btn-primary' : 'btn btn-secondary'}
        onClick={props.action} > 
        {props.title} 
      </button>)
}

const FormInput = (props) => {
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    setIsEdit(props.editState)
  },[props])

  return (  
  <div className="form-group">
    <label>{props.title}</label>
    {isEdit ?
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        // value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder} 
        {...props} />
      :
      <p className='form-text' id={props.name} name={props.name}>{props.value}</p>
    }
  </div>
)
}  

const Select = (props) => {
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    setIsEdit(props.editState)
  },[props])

  return(<div className="form-group">
      <label> {props.title} </label>
      {isEdit ?
        <select
          id = {props.name}
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
          className="form-control">
          <option value="" disabled>{props.placeholder}</option>
          {props.options.map(option => {
            return (
              <option
                key={option}
                value={option}
                label={option}>{option}</option>
            );
          })}
        </select>
        :
        <p className='form-text' id={props.name} name={props.name}>{props.value}</p>
      }
  </div>)
}

export {Button};
export {Select};
export {FormInput};