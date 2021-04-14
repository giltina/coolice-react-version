import logo from './logo.png';
import './App.css';
import Price from './components/Price';
import Create from './components/Create';
import Edit from './components/Edit';
import Show from './components/Show';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from "./components/SignUp"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Auth";

function App() {
  return (
    <AuthProvider>
    <Router>
    
    <Route path={'/'} exact component={Home} />
    <Route path="/coolingthenation" component={Login} />
    <Route path="/coolaccnt" component={SignUp} />
    <PrivateRoute path={'/price'} exact component={Price} />
    <PrivateRoute path={'/create'} exact component={Create} />
    <PrivateRoute path='/edit/:id' component={Edit} />
    <PrivateRoute path='/show/:id' component={Show} />
    </Router>
    </AuthProvider>
  );
}

export default App;
