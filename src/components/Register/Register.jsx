// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
// import { auth } from "../../firebase_init";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // createUserWithEmailAndPassword(auth, email, password).then(result=>{
    //     console.log(result);
    // }).catch(error=>{
    //     console.log(error);
    // })
    createUser(name,email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 mx-auto mt-12 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-2xl text-center pt-2 font-bold">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p>
          Already have an account? Please{" "}
          <Link className="text-blue-400 underline" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
