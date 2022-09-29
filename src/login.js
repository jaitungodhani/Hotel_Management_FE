import { Grid } from "@mui/material";
import React from "react";
import "./login.css";
import login_img from "./Image/Hotel-Blog.jpeg"

const Login =()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <div className="loginImgPart">
                    <img src={login_img}/>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <div className="loginFormpart"></div>
            </Grid>
      </Grid>
    );
}

export default Login;