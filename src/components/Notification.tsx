import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeNotification } from '../store/notificationSlice';
import { Alert, Snackbar } from '@mui/material';

const Notification: React.FC = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.notifications.notifications);

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

export default Notification;
