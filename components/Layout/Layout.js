import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, signIn}) => {
  return (
    <>
      <Header  signIn={signIn}/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
