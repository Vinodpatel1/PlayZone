import { createSlice} from '@reduxjs/toolkit';
const appSlice = createSlice({
  name: 'app',
  initialState: {   
    issidebarOpen: true,
    video:[],
    category:'All',
    searchSuggestion:[],
  },
    reducers: {
    toggleSidebar: (state) => {
      state.issidebarOpen = !state.issidebarOpen;
    },
    closeSidebar: (state) => {
      state.issidebarOpen = false;
    },
    openSidebar: (state) => {
      state.issidebarOpen = true;
    },
    setHomeViedo:(state,action)=>{
      state.video=action.payload;
    },
    setCatgeory:(state,action)=>{
      state.category=action.payload;
    },
    setSearchSuggestion:(state,action)=>{
      state.searchSuggestion=action.payload
    }


  },
});

export const { toggleSidebar, closeSidebar, openSidebar,setCatgeory,setHomeViedo,setSearchSuggestion } = appSlice.actions;
export default appSlice.reducer;