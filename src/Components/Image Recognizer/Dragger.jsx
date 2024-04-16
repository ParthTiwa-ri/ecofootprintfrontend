import { useState } from "react";
import Gemini from "./gemini";
import useDragAndDrop from "./useDragAndDrop";
import { IoCloudUploadOutline } from "react-icons/io5";

const Dragger = ({ text }) => {
  const {
    dragOver,
    setDragOver,
    onDragOver,
    onDragLeave,
    fileDropError,
    setFileDropError,
  } = useDragAndDrop();

  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e?.dataTransfer?.files[0];
    setSelectedFile(file);
    console.log("selected file", file);
  };

  const fileSelect = (e) => {
    let file = e?.target?.files[0];
    setFileDropError("");
    setSelectedFile(file);
    console.log("selected file", file);
  };

  return (
    <div className="flex flex-col items-center h-screen mt-10">
      <h1 className="max-w-4xl  text-center text-5xl text-white mb-2 font-semibold">
        Carbon Footprint Tracker using AI Image Recoginition
      </h1>
      {!selectedFile && (
        <div className="flex flex-col justify-center mt-10">
          <h1 className="text-2xl text-white mb-2 font-semibold">
            Upload Files
          </h1>
          <form
            className="w-96 h-96 rounded-20 flex items-center justify-center cursor-pointer border-4 border-dotted rounded-xl border-blue-500"
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <label className="" htmlFor="file">
              <IoCloudUploadOutline className="text-white text-3xl" />
              <div className="dragger">{text}</div>
              <p className="text-white">800mb max size</p>
            </label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={fileSelect}
              className="hidden"
              multiple
            />
          </form>
        </div>
      )}
      {selectedFile && <Gemini file={selectedFile} />}
    </div>
  );
};

export default Dragger;
