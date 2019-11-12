import React from "react";
import { render } from "react-dom";
import "./fonts/index.css";
import { Router, Route, browserHistory, IndexRedirect } from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import HeaderContainer from "./header/headerContainer.jsx";
import NotificationsContainer from "./notifications/notificationsContainer.jsx";
import { routerMiddleware, syncHistoryWithStore } from "react-router-redux";
import reducer from "./reducer.jsx";
import thunk from "redux-thunk";

injectTapEventPlugin();

const routerMiddlewareBrowserHistory = routerMiddleware(browserHistory);

let store = createStore(
  reducer,
  applyMiddleware(routerMiddlewareBrowserHistory, thunk)
);

const history = syncHistoryWithStore(browserHistory, store);

let routes = (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={HeaderContainer}>
          <IndexRedirect to="notification" />
          <Route path="notification" component={NotificationsContainer} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

render(routes, document.getElementById("app"));
