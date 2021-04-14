import React, { useCallback, useContext } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import app from "../Firebase.js";
import { AuthContext } from "../Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/price");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/price" />;
  }

  return (
<div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-md-offset-4">
            <h1 className="text-center login-title">Sign in to continue to Coolice Admin</h1>
            <div className="account-wall">
              <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="" />
              <form className="form-signin" onSubmit={handleLogin}>
                <input name="email" type="email" className="form-control" placeholder="Email" required autofocus />
                <input name="password" type="password" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                  Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>

  );
};

export default withRouter(Login);