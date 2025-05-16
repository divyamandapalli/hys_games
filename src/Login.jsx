import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
    navigate("/dashboard");
  }

  return (
    <div className="Login-page">
      <div className="login-card">
        <center>

        
        <div className="loginh"><h1>Login</h1></div><br /><br />
        <form onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="email">Email</label><br />
            <input
              type="email"
              id="email1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> 
          </div><br />
          <div className="password1">
            <label htmlFor="password1">Password</label><br />
            <input
              type="password"
              id="password1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div><br />
          <div className="btn">
            <button type="submit">Submit</button>
          </div><br />
          <h5>
            New User: <Link to="/signup">Click Here</Link>
          </h5>
        </form>
        </center>
      </div>
      
    </div>
  );
}

export default Login;
