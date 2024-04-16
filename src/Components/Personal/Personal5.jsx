import { useCookies } from "react-cookie";
import bg5 from "../../assets/bg5.png";
import { useStateContext } from "../Context/PersonalProvider";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Personal5() {
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const {
    selectedOption,
    setSelectedOption,
    sliderValue,
    setSliderValue,
    trashSize,
    setTrashSize,
    sliderValue1,
    setSliderValue1,
    sliderValue2,
    setSliderValue2,
    carSliderValue,
    setCarSliderValue,
    bikeSliderValue,
    setBikeSliderValue,
  } = useStateContext();
  const { userId } = useAuth();
  const handleSliderChange = (event) => {
    setSliderValue2(event.target.value);
  };

  const handleSubmit = async () => {
    const personalData = {
      userId,
      eatingHabits: selectedOption.toLowerCase(),
      garbageBucketSize: trashSize.toLowerCase(),
      numberOfBuckets: sliderValue * 1,
      carDistance: carSliderValue * 1,
      bikeDistance: bikeSliderValue * 1,
      carpoolingFrequency: sliderValue1.toLowerCase(),
      publicTransportDistance: sliderValue2 * 1,
      jwt_token: "hello",
    };

    const res = await axios.post(
      "https://ecoprintbackend.onrender.com/api/lifestyle/create",
      personalData
    );
    console.log(res.data);
    console.log(personalData);
    navigate("/dashboard");
  };

  return (
    <div
      id="background-component"
      style={{ backgroundImage: `url(${bg5})` }}
      className="bg-gradient-to-b from-[#98B8DD] to-white w-screen h-screen flex justify-center"
    >
      <div className="max-w-sm md:max-w-xl lg:max-w-2xl mt-44">
        <div className="container mx-auto text-center space-y-5">
          <p className="text-[#2C3E50] text-md md:text-lg uppercase lg:text-xl font-semibold">
            Transportation
          </p>
          <h1 className="text-[#2C3E50] text-xl md:text-2xl lg:text-4xl font-bold">
            How far do you travel on public transportation each week?
          </h1>
        </div>
        <div className="mt-10 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10">
          <div className="text-[#2C3E50] text-lg font-semibold">NOT FAR</div>
          <div className="w-44 lg:w-96">
            <input
              type="range"
              min={0}
              max={100}
              value={sliderValue2} // Set value to controlled state
              onChange={handleSliderChange}
              className="range"
            />
          </div>
          <div className="text-[#2C3E50] text-lg font-semibold">VERY FAR</div>
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <p className="mb-4 text-xl font-bold text-black">{sliderValue2}</p>
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Personal5;
