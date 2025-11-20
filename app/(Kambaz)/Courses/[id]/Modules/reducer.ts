import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ModulesState {
  modules: any[];
}

const initialState: ModulesState = {
  modules: [], // Empty - will be populated from server
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    // Set modules from server response
    setModules: (state, action: PayloadAction<any[]>) => {
      state.modules = action.payload;
    },
    
    // Add a new module
    addModule: (state, action: PayloadAction<{ name: string; course: string }>) => {
      const newModule = {
        _id: uuidv4(),
        name: action.payload.name,
        course: action.payload.course,
        lessons: [],
      };
      state.modules = [...state.modules, newModule];
    },
    
    // Delete a module by ID
    deleteModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter(
        (module: any) => module._id !== action.payload
      );
    },
    
    // Update an existing module
    updateModule: (state, action: PayloadAction<any>) => {
      state.modules = state.modules.map((module: any) =>
        module._id === action.payload._id ? action.payload : module
      );
    },
    
    // Toggle edit mode for a module
    editModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.map((module: any) =>
        module._id === action.payload ? { ...module, editing: true } : module
      );
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;