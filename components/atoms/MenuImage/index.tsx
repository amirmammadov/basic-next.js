/* eslint-disable @next/next/no-img-element */
import React from "react";

interface IMenuImage {
  id: number;
}

const MenuImage = ({ id }: IMenuImage) => {
  return (
    <img
      className="w-56 h-44 mr-1 mb-1"
      src={`https://resizer.otstatic.com/v2/photos/xlarge/3/${id}.jpg`}
      alt=""
    />
  );
};

export default MenuImage;
