import React from "react";

//components
import { Header } from "../Header";

//types
type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export { Layout };
