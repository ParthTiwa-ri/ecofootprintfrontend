import axios from "axios";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../Components/Context/AuthContext";

import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const [cookies, setCookie] = useCookies(["token"]);
  const { setUserId } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const res = await axios.post(
        "https://ecoprintbackend.onrender.com/api/user/signin",
        formData
      );
      //   if (res.data.status === "failed") {
      //     return alert("Incorrect login information");
      //   }
      setUserId(res.data.data.userId);
      console.log(res.data);
      setCookie("token", res.data.data);
      navigate("/dashboard");

      //   console.log(res.data);
    } catch (error) {
      console.error("Login error:", error);
      // Optionally, you can show an error message to the user
    } finally {
      // Reset form after submission, regardless of success or failure
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Welcome to ECOFOOTPRINT your personal sustainable hub
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                  required
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered"
                  required
                  {...register("password")}
                />
                <label className="label">
                  <Link to="/signup" className="label-text-alt link link-hover">
                    Dont have an account? Sign Up
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
