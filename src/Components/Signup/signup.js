import React, { useState } from "react";
import './Signup.css';

const Login = () => {

  return (
    <div className="one_Signup_Signup-container">
      <div className="one_Signup_row">
        <div className="one_Signup_col  one_Signup_col2">
          <div className="one_Signup_one_myform">
            <form>
              <div style={{textAlign:'center'}}>
                <h1>Register</h1>
              </div>
              <div>
                <input   className="one_Signup_inputi" type="text" placeholder="Username" id="username" autoComplete="off"/>
              </div>
              <div>
                <input  className="one_Signup_inputi" type="password" placeholder="Password" id="password" autoComplete="off"/>
              </div>
              <div>
                <input  className="one_Signup_inputi" type="email" placeholder="Email" id="email" autoComplete="off"/>
              </div>
              <div>
                <input  className="one_Signup_inputi" type="text" placeholder="Phone" id="phone_num" autoComplete="off"/>
              </div>
              <div>
                <select>
                <option className="one_Signup_disabled_options" selected>Register as</option>
                  <option className="one_Signup_one_options" value="sender">Sender</option>
                  <option className="one_Signup_one_options" value="receiver">Receiver</option>
                  <option className="one_Signup_one_options" value="delivery_executive">Delivery Executive</option>
                </select>
              </div>
              <div>
                <input className="one_Signup_btn" type="submit" value="Register" id="login"/>
              </div>
            </form>
          </div>
        </div>
        <div className="one_Signup_col one_Signup_image_col">
          <div className="one_Signup_vision-image-container">
            <img src="https://as1.ftcdn.net/v2/jpg/01/36/52/14/1000_F_136521474_JbJFYciwXIFPfy9v3Vko3hG7YKPNvYc5.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
