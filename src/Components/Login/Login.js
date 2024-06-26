import React, { useState } from "react";
import './Login.css';

const Login = () => {

  return (
    <div className="one_Login_Login-container">
      <div className="one_Login_row">
        <div className="one_Login_col  one_Login_col2">
          <div className="one_Login_one_myform">
            <form>
              <div style={{textAlign:'center'}}>
                <h1>Sign In</h1>
              </div>
              <div>
                <input   className="one_Login_inputi" type="text" placeholder="Username" id="username" autoComplete="off"/>
              </div>
              <div>
                <input  className="one_Login_inputi" type="password" placeholder="Password" id="password" autoComplete="off"/>
              </div>
              <div>
                <select>
                <option className="one_Login_disabled_options" selected>Select User type</option>
                  <option className="one_Login_one_options" value="sender">Sender</option>
                  <option className="one_Login_one_options" value="receiver">Receiver</option>
                  <option className="one_Login_one_options" value="delivery_executive">Delivery Executive</option>
                </select>
              </div>
              <div>
                <input className="one_Login_btn" type="submit" value="Login" id="login"/>
              </div>
            </form>
          </div>
        </div>
        <div className="one_Login_col one_Login_image_col">
          <div className="one_Login_vision-image-container">
            <img src="https://st2.depositphotos.com/4297405/6329/v/600/depositphotos_63299517-stock-illustration-illustration-representing-a-child-sitting.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
