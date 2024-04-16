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
              <div className="w-[40rem] rounded-2xl flex flex-col justify-between gap-10">
                {/* <h2 className="text-xl text-white font-semibold">Result:</h2> */}
                <div className="w-[40rem] h-auto ">
                  {/* <p>{generatedText}</p> */}
                  <div className="w-full bg-neutral-content rounded-xl ">
                    <p>Result</p>
                    <p className="text-white  inline pr-10">
                      Effect on nature:
                    </p>
                    <div className="py-2 px-4 bg-red-500 text-white inline-block rounded-full">
                      <p>{generatedText.nature.toUpperCase()}</p>
                    </div>
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