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

const initialState = {
  user: null,
  loading: false,
  error: null,
  jwt: null,
  trainers: [],
};

const trainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRAINER_REQUEST:
    case GET_TRAINER_REQUEST:
    case REMOVE_TRAINER_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_TRAINER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        trainers: action.payload,
      };
    case REMOVE_TRAINER_SUCCESS:
      let updatedTrainers = state.trainers.filter(
        (item) => item.id !== state.payload.id
      );
      return {
        ...state,
        loading: false,
        error: null,
        trainers: updatedTrainers,
      };
    case ADD_TRAINER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        trainers: [action.payload, ...state.trainers],
      };

    case GET_TRAINER_FAILURE:
    case REMOVE_TRAINER_FAILURE:
    case ADD_TRAINER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default trainerReducer;
