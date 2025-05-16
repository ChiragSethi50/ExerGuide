
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  
}

const initialState: UserState = {

};

const exerciseSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default exerciseSlice.reducer;
