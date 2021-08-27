import { Snackbar } from '@material-ui/core';
import React, { useContext } from 'react';
import { AppContext } from '../../helpers/AppContext';

const CommonSnackbar = (props) => {
    const {
        autoHideDuration,
        Component,
        anchorOrigin,
    } = props;

    const [state, _] = useContext(AppContext);
    const {
        openSnackbar,
    } = state;

    return (
        <Snackbar open={openSnackbar} anchorOrigin={anchorOrigin} autoHideDuration={autoHideDuration}>
            <Component />
        </Snackbar>
    );
};

CommonSnackbar.defaultProps = {
    autoHideDuration: 6000,
    Component: React.Component,
    anchorOrigin: {},
};

export default CommonSnackbar;
