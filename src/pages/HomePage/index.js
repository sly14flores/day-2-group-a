import React from 'react';
import { Redirect, Route, Switch } from "react-router"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux'
import { reset } from '../../redux/userSlice'

import Search from '../Search'
import Selected from '../Selected'

const HomePage = () => {

    const users = useSelector(state => state.user.loginUsers);
    const profile = users?.[0]?.name;

    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = (e) => {
      dispatch(reset())
      history.push("/login")
      e.preventDefault()
    }

    return (
    <div>
      <div style={{marginBottom: '15px'}}>Welcome {profile}</div>
      <nav className="topnav">
        <ul>
          <li>
            <Link className="link" to="/select">Search</Link>
          </li>
          <li>
            <Link className="link" to="/selected">Selected</Link>
          </li>
          <li>
            <a href="#!" className="link" onClick={(e) => handleLogout(e)}>Logout</a>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/select">
            <Search />
        </Route>
        <Route path="/selected">
            <Selected />
        </Route>
        <Route>
            <Redirect to="select" />
        </Route>
      </Switch>
    </div>
    );
}

export default HomePage