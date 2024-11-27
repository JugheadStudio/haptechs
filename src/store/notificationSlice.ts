import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Notification = {
  id: number;
  type: 'success' | 'error';
  message: string;
};

interface NotificationState {
  notifications: Notification[];
  loading: boolean;
}

const initialState: NotificationState = {
  notifications: [],
  loading: false,
};

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<number>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { addNotification, removeNotification, setLoading } =
  notificationSlice.actions;

export default notificationSlice.reducer;
