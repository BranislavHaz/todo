import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postNameList = createAsyncThunk(
  "global/postNameList",
  async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data,
      }),
    };

    fetch(
      "https://626abc396a86cd64adb203dd.mockapi.io/api/list",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
);

const initialState = {};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;
