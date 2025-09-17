import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { isSignedIn: false, isChecked: false },
  reducers: {
    signin(state) {
      state.isSignedIn = true
      state.isChecked = true
    },
    signout(state) {
      state.isSignedIn = false
      state.isChecked = true
    }
  }
})

export const authActions = authSlice.actions

export default authSlice
