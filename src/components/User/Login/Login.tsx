import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { userActions, ReduxState } from '../../../store'

const Login: FC = () => {
  const { isLoading, isLoggedIn } = useSelector(
    (state: ReduxState) => state?.user
  )
  const dispatch = useDispatch()
  const [user, updateUser] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('User', user)
    if (user.username && user.password) {
      dispatch(userActions.userLoginAction(user))
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div className="login">
      {isLoggedIn && <Redirect to="/user/dashboard" />}
      {isLoading ? (
        <div className="loading">Loading ...</div>
      ) : (
        <form onSubmit={handleSubmit} name="loginForm">
          <div>
            <input
              name="username"
              placeholder="username"
              value={user.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={user.password}
              onChange={handleChange}
            />
            <button name="loginButton">Login</button>
          </div>
        </form>
      )}
    </div>
  )
}

export default Login
