import { Fragment } from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import Notification from '@components/Notification';

const NotificationContainer = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const notification = useSelector(
    (state: DefaultRootState) => state.ui.notification,
  );

  return (
    <Fragment>
      {notification && (
        <Notification
          onClick={() => dispatch({ type: 'resetNotification' })}
          {...notification}
        />
      )}
    </Fragment>
  );
};

export default NotificationContainer;
