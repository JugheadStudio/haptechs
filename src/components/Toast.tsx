import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { Snackbar, Alert } from '@mui/material';
import { removeNotification } from '@/store/notificationSlice';

const Toast: React.FC = () => {
  const notifications = useSelector((state: RootState) => state.notifications.notifications);
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = (id: number) => {
    dispatch(removeNotification(id));
  };

  return (
    <>
      {notifications.map((notification) => (
        <Snackbar
          key={notification.id}
          open={true}
          autoHideDuration={3000}
          onClose={() => handleClose(notification.id)}
        >
          <Alert
            severity={notification.type}
            onClose={() => handleClose(notification.id)}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
};

export default Toast;
