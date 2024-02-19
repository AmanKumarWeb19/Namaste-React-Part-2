import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

it("Should render Header Component With a Login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});
