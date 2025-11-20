import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  courses: [] as any[],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<any[]>) => {
      state.courses = action.payload;
    },
    addNewCourse: (state, action: PayloadAction<any>) => {
      state.courses = [...state.courses, action.payload];
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter(
        (course: any) => course._id !== action.payload
      );
    },
    updateCourse: (state, action: PayloadAction<any>) => {
      state.courses = state.courses.map((course: any) =>
        course._id === action.payload._id ? action.payload : course
      );
    },
  },
});

export const { addNewCourse, deleteCourse, updateCourse, setCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;