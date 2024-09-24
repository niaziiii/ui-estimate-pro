import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const _authSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetAuth: (state) => {
      state.user = initialState.user;
    },
  },
});

export default _authSlice;
export const authSlice = _authSlice.actions;
