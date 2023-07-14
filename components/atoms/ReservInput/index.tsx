import React from "react";

interface IProps {
  placeholder: string;
}

const ReservInput = ({ placeholder }: IProps) => {
  return (
    <input
      type="text"
      className="border rounded p-3 w-80 mb-4"
      placeholder={placeholder}
    />
  );
};

export default ReservInput;
