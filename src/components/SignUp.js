import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../Firebase";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-4 col-md-offset-4">
        <h1 className="text-center login-title">Create Account</h1>
        <div className="account-wall">
          <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="" />
          <form className="form-signin" onSubmit={handleSignUp}>
            <input name="email" type="email" className="form-control" placeholder="Email" required autofocus />
            <input name="password" type="password" className="form-control" placeholder="Password" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default withRouter(SignUp);