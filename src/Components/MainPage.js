import "../index.css";
import Page1 from "./page1";
import Page2 from './page2';
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function MainPage() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" ><Page1 /></Route>
      <Route path="/page2"><Page2 /></Route>
      <Route path="/page3"><Page3/></Route>
      <Route path="/page4"><Page4 /></Route>
      <Route path="/page5"><Page5 /></Route>
    </Switch>
  </Router>
  );
}

export default MainPage;
