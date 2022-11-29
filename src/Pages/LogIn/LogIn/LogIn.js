import React, { useContext, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../Shared/Header/PageTitle/PageTitle";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const LogIn = () => {
  const [error, setError] = useState("");
  const { login, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // google sign in
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

  //sign in with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          uid: user.uid,
          uemail: user.email,
        };
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <section className="bg-gradient-to-r from-[#2564eb]  to-[#07b4d5] min-h-[70vh] pt-20 flex items-center">
      <PageTitle title={"Login"}></PageTitle>
      <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 md:w-3/4 mx-auto md:min-h-[70vh] my-5">
        <figure className="w-1/2">
          <img
            src="https://placeimg.com/500/600/arch"
            alt="Album"
            className="hidden lg:block object-cover w-full object-center h-full "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">Login </h2>
          <div className="flex mt-4">
            <span className="inline-block w-24 h-1 bg-[#2564eb] rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-[#2564eb] rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-[#07b4d5] rounded-full"></span>
          </div>
          <p className="">Welcome User, Log in to your account.</p>

          <form className="form-control py-5" onSubmit={handleLogin}>
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Type Your Email here"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
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
            Don't Have any acount?
            <Link
              to="/register"
              className="text-[#07b4d5] hover:text-[#152863] px-2 hover:underline"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
