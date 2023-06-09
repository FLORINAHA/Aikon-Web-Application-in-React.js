import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import MenuItem from '@mui/material/MenuItem';

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  //Checks
export default function SignUp() {

 //Inputs
  const [showPassword, setShowPassword] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [role, setRole] = useState('');



//Form Validity
  const [formValid, setFormValid] = useState('');
  const [success, setSuccess] = useState();


  //Input Errors
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [roleError, setRoleError] = useState(false);

  // Verifica 3 conditii de username (Validation for onBlur username)
  const handleUsername = () => {
    if (!usernameInput || usernameInput.length < 5 || usernameInput.length > 20) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    };


  //Verifica daca exista Email (Validation for onBlur username)
  const handleEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    };


  //Verifica 3 conditii referitoare la password (Validation for onBlur username)
  const handlePassword = () => {
    if (!passwordInput || passwordInput.length < 5 || passwordInput.length > 20) 
    {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    };

    // DE VERIFICAT CE FACE !!
  const handleSubmit = (e) => {
    e.preventDefault();
   setSuccess(null);

    // Verica daca am eroare la username si la daca este lipsa input text
    if (usernameError || !usernameInput ) {
      setFormValid(
        "Username must be 5-20 characters long. Please re-enter");
      return;
    }

    // Ce sa faca daca exista eroare la email
    if (emailError || !emailInput) {
      setFormValid(
         "Email is invalid. Please re-enter");
        return;
      }

      // Ce sa faca daca exista eroare la password
      if (passwordError || !passwordInput ) {
     setFormValid(
         "Password is set to 5-20 Characters . Please re-enter");
        return;
      }
     setFormValid(null);
     setSuccess("Form submitted Successfully");

    // Afiseaza in consola un text compus din o constanta "Name" la care se adauga variabila din usernameInput
    console.log("Name:" + usernameInput);
    console.log("Email:" + emailInput);
    console.log("Password:" + passwordInput);
    console.log("Role:" + role);

  };
    // Afisaj password - apeleza butonul de vizulizare password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


    return (
      <div>

        <p>
        <TextField
          id="username-input"
          error={usernameError}
          label="Username"
          value={usernameInput}
          onChange={(event) => setUsernameInput(event.target.value)}
          onBlur={handleUsername}
          variant="standard"
          fullWidth
          size="small"/>
       </p>

       <p>
        <TextField
          id="email-input"
          error={emailError}
          label="Email"
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
          onBlur={handleEmail}
          variant="standard"
          fullWidth
          size="small"/>
        </p>

        <p>
        <FormControl sx={{ width: '100%' }} variant="standard">
          <InputLabel error={passwordError} htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            fullWidth
            error={passwordError}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={passwordInput}
            onBlur={handlePassword}
            onChange={(event) => setPasswordInput(event.target.value)}
            endAdornment={
           <InputAdornment position="end">
           <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
          </InputAdornment>
          }/>
         </FormControl>
         </p>

        <p>
        <Button onClick={handleSubmit} fullWidth variant="contained" startIcon={<LoginIcon />}>
          REGISTER
        </Button>
        </p>
        <p>{formValid && <Alert severity="error">{formValid}</Alert>}
        </p>
        <p>{success && <Alert severity="success">{success}</Alert>}
        </p>
<p>
<p>
  <TextField
    id="role-select"
    select
    label="Role As"
    value={role}
    onChange={(event) => setRole(event.target.value)}
    variant="standard"
    fullWidth
    size="small"
  >
    <MenuItem value="admin">Admin</MenuItem>
    <MenuItem value="user">User</MenuItem>
  </TextField>
</p>
</p>
        </div>
        );
        }
