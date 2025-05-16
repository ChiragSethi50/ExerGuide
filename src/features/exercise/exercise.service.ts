import axios from "axios";

export const getExerciseService = () => axios.get("/api/exercise");