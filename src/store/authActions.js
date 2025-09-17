import axios from "axios";

import config from "../config";
import {authActions} from './authSlice'

export const checkUserSigninApi = () => {
  return async (dispatch) => {
    {
      const response = await axios.get(`${config.apiUrl}/users/me`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        dispatch(authActions.signin());
      } else {
        dispatch(authActions.signout());
      }
    }
  };
};

export const sendLogoutRequest = () => {
  return async (dispatch) => {
    {
      const response = await axios.post(
        `${config.apiUrl}/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        dispatch(authActions.signout());
      } else {
        console.error("Logout failed");
      }
    }
  };
}
