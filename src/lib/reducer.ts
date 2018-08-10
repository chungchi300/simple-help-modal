import { TOGGLE } from "./action";

export default function reducer(state = false, action) {
  switch (action.type) {
    case TOGGLE:
      return !state;
  }
  return state;
}
