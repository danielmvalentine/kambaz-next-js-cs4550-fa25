import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AssignmentsState {
  assignments: any[];
}

const initialState: AssignmentsState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action: PayloadAction<any[]>) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action: PayloadAction<any>) => {
      state.assignments = [...state.assignments, action.payload];
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action: PayloadAction<any>) => {
      state.assignments = state.assignments.map((assignment: any) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
  },
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;