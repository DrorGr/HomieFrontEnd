import { userService } from '../../services/user-service'

export function getUsers() {
  return async dispatch => {
    try {
      dispatch({ type: 'LOADING_START' })
      const users = await userService.getUsers()
      dispatch({ type: 'SET_USERS', users })
    } catch (err) {
      console.log('UserActions: err in loadUsers', err)
    } finally {
      dispatch({ type: 'LOADING_DONE' })
    }
  }
}

export function onRemoveUser(userId) {
  return async dispatch => {
    try {
      await userService.remove(userId)
      dispatch({ type: 'REMOVE_USER', userId })
    } catch (err) {
      console.log('UserActions: err in removeUser', err)
    }
  }
}

export function onLogin(userCreds) {
  return async dispatch => {
    try {
      const user = await userService.login(userCreds)
      dispatch({ type: 'SET_USER', user })
    } catch (err) {
      console.log('UserActions: err in login', err)
    }
  }
}

export function onSignup(userCreds) {

  return async dispatch => {
    try {
      const user = await userService.signup(userCreds)
      dispatch({ type: 'SET_USER', user })
    } catch (err) {
      console.log('UserActions: err in signup', err)
    }
  }
}

export function onLogout() {
  return async dispatch => {
    try {
      await userService.logout()
      dispatch({ type: 'SET_USER', user: null })
    } catch (err) {
      console.log('UserActions: err in logout', err)
    }
  }
}