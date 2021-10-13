import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Posts from "./Pages/Posts";
import Profile from "./Pages/Profile";
import FindFriends from "./Pages/FindFriends";

const App = (props) => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/home" component={Posts} />
      <Route exact path="/profile/:username" component={Profile} />
      <Route exact path="/findfriends" component={FindFriends} />
    </BrowserRouter>
  );
};

export default App;
