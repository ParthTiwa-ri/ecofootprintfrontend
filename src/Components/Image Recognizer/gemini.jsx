import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const API_KEY = "AIzaSyAxvALcPFqQW5iaYtM7X5NhzCg6WBRiTZ8"; // Replace 'YOUR_API_KEY' with your actual API key

const Gemini = ({ file }) => {
  const prompt = `Assume you are a good image recognizer which can recognize image pixel by pixel in detail, Give answer in object form like this: { "category": "string", "nature": "string (this contains whether the object is good or bad for the environment)", "carbonFootprint": "string (carbon footprint per year with proper unit)", "suggestion": "string (any suggestion)", } Take time and try to recognize the object precisely every time I provide the input. If the type of object is the same type, the carbon footprint value should be the same. If the AI can recognize information about the object's length and width from the data provided, it should calculate the carbon footprint accordingly. Additionally, if a living being is detected in the image, the show carbon footprint invalid and return the prompt "Enter data again"`;

  const [generatedText, setGeneratedText] = useState("");
  const genAI = new GoogleGenerativeAI(API_KEY);

  const fileToGenerativePart = async (file) => {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  };

  const handleSubmit = async () => {
    console.log(file);
    const imagePart = await fileToGenerativePart(file);
    generateContent([imagePart]);
  };

  const generateContent = async (imageParts) => {
    // For text-and-images input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = await response.text();
    const jsonObject = JSON.parse(text);
    console.log(jsonObject);
    setGeneratedText(jsonObject);
  };
  console.log(generatedText.nature);

  return (
    <div className="flex flex-col gap-10 mt-20">
      {file && (
        <div>
          <h2 className="text-xl text-white font-semibold">Selected Image:</h2>
          <div className="flex items-center justify-between gap-5">
            <div className="w-[40rem] h-auto ">
              <img
                src={URL.createObjectURL(file)}
                alt="Selected Image"
                className="rounded-2xl"
              />
            </div>
            {generatedText && (
              <div className="w-[40rem] rounded-2xl flex flex-col justify-between">
                <h2 className="text-xl text-white font-semibold -mt-5">
                  Result:
                </h2>
                <div className="w-full flex flex-col items-center justify-center h-[27rem] space-y-10 rounded-xl ">
                  <div className="w-full py-2 px-4 bg-white drop-shadow-lg text-black inline-block rounded-xl">
                    <p className="text-black">Effect on nature:</p>
                    <p
                      className={`text-green-800 font-bold ${
                        generatedText.nature === "bad"
                          ? "text-red-800"
                          : "text-green-800"
                      }`}
                    >
                      {generatedText.nature.toUpperCase()}
                    </p>
                  </div>
                  <div className="w-full py-2 px-4 bg-white drop-shadow-lg text-white inline-block rounded-xl">
                    <p className="text-black">
                      Carbon Footprint by the product:
                    </p>
                    <p className="text-green-800 font-bold">
                      {generatedText.carbonFootprint.toUpperCase()}
                    </p>
                  </div>
                  <div className="w-full py-2 px-4 bg-white drop-shadow-lg text-white inline-block rounded-xl">
                    <p className="text-black">Category:</p>
                    <p className="text-green-800 font-bold">
                      {generatedText.category.toUpperCase()}
                    </p>
                  </div>
                  <div className="w-full py-2 px-4 bg-white drop-shadow-lg text-white inline-block rounded-xl">
                    <p className="text-black">Suggestion:</p>
                    <p className="text-green-800 font-bold">
                      {generatedText.suggestion.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <button onClick={handleSubmit} className="w-[15rem] btn btn-success">
        Generate Content
      </button>
    </div>
  );
};

export default Gemini;
