import "./App.css";
import Errors from "./pages/Errors/Errors";
import Landpage from "./pages/Landpage/Landpage";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; 
import PrivateRoute from "./router/PrivateRoute";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { current } from "./Redux/actions/user";
import ProductList from "./assets/Product/ProductList";
import Admin from "./pages/Admin/Admin";
import Employee from "./pages/Employee/Employee";

function App() {
  const [isConnected, setIsConnected] = useState(false)
  const dispatch = useDispatch();
  const token= localStorage.getItem("token")
  useEffect(() => {
    if(token){
    dispatch(current())}
  }, []);
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landpage} />
        <Route path="/Admin" component={Admin}/>
        <Route path="/Employee" component={Employee}/>
        <Route path="/products" component={ProductList} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/*" component={Errors} />
      </Switch>
    </div>
  );
}

export default App;