import axios from "axios";

import config from "../config";
import {authActions} from './authSlice'

export const checkUserSigninApi = () => {
  return async (dispatch) => {
    {
      const response = await axios.get(`${config.apiUrl}/auth/me`, {
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
