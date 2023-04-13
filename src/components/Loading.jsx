import React from "react";

const Loading = () => {
  return (
    <div className=" h-[890px] p-8 justify-center text-center flex text-white bg-slate-700">
      <div>
        <img
          className="mx-auto h-16"
          src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
          alt="loading"
        />
        <p className="text-center text-3xl">loading</p>
      </div>
    </div>
  );
};

export default Loading;
