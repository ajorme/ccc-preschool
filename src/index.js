import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./components/pages/App";
import Calendar from "./components/pages/Calendar";
import footer from "./components/partials/footer";
import nav from "./components/partials/nav";
import registerServiceWorker from "./registerServiceWorker";

export let routes = {
  calendar: "/calendar",
  register:
    "https://centerchristianchurch.churchcenter.com/registrations/events/124968/session/new",
  news:
    "https://www.facebook.com/pg/Center-Christian-church-Preschool-862423147145270/posts/?ref=page_internal"
};

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route component={nav} />
      <Switch>
        <Route path="/calendar" component={Calendar} />
        <Route path="/" component={App} />
      </Switch>
      <Route component={footer} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
