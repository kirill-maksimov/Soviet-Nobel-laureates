import { GET_LAUREATS_SUCCESS } from "../consts/actions-types";

const defaultState = {
  laureates: null,
};

function reducer (state = defaultState, action) {
  switch(action.type) {
    case GET_LAUREATS_SUCCESS:
      return {
        ...state,
        laureates: action.result,
      }
    default: return state
  }
}

export default reducer;