import React, { useContext } from 'react';
import { Dialog } from '@material-ui/core';
import { AppContext } from '../../helpers/AppContext';

const CommonDialog = (props) => {
    const {
        paperProps,
        Component,
    } = props;

    const [state, _] = useContext(AppContext);
    const {
        openDialog,
    } = state;

    return (
        <Dialog open={openDialog} PaperProps={paperProps}>
            <Component />
        </Dialog>
    );
};

CommonDialog.defaultProps = {
    paperProps: {},
    component: React.Component,
};

export default CommonDialog;
