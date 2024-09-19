import { useState } from "react";
import "./login.scss";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest.js";

const Login = () => {
  const [er, setEr] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="login">
      <form
        noValidate
        onSubmit={handleSubmit(async (data) => {
          setIsLoading(true);
          setEr("");
          const username = data.username;
          const password = data.password;

          try {
            const res = await apiRequest.post("/auth/login", {
              username,
              password,
            });

            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/");
          } catch (err) {
            setEr(err.response.data.message);
          } finally {
            setIsLoading(false);
          }
        })}
        className="formContainer"
      >
        <h1>Log In</h1>
        <input
          type="text"
          placeholder="Username"
          id="username"
          {...register("username", {
            required: "Username is required",
          })}
        />
        {errors.username && <p className="errors">{errors.username.message}</p>}
        <input
          type="password"
          placeholder="Password"
          id="password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gi,
              message: `password pattern is appropriate`,
            },
          })}
        />
        {errors.password && <p className="errors">{errors.password.message}</p>}
        <button type="submit" disabled={isLoading}>
          Sign In
        </button>
        {er && <span>{er}</span>}
        <Link to="/signup">Don't have an account? Sign Up here!</Link>
      </form>

      <div className="imageContainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  );
};
export default Login;
