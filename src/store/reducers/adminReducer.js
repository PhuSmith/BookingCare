import actionTypes from '../actions/actionTypes';

const initialState = {
  isLoadingGender: false,
  genders: [],
  roles: [],
  positions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      state.isLoadingGender = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.payload;
      state.isLoadingGender = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      state.isLoadingGender = false;
      state.genders = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_START:
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      state.positions = action.payload;
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_FAILED:
      state.positions = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_START:
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roles = action.payload;
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_FAILED:
      state.roles = [];
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
