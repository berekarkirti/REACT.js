import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../Context/AuthContext";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loginUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userdata = {
      email,
      password
    };

    axios.post("https://reqres.in/api/login", userdata)
      .then((res) => {
        // console.log("token",res.data.token);
        loginUser(res.data.token);
        alert('Login successfully');
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
        alert('Login failed try again');
      });
  };


  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              data-testid="email-input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="email"
              required />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="password"
              required
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
