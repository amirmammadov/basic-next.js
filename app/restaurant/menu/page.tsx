import MenuItem from "../../../components/molecules/MenuItem";
import MenuTitle from "../../../components/atoms/MenuTitle";
import MenuLink from "../../../components/atoms/MenuLink";

export default function RestaurantMenuPage() {
  return (
    <>
      <div className="h-96 overflow-hidden">
        <MenuTitle />
      </div>
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <nav className="flex text-reg border-b pb-2">
            <MenuLink text="Overview" />
            <MenuLink text="Menu" />
          </nav>
          <main className="bg-white mt-5">
            <div>
              <div className="mt-4 pb-1 mb-1">
                <h1 className="font-bold text-4xl">Menu</h1>
              </div>
              <MenuItem
                title="Surf and Turf"
                desc="A well done steak with lobster and rice"
                price={80.0}
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
