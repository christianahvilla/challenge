import React, { useContext } from 'react';
import Alert from '@material-ui/lab/Alert';
import { AppContext } from '../../helpers/AppContext';

const CommonAlert = () => {
    const [state, setState] = useContext(AppContext);
    const {
        notificationMessage,
        notificationSeverity,
    } = state;

    const handleClose = () => setState((currentState) => ({ ...currentState, openSnackbar: false }));

    return (
        <Alert elevation={6} variant="filled" severity={notificationSeverity} onClose={handleClose}>
            {notificationMessage}
        </Alert>
    );
};

export default CommonAlert;
