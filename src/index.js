import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import App from "./layouts/App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactGA.initialize("UA-49026829-2");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
