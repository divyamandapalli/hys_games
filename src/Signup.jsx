import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, db } from "./FireBase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { provider } from "./FireBase";
import { toast } from "react-toastify";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: email,
          firstName: firstname,
          lastName: lastname,
        });
      }
      toast.success("User registered Successfully", { position: "bottom-center" });
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="Signup-page">
      <div className="Signin-card">
        <center>
        <h1>Sign Up</h1><br/>
        <form onSubmit={handleSubmit}>
          <div className="firstname">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          </div><br />
          <div className="lastname">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/><br/>
          </div><br />
          <div className="email"><br />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div><br />
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div><br />
          <div className="btn">
            <button type="submit">Register</button>
          </div>
          <h5>Login: <Link to="/login">Click Here</Link></h5>
          <div className="google">
            <h5>Or</h5>
            <button type="button" onClick={handleClick}>Sign in with Google</button>
          </div>
          <div className="number">
            <h5>or</h5>
            <input type="tel" name="mobile" placeholder="Mobile number" required />
            <button type="submit">Submit</button>
          </div>
        </form>
        </center>
      </div>
    </div>
  );
}

export default Signup;