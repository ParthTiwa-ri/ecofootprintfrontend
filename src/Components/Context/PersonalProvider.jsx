/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

// Create the context
const StateContext = createContext();

// Create a custom hook to use the context
export const useStateContext = () => useContext(StateContext);

// Create the provider component
export const StateProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [trashSize, setTrashSize] = useState("");
  const [sliderValue1, setSliderValue1] = useState(0);
  const [sliderValue2, setSliderValue2] = useState(0);
  const [carSliderValue, setCarSliderValue] = useState(0);
  const [bikeSliderValue, setBikeSliderValue] = useState(0);

  return (
    <StateContext.Provider
      value={{
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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
