import { NextPage } from "next";
import NavBar from "./NavBar";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <style jsx global>{`
        a {
          color: black;
        }
      `}</style>
    </>
  );
};

export default Layout;
