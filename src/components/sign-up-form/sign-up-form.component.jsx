import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import './sign-up-form.styles.scss';
import { userContext } from "../../contexts/user.context";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};
const SignUpForm = () => {


    const [formFields, setFromFields] = useState(defaultFormFields);

    const {displayName, email, password, confirmPassword} = formFields;

    const {setCurrentUser} = useContext(userContext)

    const resetFormFields = () => {
        setFromFields(defaultFormFields);
    }

    const onSubmitHandler = async(event) => {
        event.preventDefault();
        console.log("I am inside")
        if (password !== confirmPassword){
            alert("Passwords Do Not Match!");
            return;
        };

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            setCurrentUser(user);

            await createUserDocumentFromAuth(user, {displayName});
            
            resetFormFields();

        }catch(error){
            if (error.code === 'auth/email-already-in-use'){
                alert("Email Already In Use, cannot use this email.");
            }; 
            console.log("Error While Signing Up, Try Again!", error.message);
        };
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setFromFields({...formFields, [name]:value });
    };

    return (    

        <div className='sign-up-container'>

            <h2>To create new Account.</h2>
            <span>Signup with your email and password</span>

            <form onSubmit={onSubmitHandler} >

                <FormInput label="Display Name" type="text" required onChange={onChangeHandler} name="displayName" value={displayName} />

                <FormInput label="Email" type="email"  required onChange={onChangeHandler} name="email" value={email}/>

                <FormInput label="Password" type="password"  required onChange={onChangeHandler} name="password" value={password}/>

                <FormInput label="Confirm Password" type="password" required onChange={onChangeHandler} name="confirmPassword" value={confirmPassword} />
                
                <Button type="submit">Sign Up</Button>

            </form>
        </div>
    );
};

export default SignUpForm;