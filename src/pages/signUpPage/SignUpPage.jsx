import axios from "axios";
import "./signUpPage.scss";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

const SignUpPage = () => {
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
    <div className="signUp">
      <form
        noValidate
        onSubmit={handleSubmit(async (data) => {
          setIsLoading(true);
          setEr("");
          const username = data.username;
          const email = data.email;
          const password = data.password;

          try {
            const res = await apiRequest.post("/auth/register", {
              username,
              email,
              password,
            });

            navigate("/login");
          } catch (err) {
            setEr(err.response.data.message);
          } finally {
            setIsLoading(false);
          }
        })}
        className="formContainer"
      >
        <h1>Create an Account</h1>
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
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
              message: "Email is not valid",
            },
          })}
        />
        {errors.email && <p className="errors">{errors.email.message}</p>}
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
          Sign Up
        </button>
        {er && <span>{er}</span>}
        <Link to="/login">Already have an account? Log In here!</Link>
      </form>

      <div className="imageContainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  );
};
export default SignUpPage;
