import "./signUpPage.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="signUp">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
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
        <button type="submit">Sign Up</button>
        <Link to="/login">Already have an account? Log In here!</Link>
      </form>

      <div className="imageContainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  );
};
export default SignUpPage;
