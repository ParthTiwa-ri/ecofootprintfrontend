import { useEffect, useState } from "react";
import { useAuth } from "../Components/Context/AuthContext";
import Navbar from "../ui/Navbar";
import axios from "axios";
import { useRecoilState } from "recoil";
import { coin } from "./state";
import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyAxvALcPFqQW5iaYtM7X5NhzCg6WBRiTZ8";
function Dashboard() {
  const { userId } = useAuth();
  const [data, setData] = useState();
  const [carbonData, setCarbonData] = useState();
  const [recomendData, setRecomendData] = useState();
  //   const [geminidata, setgeminiData] = useState();

  const genAI = new GoogleGenerativeAI(API_KEY);

  useEffect(() => {
    async function run() {
      // For text-only input, use the gemini-pro model
      const postData = {
        userId,
      };
      const res = await axios.post(
        "https://ecoprintbackend.onrender.com/api/lifestyle/get",
        postData
      );
      const cdata = res.data.data;
      const des = JSON.stringify(cdata);
      //   console.log(des);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `Give personalized recommendation to reduce carbon footprint according to given data of user ${des} (in plane text no heading ) `;
      //   console.log(prompt);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text(); // await here to get the text content
      console.log(text);
      setRecomendData(text);
    }

    run(); // Call the run function when the component mounts
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = {
          id: userId,
        };
        const res = await axios.post(
          "https://ecoprintbackend.onrender.com/api/user/get",
          postData
        );

        setData(res.data.data);
        // Handle response
        // console.log(res.data);
      } catch (error) {
        // Handle error
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = {
          userId,
        };
        const res = await axios.post(
          "https://ecoprintbackend.onrender.com/api/carbonfootprint/get",
          postData
        );

        setCarbonData(res.data.data);
        // Handle response
        // console.log(res.data);
      } catch (error) {
        // Handle error
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  return (
    <div className=" bg-base-300 min-h-screen">
      <Navbar />
      <header className="p-10 pb-1">
        <h2 className="text-5xl ">
          Welcome <p className=" inline text-green-500 ">{data?.username}</p>
        </h2>
        <section className="statshow py-8">
          <StatsShow carbonData={carbonData} />
        </section>

        <p className="mt-10">
          You need to plant around{" "}
          <span className="text-green-500">
            {(carbonData / 48)?.toFixed(0)}
          </span>
          <span> </span>trees each month to offset {carbonData?.toFixed(2)}{" "}
          pound of carbon emission
        </p>
      </header>
      <section className="personalized p-10">
        <p className="text-green-500 text-2xl mb-5">
          Your personalized recommendations are
        </p>
        {recomendData && (
          <ul className="list-disc list-inside">
            {recomendData.split("*").map(
              (item, index) =>
                item.trim() && (
                  <li key={index} className="mb-2 list-disc">
                    {item.trim()}
                  </li>
                )
            )}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Dashboard;

function StatsShow({ carbonData }) {
  const [coins, setCoins] = useRecoilState(coin);
  const trimCarbonData = (data) => {
    if (!data) return null; // If data is not provided, return null
    // Convert data to a number and round it to two decimal places
    return parseFloat(data).toFixed(2);
  };

  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            {/* <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path> */}
          </svg>
        </div>
        <div className="stat-title">Your CarbonFoot Print</div>
        <div className="stat-value text-primary">
          {carbonData ? `${trimCarbonData(carbonData)} lb CO2e` : null}{" "}
          {/* Call trimCarbonData function */}
        </div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg> */}
        </div>
        <div className="stat-title">Total Coin</div>
        <div className="flex gap-6">
          <div className="stat-value text-secondary">{coins}</div>
          <img className="h-12 " src="./images/dollar.png" alt="" />
        </div>
        {/* <div className="stat-desc">21% more than last month</div> */}
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </div>
  );
}
