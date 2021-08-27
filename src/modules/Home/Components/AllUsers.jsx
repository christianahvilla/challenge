/* eslint-disable no-console */
import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from './Title';
import pagesStyles from './Styles';
import CommonDataGrid from '../../../components/DataGrid/DataGrid';
import userActions from '../Actions';
import { getQueryPayload } from '../../../helpers/Api';
import endpoints from '../Urls';

const params = {
    headers: {
        Accept: 'application/json',
    },
};

const columns = [
    {
        field: 'name', headerName: 'Name', width: 160,
    },
    {
        field: 'age', headerName: 'Age', type: 'number', width: 160,
    },
];

const AllUsers = () => {
    const classes = pagesStyles();
    const dispatch = useDispatch();
    const fetchUsersBegin = () => dispatch(userActions.fetchUsersBegin());
    const fetchUsersSuccess = (response) => dispatch(userActions.fetchUsersSuccess(response));
    const fetchUsersError = (error) => dispatch(userActions.fetchUsersError(error));
    const home = useSelector((state) => state.homeReducer);

    const {
        users,
    } = home;

    const getUsers = () => getQueryPayload(endpoints.getUsers, params, fetchUsersBegin, fetchUsersSuccess, fetchUsersError);

    useEffect(() => getUsers(), []);

    return (
        <Grid>
            <Title text="All Users" className={classes.title} />
            <Title text="Users and their age" variant="subtitle1" className={classes.subTitle} />
            <CommonDataGrid columns={columns} rows={users} />
        </Grid>
    );
};

export default AllUsers;
