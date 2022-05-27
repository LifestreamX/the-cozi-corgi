import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (

    <div className='form-content-right'>
      <div className='form-success'>
        Please check your email to verify your account.
      </div>
      <img src='/assets/images/corgiSuccess.png' alt='' className='form-img-2' />
    </div>
  );
};

export default FormSuccess;
