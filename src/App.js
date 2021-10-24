import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Category from "./pages/Category/Category";

export default function App() {
  return (
    <Router>
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
  return <h2></h2>;
}

function Product() {
  return <h2>Product</h2>;
}

function Search() {
  return <h2>Search</h2>;
}
