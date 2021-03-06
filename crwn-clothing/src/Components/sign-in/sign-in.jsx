import React, { useState } from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
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
            label='Password'
            required />

          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default SignIn;