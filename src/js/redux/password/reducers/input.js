import * as types from "../../../constants/ActionTypes"

const initialState = {
  fetch: false,
  warning: false,
  message: ""
}

export default function Input(state = initialState, action) {
  switch (action.type) {
  case types.ADD_PASSWORD:
    {
      state.fetch = true
      state.warning = action.response.Warning
      state.message = action.response.Message

      return JSON.parse(JSON.stringify(state))
    }
  default:
    return state
  }
}
