import "whatwg-fetch";

/*
 * action types
 */

export const RECEIVE_NOTIFICATIONS = "RECEIVE_NOTIFICATIONS";

/*
 * action creators
 */

function receiveNotifications(data) {
  return { type: RECEIVE_NOTIFICATIONS, data };
}

/*
 * thunks
 */
export function fetchNotifications() {
  return (dispatch, getState) => {
    const url = "/api/notification";
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch(receiveNotifications(data)));
  };
}

export function createNotification(notificationText) {
  return (dispatch, getState) => {
    const url = "/api/notification";
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: notificationText
      })
    };
    return fetch(url, opts);
  };
}

export function dismissNotification(notification) {
  return (dispatch, getState) => {
    const url = "/api/notification/" + notification._id;
    const opts = {
      method: "DELETE"
    };
    return fetch(url, opts);
  };
}
