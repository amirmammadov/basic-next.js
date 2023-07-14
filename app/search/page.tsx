/* eslint-disable @next/next/no-img-element */

const regionData = [
  "Toronto",
  "Ottawa",
  "Montreal",
  "Hamilton",
  "Kingston",
  "Niagara",
];

const cuisineData = ["Mexican", "Italian", "Chinese"];

export default function SearchPage() {
  return (
    <div className="flex py-4 m-auto w-2/3 justify-between items-start">
      <div className="w-1/5">
        <div className="border-b pb-4">
          <h1 className="mb-2">Region</h1>
          {regionData.map((region, index) => (
            <p key={index} className="font-light text-reg">
              {region}
            </p>
          ))}
        </div>
        <div className="border-b pb-4 mt-3">
          <h1 className="mb-2">Cuisine</h1>
          {cuisineData.map((cuisine, index) => (
            <p key={index} className="font-light text-reg">
              {cuisine}
            </p>
          ))}
        </div>
        <div className="mt-3 pb-4">
          <h1 className="mb-2">Price</h1>
          <div className="flex">
            <button className="border w-full text-reg font-light rounded-l p-2">
              $
            </button>
            <button className="border-r border-t border-b w-full text-reg font-light p-2">
              $$
            </button>
            <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
              $$$
            </button>
          </div>
        </div>
      </div>
      <div className="w-5/6">
        <div className="border-b flex pb-5">
          <img
            src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
            alt=""
            className="w-44 rounded"
          />
          <div className="pl-5">
            <h2 className="text-3xl">Aiāna Restaurant Collective</h2>
            <div className="flex items-start">
              <div className="flex mb-2">*****</div>
              <p className="ml-2 text-sm">Awesome</p>
            </div>
            <div className="mb-9">
              <div className="font-light flex text-reg">
                <p className="mr-4">$$$</p>
                <p className="mr-4">Mexican</p>
                <p className="mr-4">Ottawa</p>
              </div>
            </div>
            <div className="text-red-600">
              <a href="">View more information</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
