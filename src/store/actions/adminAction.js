import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import {
  getAllCodeService,
  createNewUserService,
  getAllUsers,
  deleteUserService,
  editUserService,
} from '../../services/userService';

export const fetchGenderApi = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchGenderStart());
      let res = await getAllCodeService('gender');
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (e) {
      dispatch(fetchGenderFailed());
    }
  };
};

export const fetchGenderStart = () => ({
  type: actionTypes.FETCH_GENDER_START,
});

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  payload: genderData,
});

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});

export const fetchPositionApi = () => {
  return async (dispatch) => {
    try {
      let res = await getAllCodeService('position');
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (e) {
      dispatch(fetchPositionFailed());
    }
  };
};

export const fetchPositionStart = () => ({
  type: actionTypes.FETCH_POSITION_START,
});

export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  payload: positionData,
});

export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
});

export const fetchRoleApi = () => {
  return async (dispatch) => {
    try {
      let res = await getAllCodeService('role');
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (e) {
      dispatch(fetchRoleFailed());
    }
  };
};

export const fetchRoleStart = () => ({
  type: actionTypes.FETCH_ROLE_START,
});

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  payload: roleData,
});

export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});

export const createNewUserApi = (data) => {
  return async (dispatch) => {
    try {
      let res = await createNewUserService(data);
      console.log('check create user redux: ', res);
      if (res && res.errCode === 0) {
        toast.success('Create a new user succeed!');
        dispatch(saveUserSuccess());
        dispatch(getAllUserApi());
      } else {
        dispatch(saveUserFailed());
      }
    } catch (e) {
      dispatch(saveUserFailed());
    }
  };
};

const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

const saveUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAILED,
});

export const getAllUserApi = () => {
  return async (dispatch) => {
    try {
      let res = await getAllUsers('ALL');
      if (res && res.errCode === 0) {
        dispatch(getAllUserSuccess(res.users.reverse()));
      } else {
        toast.error('Fetch all users error!');
        dispatch(getAllUserFailed());
      }
    } catch (e) {
      toast.error('Fetch all users error!');
      dispatch(getAllUserFailed());
    }
  };
};

const getAllUserSuccess = (users) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  payload: users,
});

const getAllUserFailed = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAILED,
});

export const deleteUserApi = (id) => {
  return async (dispatch) => {
    try {
      let res = await deleteUserService(id);
      console.log('check delete user redux: ', res);
      if (res && res.errCode === 0) {
        toast.success('Delete user succeed!');
        dispatch(deleteUserSuccess());
        dispatch(getAllUserApi());
      } else {
        toast.error('Delete user error!');
        dispatch(deleteUserFailed());
      }
    } catch (e) {
      toast.error('Delete user error!');
      dispatch(deleteUserFailed());
    }
  };
};

const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});

const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
});

export const editUserApi = (user) => {
  return async (dispatch) => {
    try {
      let res = await editUserService(user);
      if (res && res.errCode === 0) {
        toast.success('Update user succeed!');
        dispatch(editUserSuccess());
        dispatch(getAllUserApi());
      } else {
        toast.error('Update user error!');
        dispatch(editUserFailed());
      }
    } catch (e) {
      toast.error('Update user error!');
      dispatch(editUserFailed());
    }
  };
};

const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});

const editUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILED,
});
