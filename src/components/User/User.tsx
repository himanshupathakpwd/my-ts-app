import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, useRouteMatch, Link, Redirect } from 'react-router-dom'
import { Dashboard, Login } from '.'
import { ReduxState } from '../../store'

const User: FC = () => {
  const { path, url } = useRouteMatch()
  const { isLoggedIn } = useSelector((state: ReduxState) => state?.user)

  return (
    <div className="user">
      <Switch>
        <Route exact path={path}>
          {!isLoggedIn && (
            <p>
              Please{' '}
              <Link to={`${url}/login`} className="login-link">
                login
              </Link>{' '}
              to go to dashboard
            </p>
          )}
          {isLoggedIn && <Redirect to={`${url}/dashboard`} />}
        </Route>
        <Route path={`${path}/login`}>
          <Login />
        </Route>
        <Route path={`${path}/dashboard`}>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  )
}

export default User
