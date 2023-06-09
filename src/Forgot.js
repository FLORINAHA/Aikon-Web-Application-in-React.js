import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export default function Forgot() {
  const [emailInput, setEmailInput] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [formValid, setFormValid] = useState('');
  const [success, setSuccess] = useState('');

  const handleEmail = () => {
    if (!emailInput || !isEmail(emailInput)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null);

    if (emailError || !emailInput) {
      setFormValid('Invalid email. Please enter a valid email address.');
      return;
    }

    setFormValid(null);
    setSuccess('Password reset instructions sent to your email.');

    // Send password reset instructions via API or perform necessary actions
  };

  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="email-input"
          error={emailError}
          label="Email"
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
          onBlur={handleEmail}
          variant="standard"
          fullWidth
          size="small"
        />
        <br />
        <Button type="submit" fullWidth variant="contained" style={{ marginTop: '10px' }}>
          Reset Password
        </Button>
        {formValid && (
          <Alert severity="error" style={{ marginTop: '10px' }}>
            {formValid}
          </Alert>
        )}
        {success && (
          <Alert severity="success" style={{ marginTop: '10px' }}>
            {success}
          </Alert>
        )}
      </form>
    </div>
  );
}
