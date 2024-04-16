import { Link, useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();
  return (
    // <Dragger className="mx-10" text={"Check Carbon Footprint with our AI"} />
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 mx-10 shadow-xl image-full">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1607391414256-ce739c31af36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ecosystem"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-white text-3xl font-bold">Image Recoginition</h2>
          <p className="text-white text-xl font-semibold">
            Check Carbon Footprint of any object using AI.
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/recognize");
              }}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 mx-10 shadow-xl image-full">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ecosystem"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-white text-3xl font-bold">
            Personlized Recommendation
          </h2>
          <p className="text-white text-xl font-semibold">
            Get Personalize recommendation using custom inputs
          </p>
          <div className="card-actions justify-end">
            <Link to="/Signup" className="btn btn-primary">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
