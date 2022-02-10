import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: [
    {
      firstname: 'solange',
      lastname: 'Ormeno',
      phoneNumber: '123 456 789'
    },
    {
      firstname: 'Jefri',
      lastname: 'Bacilio',
      phoneNumber: '987 654 321'
    }
  ]
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state,action) => {
      state.user = [...state.user, action.payload];
    },
  },
});

export const { addUser } = userSlice.actions;


export const selectUserData = (state) => state.user.user;


export default userSlice.reducer;
