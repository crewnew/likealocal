import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Category from "./pages/Category/Category";
import Navbar from "./components/Navbar/Navbar";
import Submenu from "./components/Submenu/Submenu";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import NoCity from "./pages/NoCity/NoCity";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/editors/suggest-city" exact>
            <Navbar />
            <NoCity />
          </Route>

          <Route path="/search" exact>
            <Navbar />
            <Submenu />
            <Search />
          </Route>
          <Route path="/:slug" exact>
            <Navbar />
            <Submenu />
            <Category />
          </Route>
          <Route path="/:city/:slug" exact>
            <Navbar />
            <Submenu />
            <Product />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
