import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { ReduxState, userActions } from '../../../store'

const Dashboard: FC = () => {
  const { isLoggedIn, data: user } = useSelector(
    (state: ReduxState) => state?.user
  )
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(userActions.logout())
  }
  return (
    <div className="dashboard">
      {!isLoggedIn && <Redirect to="/user/login" />}
      {isLoggedIn && (
        <div>
          <h3>User Dashboard</h3>
          <div>User Name: {user?.userName}</div>
          <div>First Name: {user?.firstName}</div>
          <div>Last Name: {user?.lastName}</div>
          <button onClick={handleLogout} className="button-logout">
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default Dashboard
