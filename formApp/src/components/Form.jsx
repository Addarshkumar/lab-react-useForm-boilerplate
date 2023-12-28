import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitted },
  } = useForm();

  const onSubmit = (data) => {
    toast("form submitted succesfully!")
    console.log(data);

    

      
      
    }
  

  return (
    <div className='form-container'>
      <fieldset>
        <legend>Fill this Form</legend>
        <ToastContainer />

        {/* Success Message */}
        {isSubmitSuccessful && isSubmitted && (
           
          <div className='success'>
            <p>Registration Successful</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Error Messages */}
          <label> First Name </label>
          <input
            type="text"
            name='firstName'
            {...register('firstName', {
              required: 'Fill the first name',
              minLength: { value: 4, message: 'Minimum 4 characters required' },
              maxLength: { value: 8, message: 'Maximum 8 characters required' },
            })}
          />
          <p className='err'>{errors.firstName && errors.firstName.message}</p>

          <label> Last Name </label>
          <input
            type="text"
            name='lastName'
            {...register('lastName', {
              required: 'Fill the last name',
              minLength: { value: 4, message: 'Minimum 4 characters required' },
            })}
          />
          <p className='err'>{errors.lastName && errors.lastName.message}</p>

          <label>Email</label>
          <input
            type="email"
            name='email'
            {...register('email', {
              required: 'Enter your email',
              message: 'Enter your email',
              pattern:{
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:"Invalid email ID"
              }
            })}
          />
          <p className='err'>{errors.email && errors.email.message}</p>

          <label> Password </label>
          <input
            type="password"
            name='password'
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Minimum 8 characters required' 
            },pattern:{
              value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/,
              message:"Invalid password"
            }
            })}
          />
          <p className='err'>{errors.password && errors.password.message}</p>

          <input className='button' type="submit" value={'Register'} />
        </form>
      </fieldset>
    </div>
  );
};

export default Form;
