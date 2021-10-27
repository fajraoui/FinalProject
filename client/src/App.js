
import Ball from "./components/Ball";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Footer from "./components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/donate/Register";
import SignIn from "./components/donate/LogIn";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/donate/Dashboard";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import PrivateRoute from "./components/donate/PrivateRouteD";
import PrivateRouteV from "./components/volunteer/PrivateRoute";
import PrivateRouteC from "./components/charity/PrivateRouteC";
import Profile from "./components/charity/Profile";
import SignUp from "./components/charity/SignUp";
import LogIn from "./components/charity/SignIn";
import Vregister from "./components/volunteer/Vregister";
import Vlogin from "./components/volunteer/Vlogin";
import Vprofile from "./components/volunteer/Vprofile";
import About from "./components/About"
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
import "./App.css";
import Contact from "./components/Contact";
import News from "./components/News";
import Addpost from "./components/Addpost";
import Edit from "./components/EditPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Ball />

      <Switch>
        <Route path="/add" component={Addpost}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signIn" component={LogIn} />
        <Route exact path="/signUp" component={SignUp} />
       
        <PrivateRouteC exact path="/profile" component={Profile} />
        <Route exact path="/vregister" component={Vregister}/>
      <Route exact path="/vlogin" component={Vlogin}/>
      <PrivateRouteV exact path="/vprofile" component={Vprofile}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/news" component={News}/>
      <Route path="/edit/:id" component={Edit}/>  
      </Switch>
  
      <Footer />
    </div>
  );
}

export default App;
