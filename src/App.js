import './App.css';
import { Route, Switch } from 'react-router';

import HomePage from './pages/HomePage'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/">
          <h1>Food Searcher</h1>
          <HomePage />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;