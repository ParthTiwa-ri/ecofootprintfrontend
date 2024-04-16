import bg3 from "../../assets/bg3.png";
import { useStateContext } from "../Context/PersonalProvider";

function Personal3() {
  const {
    carSliderValue,
    setCarSliderValue,
    bikeSliderValue,
    setBikeSliderValue,
  } = useStateContext();

  const handleCarSliderChange = (event) => {
    setCarSliderValue(event.target.value);
  };

  const handleBikeSliderChange = (event) => {
    setBikeSliderValue(event.target.value);
  };

  return (
    <div
      id="background-component"
      style={{ backgroundImage: `url(${bg3})` }}
      className="bg-gradient-to-b from-[#98B8DD] to-white w-screen h-screen flex justify-center"
    >
      <div className="max-w-sm md:max-w-xl lg:max-w-2xl  mt-24">
        <div className="container mx-auto text-center space-y-5">
          <p className="text-[#2C3E50] text-md md:text-lg uppercase lg:text-xl font-semibold">
            Transportation
          </p>
          <h1 className="text-[#2C3E50] text-xl md:text-2xl lg:text-4xl font-bold">
            How far do you travel by car or motorcycle each week?
          </h1>
        </div>
        <div className="mt-10 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10">
          <div className="text-[#2C3E50] text-lg font-semibold uppercase">
            (Car in Kms) Zero
          </div>
          <div className="w-44 lg:w-96">
            <input
              type="range"
              min={0}
              max={100}
              value={carSliderValue}
              onChange={handleCarSliderChange}
              className="range"
            />
          </div>

          <div className="text-[#2C3E50] text-lg font-semibold uppercase">
            Very Far
          </div>
        </div>
        <p className="text-xl text-black font-bold">{carSliderValue}</p>

        <div className="mt-10 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10">
          <div className="text-[#2C3E50] text-lg font-semibold uppercase">
            (Bike in Kms) Zero
          </div>
          <div className=" lg:w-96">
            <input
              type="range"
              min={0}
              max={100}
              value={bikeSliderValue}
              onChange={handleBikeSliderChange}
              className="range"
            />
            <p className="text-xl">{bikeSliderValue}</p>
          </div>
          <div className="text-[#2C3E50] text-lg font-semibold uppercase">
            Very Far
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal3;
