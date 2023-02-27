import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IBvnData {
  // createdAt: string
  dateOfBirth: string;
  firstName: string;
  gender: string;
  lastName: string;
  middleName: string;
  phoneNo: string;
  bvn: string;
}

const initialState: { bvn: IBvnData | null } = {
  bvn: null,
};

const bvnSlice = createSlice({
  name: 'bvn',
  initialState,
  reducers: {
    setBvnDetails(state, action: PayloadAction<IBvnData>) {
      // localStorage.setItem('bvn', JSON.stringify(action.payload));
      state.bvn = action.payload;
    },
  },
});

export const { setBvnDetails } = bvnSlice.actions;
export default bvnSlice.reducer;
