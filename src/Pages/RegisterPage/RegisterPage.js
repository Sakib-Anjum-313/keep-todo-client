import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import Header from "../Header/Header";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, updateUserProfile, varifyUserEmail } =
    useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        handleUpdateProfile(name, photo);
        handleEmailVerification();
        toast.success("Please verify your email address.");
        form.reset();
        navigate("/login");
        // console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleUpdateProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmailVerification = () => {
    varifyUserEmail()
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <Header></Header>
      <div className="">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to={"/Home"}>
                <button className="btn btn-warning">home</button>
              </Link>
            </div>
            <form
              onSubmit={handleSubmit}
              className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            >
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link
                      to={"/register"}
                      className="label-text-alt link link-hover"
                    >
                      Not Registered?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
