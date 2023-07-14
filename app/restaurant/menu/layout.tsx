import Nav from "../../../components/molecules/Nav";

const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav title="OpenTable" />
      {children}
    </>
  );
};

export default MenuLayout;
