import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should Render the Reataurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const acordianHeader = screen.getByText("Whopper (6)");

  fireEvent.click(acordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(6);

  const CartItemBeforeChange = screen.getByText("Cart -(0 items)");

  expect(CartItemBeforeChange).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtn[0]);

  const CartItemAfterChange = screen.getByText("Cart -(1 items)");

  expect(CartItemAfterChange).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  const CartItemAfterSecChange = screen.getByText("Cart -(2 items)");

  expect(CartItemAfterSecChange).toBeInTheDocument();

  const IncartBag = screen.getAllByTestId("foodItems");

  expect(IncartBag.length).toBe(8);

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCartBtn);

  const AfterClearcartBag = screen.getAllByTestId("foodItems");

  expect(AfterClearcartBag.length).toBe(6);

  const textAfterEmpty = screen.getByText(
    "Cart is Empty. Please Add Item to the Cart !!"
  );

  expect(textAfterEmpty).toBeInTheDocument();
});
