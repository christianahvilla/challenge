import React from 'react';
import CommonAlert from '../../../components/Alert/Alert';
import CommonSnackbar from '../../../components/Snackbar/Snackbar';

const defaultAnchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
};

const Notification = (props) => {
    const {
        anchorOrigin,
    } = props;
    const Alert = () => <CommonAlert />;

    return (
        <CommonSnackbar Component={Alert} anchorOrigin={{ ...anchorOrigin }} />
    );
};

Notification.defaultProps = {
    anchorOrigin: defaultAnchorOrigin,
};

export default Notification;
