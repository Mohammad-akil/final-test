import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add(state, action) {
      const newUsers = action.payload;
      const isUnique = state.filter((item) => {
        return item.id === newUsers.id;
      });
      if (isUnique.length === 0) {
        state.push(newUsers);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { add, remove } = userSlice.actions;
export default userSlice.reducer;
