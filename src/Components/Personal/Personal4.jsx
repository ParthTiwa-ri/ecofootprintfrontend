import { useStateContext } from "../Context/PersonalProvider"; // Adjust the path if necessary
import bg4 from "../../assets/bg4.png";

function Personal4() {
  const { sliderValue1, setSliderValue1 } = useStateContext();

  const handleSliderChange = (event) => {
    setSliderValue1(event.target.value);
  };

  return (
    <div
      id="background-component"
      style={{ backgroundImage: `url(${bg4})` }}
      className="bg-gradient-to-b from-[#98B8DD] to-white w-screen h-screen flex justify-center"
    >
      <div className="max-w-sm md:max-w-xl lg:max-w-2xl mt-44">
        <div className="container mx-auto text-center space-y-5">
          <p className="text-[#2C3E50] text-md md:text-lg uppercase lg:text-xl font-semibold">
            Transportation
          </p>
          <h1 className="text-[#2C3E50] text-xl md:text-2xl lg:text-4xl font-bold">
            When you travel by car, how often do you carpool?
          </h1>
        </div>
        <div className="mt-10 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10">
          <div className="w-44 lg:w-96 flex items-center justify-center">
            <select
              value={sliderValue1}
              onChange={handleSliderChange}
              className="m-1 px-10 btn"
            >
              <option value="">Choose</option>
              <option value="Never">Never</option>
              <option value="Infrequently">Infrequently</option>
              <option value="Occasionally">Occasionally</option>
              <option value="Often">Often</option>
              <option value="Very Often">Very Often</option>
              <option value="Always">Always</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal4;
