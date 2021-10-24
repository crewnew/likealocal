import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Category from "./pages/Category/Category";
import Navbar from "./components/Navbar/Navbar";
import Submenu from "./components/Submenu/Submenu";
import Search from "./pages/Search/Search";
import Product from "./pages/Product/Product";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Link to="/category">Category</Link>
    </div>
  );
}
