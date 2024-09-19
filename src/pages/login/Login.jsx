import "./login.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="login">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
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
        <button type="submit">Sign In</button>
        <Link to="/signup">Don't have an account? Sign Up here!</Link>
      </form>

      <div className="imageContainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  );
};
export default Login;
