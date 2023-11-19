import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface InitialState {
  page: string;
  userName: string;
  userInfo: {
    email: string | null;
    token: string | null;
    id: string | null;
  };
}

const initialState: InitialState = {
  page: 'Registration',
  userName: 'Username',
  userInfo: {
    email: null,
    token: null,
    id: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.userInfo = {
        email: action.payload.email,
        token: action.payload.token,
        id: action.payload.id,
      };
    },
    removeUser(state) {
      state.userInfo = {
        email: null,
        token: null,
        id: null,
      };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    changeUserName: (state, { payload }) => {
      state.userName = payload;
    },
  },
});

export const { setUser, removeUser, changePage, changeUserName } =
  userSlice.actions;

export const selectUser = (state: RootState) => state.user.userInfo;
export const selectPage = (state: RootState) => state.user.page;
export const selectUserName = (state: RootState) => state.user.userName;

export default userSlice.reducer;
