import { GET_LAUREATS } from "../consts/actions-types";

export function getLaureats (payload) {
  return { type: GET_LAUREATS, payload};
}
