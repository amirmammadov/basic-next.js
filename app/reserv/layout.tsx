import Nav from "../../components/molecules/Nav";

const ReservLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav title="Open Table" />
      {children}
    </>
  );
};

export default ReservLayout;
