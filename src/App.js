import { Route, Switch } from 'react-router';
import './App.css';
import NavBar from './Components/NavBar';
import Admin from './Pages/Admin';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import UsersList from './Pages/UsersList';
import PrivateRoute from './router/PrivateRoute';
import { useState } from 'react';

function App() {
  const [isAuth, setisAuth] = useState(false)
  return (
    <div className="App">
      <NavBar setisAuth={setisAuth} isAuth={isAuth}/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={UsersList}/>
        <Route path="/users/user/:id" component={Profile}/>
        <PrivateRoute path="/admin" component={Admin} isAuth={isAuth}/>
        <Route path="/*" component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
