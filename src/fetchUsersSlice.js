import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const fetchUsersSlice = createSlice({
  name: "fetchusers",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchusers.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchusers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchusers.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.error = action.error;
      });
  },
});

export default fetchUsersSlice.reducer;

export const fetchusers = createAsyncThunk("users/fetch", async (page = 10) => {
  try {
    const res = await fetch(`https://api.github.com/users?per_page=${page}`);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
});
