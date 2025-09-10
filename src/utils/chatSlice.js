import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [], // just an empty list
  },
  reducers: {
    addMessage: (state, action) => {
       
      state.messages.push(action.payload); 
      // payload will be { name: "User", message: "Hello" }
      if (state.messages.length > 20) {
        state.messages.shift();
      }
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
