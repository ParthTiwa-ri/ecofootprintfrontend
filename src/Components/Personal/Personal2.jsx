import bg2 from "../../assets/bg2.png";
import { useStateContext } from "../Context/PersonalProvider";

function Personal2() {
  const { sliderValue, setSliderValue, trashSize, setTrashSize } =
    useStateContext(); // Initial value set to 0.5 as it's between min and max

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleTrashSizeChange = (event) => {
    setTrashSize(event.target.value);
  };

  return (
    <div
      id="background-component"
      style={{ backgroundImage: `url(${bg2})` }}
      className="bg-gradient-to-b from-[#98B8DD] to-white w-screen h-screen flex justify-center"
    >
      <div className="max-w-sm md:max-w-xl lg:max-w-2xl mt-44">
        <div className="container mx-auto text-center space-y-5">
          <p className="text-[#2C3E50] text-md md:text-lg uppercase lg:text-xl font-semibold">
            housing
          </p>
          <h1 className="text-[#2C3E50] text-xl md:text-2xl lg:text-4xl font-bold">
            How much trash do you generate?
          </h1>
        </div>
        <div className="mt-10 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10">
          <div className="w-48 lg:w-96 flex items-center gap-5">
            <select
              value={trashSize}
              onChange={handleTrashSizeChange}
              className="m-1  btn"
            >
              <option value="Bucket Size">Bucket Size </option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
            <div className="flex items-center gap-5">
              <input
                type="text"
                placeholder="Number of buckets"
                className="input input-bordered w-full max-w-xs"
                value={sliderValue}
                onChange={handleSliderChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal2;
