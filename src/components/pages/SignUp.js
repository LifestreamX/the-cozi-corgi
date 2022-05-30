import React, { useState } from 'react';
import FormSignup from '../signupform/FormSignup';
import FormSuccess from '../signupform/FormSuccess';
import '../signupform/Form.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <div className='sign-up'>
      <div className='form-container '>
        <span className='close-btn'>
          <Link to='/' className='close-btn'>x</Link>
        </span>
        <div className='form-content-left'>
          <img src='assets/images/happy.png' alt='' className='form-img' />
        </div>

        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </div>
  );
};

export default SignUp;
