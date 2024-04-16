import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" navshadow w-3/5 p-2   rounded-full border-2 border-gray  flex justify-between  top-2 left-2/4 -translate-x-1/3 z-40  sticky ">
      <span className="ml-8 navhead font-bold py-2">
        <Link to="/">ECOFIT PRINT</Link>
      </span>
      <div className="flex gap-5 ">
        <Link to="/dashboard">
          <p className="hover:bg-slate-300 px-2 py-2 cursor-pointer rounded-3xl">
            Home
          </p>
        </Link>
        <Link to="/tasks">
          <p className="hover:bg-slate-300 px-2 py-2 cursor-pointer rounded-3xl">
            Tasks
          </p>
        </Link>
        <Link to="/rewards">
          <p className="hover:bg-slate-300 px-2 py-2 cursor-pointer rounded-3xl">
            Rewards
          </p>
        </Link>
        <p className="hover:bg-slate-300 px-2 py-2 cursor-pointer rounded-3xl">
          Team
        </p>
        {/* <p className="hover:bg-slate-300 px-2 py-2 cursor-pointer rounded-3xl">
          Team
        </p> */}
      </div>
      <label className="cursor-pointer grid place-items-center mr-8">
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
        />
        <svg
          className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <svg
          className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
}

export default Navbar;
