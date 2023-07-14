import Nav from "../components/molecules/Nav";
import Header from "../components/molecules/Header";
import Cards from "../components/molecules/Cards";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Nav title="Restaurant" />
        <main>
          <Header text="Find your first job for first occasion" height="64" />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <Cards />
          </div>
        </main>
      </main>
    </main>
  );
}
