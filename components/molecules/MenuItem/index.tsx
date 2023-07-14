import React from "react";

interface IMenuItem {
  title: string;
  desc: string;
  price: number;
}

const MenuItem = ({ title, desc, price }: IMenuItem) => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className=" border rounded p-3 w-[49%] mb-3">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="font-light mt-1 text-sm">{desc}</p>
        <p className="mt-7">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
