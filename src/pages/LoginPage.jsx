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
        setLoading(false);
        navigate("/");
      })
      .catch(() => {
        setLoading(false);
        showToast("Error", "error", "Invalid Email or Password. Try Again");
      });
  }

  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-full bg-[#ffedb1] flex items-center justify-center">
        <img
          src="https://i.ibb.co.com/6y2J87S/12143602-4905058.jpg"
          className="w-full max-h-screen object-contain"
          alt=""
        />
      </div>

      <div className="bg-[#fffcef] flex justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="text-center mt-10">
            <h1 className="font-tekoFont text-4xl md:text-6xl">Black Pearl</h1>
            <h2 className="text-md mt-2 px-10 text-center">
              Explore Your Admin Panel & Glow Your Business
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
                className="input input-bordered bg-transparent md:input-lg"
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
                className="input input-bordered md:input-lg bg-transparent"
                required
              />
            </div>
            <div className="form-control mt-8">
              <button className="btn bg-black text-white border-none hover:bg-slate-800 md:btn-lg">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
