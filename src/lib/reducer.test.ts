import reducer from "./reducer";
import { TOGGLE } from "./action";
describe("start", () => {
  it("initial", () => {
    expect(reducer(undefined, {})).toBe(false);
  });
  it("later", () => {
    expect(reducer(false, { type: TOGGLE })).toBe(true);
  });
});
