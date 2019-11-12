import { RECEIVE_NOTIFICATIONS } from "./notificationActions.jsx";

const initialState = {
  notifications: [],
  echoFeature: false
};

export default function notifications(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_NOTIFICATIONS:
      return Object.assign({}, state, {
        notifications: action.data
      });
    default:
      return state;
  }
}
