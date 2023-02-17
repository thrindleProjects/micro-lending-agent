import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IGroupData {
  // createdAt: string
  id: string;
  userId: string;
  groupID: string;
  name: string;
  status: string;
  totalMembers: number;
}

const initialState: { group: IGroupData | null } = {
  group: null,
};

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    setGroupInfo(state, action: PayloadAction<IGroupData>) {
      // localStorage.setItem('user', JSON.stringify(action.payload));
      state.group = action.payload;
    },
  },
});

export const { setGroupInfo } = groupSlice.actions;
export default groupSlice.reducer;
