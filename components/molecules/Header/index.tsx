import React from "react";

interface IHeader {
  text?: string;
  height: string;
}

const Header = ({ text, height }: IHeader) => {
  return (
    <div
      className={`h-${height} bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2`}
    >
      <div className="text-center mt-10">
        {text && (
          <h1 className="text-white text-5xl font-bold mb-2">
            Find your table for any occasion
          </h1>
        )}
        <div className="text-left text-lg py-3 m-auto flex justify-center">
          <input
            className="rounded  mr-3 p-2 w-[450px]"
            type="text"
            placeholder="State, city or town"
          />
          <button className="rounded bg-red-600 px-9 py-2 text-white">
            Lets go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
