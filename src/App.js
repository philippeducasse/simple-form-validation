import './App.css';
import { FormInput } from './components/FormInput';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState({
    username: "",
    email:"",
    password: "",
    dateOfBirth: "",
    errorMessage:"",
    fullName: ""
  })

  // because useState re-renders each time the state changes, we can also use useRef

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      required: true,
      errorMessage: "Username should be between 3-16 characters and shouldn't include any special character",
      pattern: "^[A-Za-z0-9]{3,16}$",
      label: "Username"
    },
    {
      id: 4,
      name: "Email",
      type: "email",
      placeholder: "Email",
      required: true,
      errorMessage: "Please enter a valid email address",
      label: "Email"
    },
    {
      id: 2,
      name: "dateOfBirth",
      type: "date",
      required: true,
      placeholder: "Date of Birth",
      label: "Date of Birth"
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
      errorMessage: "Password should be at least 8 characters long, and contain at least one number, one upper and lowercase letter, and one special character",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label: "Password"
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Password",
      required: true,
      errorMessage: "Password should be the same in both fields",
      pattern: values.password,
      label: "Confirm Password"
    }
    
  ]

  const onChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }

  console.log(values)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key = {input.id} {...input} value = {values[input.name]} onChange={onChange}/>
        ))}
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
