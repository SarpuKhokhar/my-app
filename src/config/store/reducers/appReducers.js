import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    language: "id",
    contactUSModal: {
      show: false,
    },
  },
  reducers: {
    showContactUsModal: (state, action) => {
      state.contactUSModal = { ...state.contactUSModal, show: action.payload };
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showContactUsModal, changeLanguage } = counterSlice.actions;
export default counterSlice.reducer;
