import { connect } from "react-redux";
import Notifications from "./notifications.jsx";
import {
  createNotification,
  dismissNotification,
  fetchNotifications
} from "./notificationActions.jsx";

const getVisibleNotifications = notifications =>
  notifications ? notifications.filter(n => n.visible) : undefined;

const mapStateToProps = state => {
  return {
    notifications: state.notifications.notifications,
    echoEnabled: state.notifications.echoFeature
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dismissNotification: notification => {
      dispatch(dismissNotification(notification)).then(() =>
        dispatch(fetchNotifications())
      );
    },
    addNotification: text => {
      dispatch(createNotification(text)).then(() =>
        dispatch(fetchNotifications())
      );
    },
    fetchNotifications: () => {
      dispatch(fetchNotifications());
    }
  };
};

const NotificationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);

export default NotificationsContainer;
