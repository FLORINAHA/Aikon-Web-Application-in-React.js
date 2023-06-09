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
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Forgot from './Forgot';

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

// Checks
export default function Login() {
  
  // Inputs
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [rememberMe, setRememberMe] = useState();

  // Form Validity
  const [formValid, setFormValid] = useState('');
  const [success, setSuccess] = useState('');

  // Input Errors
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Validation for onBlur username
  const handleUsername = () => {
    if (!usernameInput || usernameInput.length < 5 || usernameInput.length > 20) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
  };

  // Validation for onBlur Password
  const handlePassword = () => {
    if (
      !passwordInput ||
      passwordInput.length < 5 ||
      passwordInput.length > 20
    ) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null);

    if (usernameError || !usernameInput) {
      setFormValid('Username must be 5-20 characters long. Please re-enter');
      return;
    }

    if (passwordError || !passwordInput) {
      setFormValid('Password is set to 5-20 Characters. Please re-enter');
      return;
    }

    setFormValid(null);
    setSuccess('Form submitted Successfully');

    console.log('Name: ' + usernameInput);
    console.log('Password: ' + passwordInput);
    console.log('RememberUser: ' + rememberMe);
  };

  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const btstyle = { margin: '1px 0' };

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
          size="small"
        />
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
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </p>

      <div align="left">
        <Checkbox
          onChange={(event) => setRememberMe(event.target.checked)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        Remember Me
      </div>

      <p>
        <Button
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          style={btstyle}
          startIcon={<LoginIcon />}
        >
          LOGIN
        </Button>
      </p>

      <p>{formValid && <Alert severity="error">{formValid}</Alert>}</p>
      <p>{success && <Alert severity="success">{success}</Alert>}</p>

            <Typography>
        <Link href="#" onClick={() => setShowForgotPassword(true)}>
          Forgot Password?
        </Link>
      </Typography>

      {showForgotPassword && <Forgot />}
    </div>
  );
}
