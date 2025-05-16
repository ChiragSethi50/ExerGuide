import { createAsyncThunk } from "@reduxjs/toolkit";
import { getExerciseService } from "./exercise.service";

export const getExerciseAction = createAsyncThunk("", async (_, thunkApi) => {
    try {
        const response = await getExerciseService();
        const data = await response.data();
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
})