import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface InitialState {
  page: string;
  userInfo: {
    email: string | null;
    token: string | null;
    id: string | null;
  };
}

const initialState: InitialState = {
  page: 'Registration',
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
  },
});

export const { setUser, removeUser, changePage } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.userInfo;
export const selectPage = (state: RootState) => state.user.page;

export default userSlice.reducer;
