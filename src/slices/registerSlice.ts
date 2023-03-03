import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IRegisterData {
  // createdAt: string
  title?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  gender?: string;
  dob?: string;
  idType?: string;
  nationality?: string;
  mobileNumber?: string;
  whatappNumber?: string;
  address?: string;
  landmark?: string;
  state?: string;
  lga?: string;
  lengthOfStay?: string;
  businessName?: string;
  whatYouSell?: string;
  businessAddress?: string;
  businessLandmark?: string;
  businessState?: string;
  businessLga?: string;
  businessLengthOfStay?: string;
  shopDescription?: string;
  bankName?: string;
  accountNumber?: string;
  idImage?: File[] | undefined;
  placeOfBusiness?: File[] | undefined;
}

const initialState: { register: IRegisterData | null } = {
  register: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegisterInfo(state, action: PayloadAction<IRegisterData>) {
      // localStorage.setItem('user', JSON.stringify(action.payload));
      state.register = { ...action.payload, ...state.register };
    },
    clearRegister(state) {
      // localStorage.setItem('user', JSON.stringify(action.payload));
      state.register = {};
    },
  },
});

export const { setRegisterInfo, clearRegister } = registerSlice.actions;
export default registerSlice.reducer;
