import axios from "axios";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Components/Context/AuthContext";
// import { useAuthContext } from "../Context/AuthContext";

function Signup() {
  const { register, handleSubmit, reset } = useForm();
  const [cookies, setCookie] = useCookies(["token"]);
  const { setUserId } = useAuth();
  const navigate = useNavigate();

  // const { setUser } = useAuthContext();
  // const navigate = useNavigate();
  const handleSignup = async (formData) => {
    try {
      const res = await axios.post(
        "https://ecoprintbackend.onrender.com/api/user/signup",
        formData
      );
      if (res.data && res.data.data && res.data.data._id) {
        setUserId(res.data.data._id);
        setCookie("token", res.data.data.jwtToken);
        navigate("/all");
        reset(); // Reset form fields
      } else {
        console.error("Invalid response from server");
      }
    } catch (error) {
      alert("Duplicate Error", error);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">ECOFOOTPRINT</h1>
            <p className="py-6  text-slate-500"></p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleSignup)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="name"
                  className="input input-bordered"
                  required
                  {...register("username")}
                />
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
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have a account? Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
