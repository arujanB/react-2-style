import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from './CourseInput.module.css';
// import styled from 'styled-components';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid ? 'red' : '')};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// // &.invalid label{
// //   color: red;
// // }

// // &.invalid input{
// //   background: red;
// //   background-color: #ccc;
// // }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styled['form-control']} ${styled.invalid && !isValid}`}>
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input 
        style={{background: !isValid ? 'salmon' : 'transparent', borderColor: !isValid ? 'red' : '#ccc' }} 
        type="text" 
        onChange={goalInputChangeHandler} />
      </div>
      
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input 
        style={{background: !isValid ? 'salmon' : 'transparent', borderColor: !isValid ? 'red' : '#ccc' }} 
        type="text" 
        onChange={goalInputChangeHandler} />
      </div> */}

{/*meniki*/}
      {/* <div className={!isValid ? 'invalid'}>
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input 
        style={{background: !isValid ? 'salmon' : 'transparent', borderColor: !isValid ? 'red' : '#ccc' }} 
        type="text" 
        onChange={goalInputChangeHandler} />
      </div> */}

      {/* <FormControl className={!isValid && 'invalid'}>
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input 
        style={{background: !isValid ? 'salmon' : 'transparent', borderColor: !isValid ? 'red' : '#ccc' }} 
        type="text" 
        onChange={goalInputChangeHandler} />
      </FormControl> */}

      {/*without module */}
      {/* <FormControl invalid = {!isValid}>
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input 
        style={{background: !isValid ? 'salmon' : 'transparent', borderColor: !isValid ? 'red' : '#ccc' }} 
        type="text" 
        onChange={goalInputChangeHandler} />
      </FormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
