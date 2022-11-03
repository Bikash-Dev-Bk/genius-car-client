import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg';
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const {signIn, googleSignIn} = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        
        signIn(email ,password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(err => console.error(err))
    }

    const handleSignInWithGoogle = () =>{
      googleSignIn()
      .then( result => {
          const user = result.user;
          console.log(user);
      })
      .catch(error => console.error(error))
  }
  
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
        <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email" name="email"
                className="input input-bordered" required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password" name="password"
                placeholder="password"
                className="input input-bordered" required
              />
              <label className="label">
                <Link to='/' className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-orange-600" type="submit" value="Login" />
            </div>
            <p className="text-center">Or login with</p>
            <button onClick={handleSignInWithGoogle} className="btn btn-accent text-white">Google</button>
          </form>
          <p className="text-center">New in genius car? <Link to='/signup' className="text-orange-600 font-bold">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;