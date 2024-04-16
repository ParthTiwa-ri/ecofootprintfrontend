// // import { useState } from "react";
// import bg1 from "../../assets/bg1.png";
// import { useStateContext } from "../Context/PersonalProvider";

// function Personal1() {
//   const { selectedOption, setSelectedOption } = useStateContext();

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.innerText);
//   };

//   return (
//     <div
//       id="background-component"
//       style={{ backgroundImage: `url(${bg1})` }}
//       className="bg-gradient-to-b from-[#98B8DD] to-white w-screen h-screen flex justify-center"
//     >
//       <div className="max-w-sm md:max-w-xl lg:max-w-2xl mt-44">
//         <div className="container mx-auto text-center space-y-5">
//           <p className="text-[#2C3E50] text-md md:text-lg uppercase lg:text-xl font-semibold">
//             Food
//           </p>
//           <h1 className="text-[#2C3E50] text-xl md:text-2xl lg:text-4xl font-bold">
//             How often do you eat animal-based products?
//           </h1>
//         </div>
//         <div className="mt-10 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10">
//           <div className="w-44 lg:w-96 flex items-center justify-center">
//             <details className="dropdown">
//               <summary className="m-1 px-10 btn">
//                 {selectedOption ? selectedOption : "Choose"}
//               </summary>
//               <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
//                 <li>
//                   <a
//                     onClick={handleOptionChange}
//                     className={selectedOption === "Never" ? "active" : ""}
//                   >
//                     Never
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     onClick={handleOptionChange}
//                     className={
//                       selectedOption === "Infrequently" ? "active" : ""
//                     }
//                   >
//                     Infrequently
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     onClick={handleOptionChange}
//                     className={
//                       selectedOption === "Occasionally" ? "active" : ""
//                     }
//                   >
//                     Occasionally
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     onClick={handleOptionChange}
//                     className={selectedOption === "Often" ? "active" : ""}
//                   >
//                     Often
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     onClick={handleOptionChange}
//                     className={selectedOption === "Very Often" ? "active" : ""}
//                   >
//                     Very Often
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     onClick={handleOptionChange}
//                     className={selectedOption === "Always" ? "active" : ""}
//                   >
//                     Always
//                   </a>
//                 </li>
//               </ul>
//             </details>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Personal1;
// import { useState } from "react";
import bg1 from "../../assets/bg1.png";
import { useStateContext } from "../Context/PersonalProvider";

function Personal1() {
  const { selectedOption, setSelectedOption } = useStateContext();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      id="background-component"
      style={{ backgroundImage: `url(${bg1})` }}
      className="bg-gradient-to-b from-[#98B8DD] to-white w-screen h-screen flex justify-center"
    >
      <div className="max-w-sm md:max-w-xl lg:max-w-2xl mt-44">
        <div className="container mx-auto text-center space-y-5">
          <p className="text-[#2C3E50] text-md md:text-lg uppercase lg:text-xl font-semibold">
            Food
          </p>
          <h1 className="text-[#2C3E50] text-xl md:text-2xl lg:text-4xl font-bold">
            How often do you eat animal-based products?
          </h1>
        </div>
        <div className="mt-10 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10">
          <div className="w-44 lg:w-96 flex items-center justify-center">
            <select
              value={selectedOption}
              onChange={handleOptionChange}
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

export default Personal1;
