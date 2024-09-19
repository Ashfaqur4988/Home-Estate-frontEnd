import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="formContainer">
        <h1>Log In</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          id="username"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
        />
        <button>Sign In</button>
        <Link to="/signup">Don't have an account? Sign Up here!</Link>
      </div>
      <div className="imageContainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  );
};
export default Login;
