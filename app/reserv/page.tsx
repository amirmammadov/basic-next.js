/* eslint-disable @next/next/no-img-element */
import ReservInput from "../../components/atoms/ReservInput";

const inputData = [
  "First name",
  "Last name",
  "Phone number",
  "Email",
  "Occasion (optional)",
  "Requests (optional)",
];

export default function ReservationPage() {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <div>
          <h3 className="font-bold">You are almost done!</h3>
          <div className="mt-5 flex">
            <img
              src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
              alt=""
              className="w-32 h-18 rounded"
            />
            <div className="ml-4">
              <h1 className="text-3xl font-bold">
                Aiāna Restaurant Collective
              </h1>
              <div className="flex mt-3">
                <p className="mr-6">Tues, 22, 2023</p>
                <p className="mr-6">7:30 PM</p>
                <p className="mr-6">3 people</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between w-[660px]">
          {inputData.map((item, index) => (
            <ReservInput key={index} placeholder={item} />
          ))}
          <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
            Complete reservation
          </button>
          <p className="mt-4 text-sm">
            By clicking “Complete reservation” you agree to the OpenTable Terms
            of Use and Privacy Policy. Standard text message rates may apply.
            You may opt out of receiving text messages at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
