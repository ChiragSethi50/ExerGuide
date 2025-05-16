
import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  try {
    const config = req.headers;
    const response = axios.get("https://exercisedb.p.rapidapi.com/exercises")
  }catch (error) {
    console.log(error)
    const err = error as AxiosError
    return NextResponse.json({ status: err.status });
  }
};

  