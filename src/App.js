import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "../src/components/Header.js";
import Auth from "./components/Auth.js";
import UserProfile from "./components/UserProfile.js";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {state ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
