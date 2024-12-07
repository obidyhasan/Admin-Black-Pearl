import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { loginWithEmailAndPassword, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  function showToast(title, icon, message) {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      confirmButtonText: "Done",
      confirmButtonColor: "#000",
    });
  }

  function handelOnSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      showToast(
        "Error",
        "error",
        "Password length must be at least 6 character"
      );
      return;
    }

    loginWithEmailAndPassword(email, password)
      .then(() => {
        showToast("Success", "success", "Black Pearl Login Successfully");

        navigate("/");
      })
      .catch(() => {
        setLoading(false);
        showToast("Error", "error", "Invalid Email or Password. Try Again");
      });
  }

  return (
    <div className="w-full min-h-screen bg-login-bg bg-cover bg-center bg-no-repeat flex items-center justify-center font-interFont relative px-5">
      <div className="card w-full max-w-md glass-effect">
        <div className="text-center mt-10">
          <h1 className="font-tekoFont text-4xl">Black Pearl</h1>
          <h2 className="text-md text-white max-w-80 mx-auto mt-2 px-6">
            Explore Your Admin Panel & Grow Your Business
          </h2>
        </div>

        <form onSubmit={handelOnSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text  text-lg">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input "
              required
            />
          </div>
          <div className="form-control mt-8">
            <button className="btn bg-black text-white border-none hover:bg-slate-800">
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
