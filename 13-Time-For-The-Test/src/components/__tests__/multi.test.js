import { multiply } from "../multiply"

test("Number should be calulated with two numbers",()=>{

  const result =multiply(5,3)

  expect(result).toBe(15)
})