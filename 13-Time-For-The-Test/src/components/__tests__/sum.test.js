import { Sum } from "../Sum";

test("Sum Function Should calculate the sum of two numbers", () => {
  const result = Sum(2, 5);

  //Assertion:-
  expect(result).toBe(7);
});
