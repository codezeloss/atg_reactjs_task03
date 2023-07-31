import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersService from "./usersService.ts";

// ** TS Interface
export interface UsersState {
  users: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}

// ** Initial States
const initialState: UsersState = {
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// !! GET All Users
export const getAllUsers = createAsyncThunk(
  "users/get-users",
  async (thunkAPI) => {
    try {
      return await usersService.getUsers();
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! GET Single User
export const getSingleUser = createAsyncThunk(
  "users/get-user",
  async (id: string, thunkAPI) => {
    try {
      return await usersService.getUser(id);
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// !!

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.users = action.payload;
        state.message = "success";
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getSingleUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(getSingleUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
