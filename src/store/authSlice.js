import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false, isChecked: false },
  reducers: {
    signin(state) {
      state.isLoggedIn = true
      state.isChecked = true
    },
    signout(state) {
      state.isLoggedIn = false
      state.isChecked = true
    }
  }
})

export const authActions = authSlice.actions

export default authSlice
