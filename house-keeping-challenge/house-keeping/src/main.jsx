import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import Header from "../header";
import Main from "../mainComponent";
import Footer from "../footer";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    // <Fragment>
    <>
      <Header />
      <Main />
      <Footer />
    </>
    // </Fragment>
  );
}

root.render(<Page />);
