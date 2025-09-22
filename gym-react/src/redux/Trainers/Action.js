import axios from "axios";
import api, { API_BASE_URL } from "../../Api/api";
import {
  ADD_TRAINER_FAILURE,
  ADD_TRAINER_REQUEST,
  ADD_TRAINER_SUCCESS,
  GET_TRAINER_FAILURE,
  GET_TRAINER_REQUEST,
  GET_TRAINER_SUCCESS,
  REMOVE_TRAINER_FAILURE,
  REMOVE_TRAINER_REQUEST,
  REMOVE_TRAINER_SUCCESS,
} from "./ActionType";

export const addTrainer =
  ({ userData }) =>
  async (dispatch) => {
    dispatch({ type: ADD_TRAINER_REQUEST });
    try {
      const response = await api.post(
        `${API_BASE_URL}/api/admin/users/trainers`,
        userData
      );
      const user = response.data;
      console.log("add trainer success:- ", user);
      dispatch({ type: ADD_TRAINER_SUCCESS, payload: user });
    } catch (error) {
      console.log("error ", error);
      dispatch({ type: ADD_TRAINER_FAILURE });
    }
  };

export const getTrainers = () => async (dispatch) => {
  dispatch({ type: GET_TRAINER_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/users/trainers`);
    const user = response.data;
    console.log("get trainer success:- ", user);

    dispatch({ type: GET_TRAINER_SUCCESS, payload: user });
  } catch (error) {
    console.log("error ", error);
    dispatch({ type: GET_TRAINER_FAILURE });
  }
};

export const removeTrainers = (userId) => async (dispatch) => {
  dispatch({ type: REMOVE_TRAINER_REQUEST });
  try {
    const response = await api.delete(
      `${API_BASE_URL}/api/admin/users/${userId}`
    );
    const user = response.data;
    console.log("add trainer success:- ", user);
    dispatch({ type: REMOVE_TRAINER_SUCCESS, payload: user });
  } catch (error) {
    console.log("error ", error);

    dispatch({ type: REMOVE_TRAINER_FAILURE });
  }
};
