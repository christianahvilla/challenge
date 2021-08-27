import { Grid } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppContext } from '../../../helpers/AppContext';
import AllUsers from '../Components/AllUsers';
import UsersByRegion from '../Components/UsersByRegion';

const Home = () => {
    const home = useSelector((state) => state.homeReducer);
    const {
        loading,
        error,
    } = home;

    const [_, setState] = useContext(AppContext);

    useEffect(() => {
        setState((currentState) => ({ ...currentState, openDialog: loading }));
    }, [loading]);

    useEffect(() => {
        if (error?.length) {
            setState((currentState) => ({
                ...currentState, openSnackbar: true, notificationMessage: error, notificationSeverity: 'error',
            }));
        }
    }, [error]);

    return (
        <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Grid container direction="column">
                    <AllUsers />
                    <UsersByRegion />
                </Grid>
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
};

export default Home;
