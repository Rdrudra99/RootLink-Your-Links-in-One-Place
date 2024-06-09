import BalaData from "@/lib/USerDataSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state using the UserData interface
interface UserDatasState {
  userData: BalaData;
}

const initialState: UserDatasState = {
  userData: {
    profile: {
      username: "",
      description: "",
      profileImage: "",
    },
    socialLinks: {
      facebook: "",
      twitter: "",
      instagram: "",
      github: "",
      telegram: "",
      linkedin: "",
      email: "",
      youtube: "",
      whatsapp: "",
    },
    links: [],
  },
};

export const userDataSlice = createSlice({
  name: "BalaData",
  initialState,
  reducers: {
    // Define reducers to update different parts of the user data
    updateProfile: (state, action: PayloadAction<BalaData["profile"]>) => {
      state.userData.profile = action.payload;
    },
    updateSocialLinks: (
      state,
      action: PayloadAction<BalaData["socialLinks"]>
    ) => {
      state.userData.socialLinks = action.payload;
    },
    updateLinks: (state, action: PayloadAction<BalaData["links"]>) => {
      state.userData.links = action.payload;
    },
    // Add a new reducer to set the entire user data
    setUserData: (state, action: PayloadAction<BalaData>) => {
      state.userData = action.payload;
    },
    removeLink: (state, action: PayloadAction<number>) => {
      state.userData.links.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateProfile,
  updateSocialLinks,
  updateLinks,
  setUserData,
  removeLink,
} = userDataSlice.actions;

export default userDataSlice.reducer;
