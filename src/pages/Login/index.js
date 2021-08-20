import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../redux/userSlice'
import './login.css'

import { useHistory } from "react-router";

const user = {
  username: '',
  password: ''
}

const Login = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const [account, setAccount] = useState(user)

  const invalidLogin = useSelector(state => state.user.invalidLogin)

  useEffect(() => {
    if (invalidLogin!==null) {
      if (invalidLogin) {
        alert("Username or password incorrect")
        dispatch(reset())
      } else {
        history.push("/")
      }
    }
  },[history,invalidLogin])

  const handleInput = (e) => {
    const accountCopy = {...account}
    accountCopy[e.target.name] = e.target.value
    setAccount(accountCopy)
  }

  return (
    <div className="page">
      <form className="login-form">
        <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
                type="text" 
                className="form-control" 
                id="username"
                name="username"
                value={account.username} 
                onChange={handleInput}
            />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
                type="password" 
                className="form-control" 
                id="password"
                name="password"
                value={account.password} 
                onChange={handleInput}

            />
        </div>
        <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => dispatch(login(account))}
        >Submit</button>
      </form>
    </div>
  )

}

export default Login