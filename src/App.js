import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Submenu from "./components/Submenu/Submenu";
import CategoryCover from "./components/CategoryCover/CategoryCover";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Paragraph from "./components/Paragraph/Paragraph";
import Footer from "./components/Footer/Footer";
import CardOne from "./components/CardOne/CardOne";
import CardTwo from "./components/CardTwo/CardTwo";
import CardThree from "./components/CardThree/CardThree";
import CardFour from "./components/CardFour/CardFour";
import CardFive from "./components/CardFive/CardFive";

export default function App() {
  return (
    <Router>
      <Navbar />
      <SocialMedia />
      <CategoryCover />
      <Submenu />
      <Paragraph />
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
      <Footer />
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav> */}

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

function Category() {
  return <h2>Category</h2>;
}

function Product() {
  return <h2>Product</h2>;
}

function Search() {
  return <h2>Search</h2>;
}
