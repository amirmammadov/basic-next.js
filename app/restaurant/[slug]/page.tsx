import MenuTitle from "../../../components/atoms/MenuTitle";
import MenuLink from "../../../components/atoms/MenuLink";
import MenuImage from "../../../components/atoms/MenuImage";
import MenuReserv from "../../../components/atoms/MenuReserv";

const imgIDs = [41701449, 41701450, 41701452, 41701453, 41701454];

export default function RestaurantDetailsPage() {
  return (
    <>
      <div className="h-96 overflow-hidden">
        <MenuTitle />
      </div>

      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <nav className="flex text-reg border-b pb-2">
            <MenuLink text="Overview" />
            <MenuLink text="Menu" />
            <MenuLink text="Menu" />
          </nav>

          <div className="mt-4 border-b pb-6">
            <h1 className="font-bold text-6xl">Milesstone Grill</h1>
          </div>

          <div className="flex items-end">
            <div className="ratings mt-2 flex items-center">
              <p>*****</p>
              <p className="text-reg ml-3">4.9</p>
            </div>
            <div>
              <p className="text-reg ml-4">600 Reviews</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg font-light">
              The classics you love prepared with a perfect twist, all served up
              in an atmosphere that feels just right. That is the Milestones
              promise. So, whether you are celebrating a milestone, making the
              most of Happy Hour or enjoying brunch with friends, you can be
              sure that every Milestones experience is a simple and perfectly
              memorable one.
            </p>
          </div>

          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
              5 photos
            </h1>
            <div className="flex flex-wrap">
              {imgIDs.map((id, index) => (
                <MenuImage key={index} id={id} />
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
              What 100 people are saying
            </h1>
            <div>
              <div className="border-b pb-7 mb-7">
                <div className="flex">
                  <div className="w-1/6 flex flex-col items-center">
                    <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                      <h2 className="text-white text-2xl">MJ</h2>
                    </div>
                    <p className="text-center">Micheal Jordan</p>
                  </div>
                  <div className="ml-10 w-5/6">
                    <div className="flex items-center">
                      <div className="flex mr-5">*****</div>
                    </div>
                    <div className="mt-5">
                      <p className="text-lg font-light">
                        Laurie was on top of everything! Slow night due to the
                        snow storm so it worked in our favor to have more one on
                        one with the staff. Delicious and well worth the money.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MenuReserv />
      </div>
    </>
  );
}
