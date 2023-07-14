import Nav from "../../../components/molecules/Nav";

const SlugLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav title="OpenTable" />
      {children}
    </>
  );
};

export default SlugLayout;
