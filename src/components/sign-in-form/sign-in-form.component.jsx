import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

    return (    

        <div className='sign-in-container'>

            <h2>Already have an Account.</h2>
            <span>SignIn with your email and password</span>

            <form onSubmit={onSubmitHandler}>

                <FormInput label="Email" type="email"  required onChange={onChangeHandler} name="email" value={email}/>

                <FormInput label="Password" type="password"  required onChange={onChangeHandler} name="password" value={password}/>
                
                <div className="buttons-container" >
                    <Button buttonType="sign-in" type="submit">Sign In</Button>
                    <Button buttonType="google" type="button" onClick={signInWithGoogle}>Google</Button>
                </div>

            </form>
        </div>
    );
};

export default SignInForm;