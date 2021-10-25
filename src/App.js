import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Category from "./pages/Category/Category";
import Navbar from "./components/Navbar/Navbar";
import Submenu from "./components/Submenu/Submenu";
import Search from "./pages/Search/Search";
import Home from "./pages/Home";
import Product from "./pages/Product/Product";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Submenu />
      <div>
        <Switch>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path="/:slug" exact>
            <Category />
          </Route>
          <Route path="/:city/:slug" exact>
            <Product />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
