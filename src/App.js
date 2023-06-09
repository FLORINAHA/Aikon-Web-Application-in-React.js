import React, { useState } from 'react';
import './App.css';
import Register from './Register';
import Login from './Login';


// Material UI imports
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import Switch from '@mui/material/Switch';



function App() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="App">
      <Paper style={{ padding: "16px" }}>
        {checked ? (
        <Chip
          icon={<FaceIcon />}
          label="Register"
          color="primary"
          variant="outlined"
          
        />
        ):(
        <Chip
          icon={<LockIcon />}
          label="Login"
          color="primary"
          variant="outlined"
        />
        )}

        <br/>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <br />
        {checked ? <Register />:<Login />}
      </Paper>  
    </div>
  );
}

export default App;
