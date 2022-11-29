import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import PageTitle from "../../Shared/Header/PageTitle/PageTitle";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, providerLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_pass = form.c_password.value;

    if (password === confirm_pass) {
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError("");
          form.reset();
          handleUpdateUserProfile(name, photoURL);
          toast.success("Registration Successful");
          // toast.success("Please verify your email address.");
        })
        .catch((e) => {
          toast.error(e.message);
        });
    } else {
      toast.error("Password Do not Match.");
    }
  };
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <section className="bg-gradient-to-r from-[#2564eb]  to-[#07b4d5] min-h-[70vh] pt-20 flex items-center">
      <PageTitle title={"Register"}></PageTitle>
      <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 md:w-3/4 mx-auto md:min-h-[70vh] my-5">
        <div className="card-body">
          <h2 className="card-title text-3xl">Register</h2>
          <div className="flex mt-4">
            <span className="inline-block w-24 h-1 bg-[#2564eb] rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-[#2564eb] rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-[#07b4d5] rounded-full"></span>
          </div>
          <p className="">Welcome User, we appriciate you for choosing us.</p>

          <form className="form-control py-5" onSubmit={handleSignUp}>
            <label className="label">
              <span className="label-text font-bold">Full Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type your full name here"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text font-bold">Image URL</span>
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              placeholder="Insert Your image url here"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Type Your Email here"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Type Your Password here"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <span className="label-text font-bold">Confirm Password</span>
            </label>
            <input
              type="password"
              name="c_password"
              placeholder="Confirm Your Password here"
              className="input input-bordered w-full"
              required
            />

            <div className="card-actions">
              <div className="flex flex-col w-full border-opacity-50">
                <button className="btn bg-[#07b4d5] border-none w-full hover:bg-[#152863]">
                  LogIn
                </button>
                <div className="divider">OR</div>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn hover:text-white w-full bg-white text-black hover:bg-[#152863]"
                >
                  <FcGoogle className="mr-3" /> GooGLe
                </button>
              </div>
            </div>
          </form>

          <div>
            Already have an acount?
            <Link
              to="/register"
              className="text-[#07b4d5] hover:text-[#152863] px-2 hover:underline"
            >
              Log In Now.
            </Link>
          </div>
        </div>
        <figure className="w-1/2">
          <img
            src="https://placeimg.com/500/600/arch"
            alt="Album"
            className="hidden lg:block object-cover w-full object-center h-full "
          />
        </figure>
      </div>
    </section>
  );
};

export default Register;
