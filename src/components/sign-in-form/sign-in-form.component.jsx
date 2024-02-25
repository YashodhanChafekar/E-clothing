import { useState, useContext } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const{user} = await signInAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user)
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
                    <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={signInWithGoogle}>Google</Button>
                </div>

            </form>
        </div>
    );
};

export default SignInForm;