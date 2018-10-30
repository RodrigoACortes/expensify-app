import authReducer from '../../reducers/auth'

test('should set uid for login', () => {
  const uid = 1
  const action = {
    type: 'LOGIN',
    uid
  }
  const state = authReducer({}, action)
  expect(state.uid).toEqual(uid)
})

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({ uid: 'hi' }, action)
  expect(state).toEqual({})
})