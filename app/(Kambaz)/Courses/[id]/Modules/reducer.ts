import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ModulesState {
  modules: any[];
}

const initialState: ModulesState = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<any[]>) => {
      state.modules = action.payload;
    },
    addModule: (state, action: PayloadAction<{ name: string; course: string }>) => {
      const newModule = {
        _id: uuidv4(),
        name: action.payload.name,
        course: action.payload.course,
        lessons: [],
      };
      state.modules = [...state.modules, newModule];
    },
    deleteModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter(
        (module: any) => module._id !== action.payload
      );
    },
    updateModule: (state, action: PayloadAction<any>) => {
      state.modules = state.modules.map((module: any) =>
        module._id === action.payload._id ? action.payload : module
      );
    },
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