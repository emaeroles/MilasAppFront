import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface User {
  Id: string;
  Username: string;
  Email: string;
}

const initialState: User = {
  Id: '',
  Username: '',
  Email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    addUser: (state, acction: PayloadAction<User>) => {
      const { Id, Username, Email } = acction.payload;
      state.Id = Id;
      state.Username = Username;
      state.Email = Email;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
