import React, { useState,useEffect} from "react";

function HomeName() {
  const [count, setCount] = useState(0);
  useEffect(()=> {});


  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col bg-[#f54242]">
        <p className="font-bold text-2xl ">Counter App</p>
        <div className="pt-[100px]  pb-2">
          <p className="font-bold text-4xl bg-white rounded-full p-2">
            {count}
          </p>{" "}
        </div>

        <button
          className="p-[10px] bg-[#6c42f5]"
          onClick={() => setCount(count + 1)}
        >
          COUNT
        </button>
      </div>
    </>
  );
}
export default HomeName;
