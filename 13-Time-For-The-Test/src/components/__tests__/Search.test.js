const { render, screen, fireEvent } = require("@testing-library/react");
import Body from "../Body";
import MOCK_DATA from "../../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should Search Res List For burger text Input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cardAfterSearch = screen.getAllByTestId("resCard");

  expect(cardAfterSearch.length).toBe(2);
});

it("Should Filter Top Rated Restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardBefaoreFilter = screen.getAllByTestId("resCard");
  expect(cardBefaoreFilter.length).toBe(20);

 const topRatedButton=screen.getByRole("button",{name:"Top Rated Resturant"})

 fireEvent.click(topRatedButton)

 const cardAfterFilter=screen.getAllByTestId("resCard")

 expect(cardAfterFilter.length).toBe(15)
});
