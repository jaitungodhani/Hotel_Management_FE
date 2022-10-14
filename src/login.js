import { Button, ButtonGroup, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
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
import { signIn } from "./service/config";
import { useDispatch, useSelector } from "react-redux";
import { loginStart } from "./redux/actions";




const Login = () => {
  const [username, setUsername] = useState('');
  const [waiter, setWaiter] = useState(true);
  const [manager, setManager] = useState(false);
  const [billdesk, setBilldesk] = useState(false);
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleWaiter = () => {
    setWaiter(true);
    setManager(false);
    setBilldesk(false);
    console.log(waiter, manager, billdesk);
  }

  const handleManager = () => {
    setWaiter(false);
    setManager(true);
    setBilldesk(false);
    console.log(waiter, manager, billdesk);
  }

  const handleBilldesk = () => {
    setWaiter(false);
    setManager(false);
    setBilldesk(true);
    console.log(waiter, manager, billdesk);
  }

  useEffect(() => {
    console.log(user);
    if (user) {
      if (user.user_type === "waiter") {
        console.log(";;;;;;");
        navigate("/waiter")
      } else if (user.user_type === "manager") {
        navigate("/manager")
      } else if (user.user_type === "billdesk") {
        navigate("/billdesk")
      }
    }
  }, [user]);



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
    // console.log(":::", username, values.password);
    let role = "";
    if (waiter) {
      role = "waiter"
    }
    else if (manager) {
      role = "manager"
    }
    else if (billdesk) {
      role = "billdesk"
    }
    dispatch(loginStart({ username, password: values.password, role: role }));
    console.log("++++++", user);
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
          <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ mb: 3 }}>
            <Button onClick={handleWaiter} sx={{ background: waiter && "green" }}>Waiter</Button>
            <Button onClick={handleManager} sx={{ background: manager && "green" }}>Manager</Button>
            <Button onClick={handleBilldesk} sx={{ background: billdesk && "green" }}>Bill Desk</Button>
          </ButtonGroup>

        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={userLogin}>Login</Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Login;