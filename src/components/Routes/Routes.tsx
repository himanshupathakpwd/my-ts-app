import React, { FC, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { User } from '../'

const Routes: FC = () => {
  return (
    <div className="app-routes">
      <Router>
        <Fragment>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    </div>
  )
}

function Home() {
  return <h2>Home</h2>
}

export default Routes
