import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter } from "react";

const AppLayOut = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    Element: <AppLayOut />,
  },
  {
    path: "/",
    // Element: <AppLayOut />,
  },
  {
    path: "/",
    // Element: ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
