import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./login.css";
import login_img from "./Image/login_img.png";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { signIn } from "./service/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { signIn } from "./service/config";



const Login = () => {
  const [username, setUsername] = useState('');
  // const [password,setPassword]=useState('');
  const navigate = useNavigate()
  useEffect(() => {
    const user_data = JSON.parse(localStorage.getItem('user_data'));
    if (user_data) {
      const access_token = localStorage.getItem('access_token');
      if (access_token) {
        navigate("/order");
      }
      else{
        localStorage.clear();
      }
    }
    else{
      localStorage.clear();
    }
  }, []);
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const userLogin = () => {
    console.log(":::", username, values.password);
    signIn({ username, password: values.password }).then((res) => {
      localStorage.setItem("access_token", res.data.data.access_token);
      localStorage.setItem("refresh_token", res.data.data.refresh_token);
      localStorage.setItem("user_data", JSON.stringify(res.data.data.user_data));
      if (res.data.data.user_data.is_owner) {
        navigate("/owner")
      } else if (res.data.data.user_data.is_manager) {
        navigate("/manager")
      } else {
        navigate("/order")
      }
    }, (error) => {
      console.log(error?.response?.data?.message);
    })
  };
  return (
    <div className="login_page">
      <div className="loginForm">
        <img src={login_img} />
        <TextField className="userName" id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className="passWord">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl>
          <Button variant="contained" onClick={userLogin}>Login</Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Login;