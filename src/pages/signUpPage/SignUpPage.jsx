import "./signUpPage.scss";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="signUp">
      <div className="formContainer">
        <h1>Create an Account</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          id="username"
        />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
        />
        <button>Sign Up</button>
        <Link to="/login">Already have an account? Log In here!</Link>
      </div>
      <div className="imageContainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  );
};
export default SignUpPage;
