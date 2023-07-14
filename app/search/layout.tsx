import React from "react";

import Nav from "../../components/molecules/Nav";
import Header from "../../components/molecules/Header";

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav title="OpenTable" />
      <Header height="20" />
      {children}
    </>
  );
};

export default SearchLayout;
