import React, { useState } from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target);
    setEmail('');
    setPassword('');
  }

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  return (
    <React.Fragment>
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and Passwod.</span>
        <form onSubmit={handleSubmit}>
          <FormInput name='email'
            type='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required />

          <FormInput name='password'
            type='password'
            value={password}
            onChange={handleChange}
            label='password'
            required />

          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
        </form>
      </div>
    </React.Fragment>
  )
}

export default SignIn;