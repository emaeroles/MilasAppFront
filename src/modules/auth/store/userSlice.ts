import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  username: string;
  email: string;
}

const initialState: User = {
  id: '',
  username: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    addUser: (state, acction: PayloadAction<User>) => {
      const { id, username, email } = acction.payload;
      state.id = id;
      state.username = username;
      state.email = email;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
