/* eslint-disable no-console */
import { Grid } from '@material-ui/core';
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommonSelect from '../../../components/Select/Select';
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
        field: 'age', headerName: 'Age', type: 'number', width: 160,
    },
    {
        field: 'count', headerName: 'Count', type: 'number', width: 160,
    },
];

const UsersByRegion = () => {
    const [region, setRegion] = useState('');
    const classes = pagesStyles();
    const dispatch = useDispatch();
    const fetchRegionBegin = () => dispatch(userActions.fetchRegionBegin());
    const fetchRegionSuccess = (response) => dispatch(userActions.fetchRegionSuccess(response));
    const fetchRegionError = (error) => dispatch(userActions.fetchRegionError(error));
    const fetchUsersByRegionBegin = () => dispatch(userActions.fetchUsersByRegionBegin());
    const fetchUsersByRegionSuccess = (response) => dispatch(userActions.fetchUsersByRegionSuccess(response));
    const fetchUsersByRegionError = (error) => dispatch(userActions.fetchUsersByRegionError(error));
    const home = useSelector((state) => state.homeReducer);

    const {
        regions,
        usersByRegion,
    } = home;

    const handleRegion = (event) => {
        const { target: { value } } = event;
        setRegion(value);
    };

    const getRegions = () => getQueryPayload(endpoints.getRegions, params, fetchRegionBegin, fetchRegionSuccess, fetchRegionError);

    const getUsersByRegion = () => (
        getQueryPayload(endpoints.getUserByRegion(region), params, fetchUsersByRegionBegin, fetchUsersByRegionSuccess, fetchUsersByRegionError)
    );

    useEffect(() => {
        if (region?.length) getUsersByRegion();
    }, [region]);

    useEffect(() => getRegions(), []);

    return (
        <Grid>
            <Title text={`Age Demographic of Users With ${region}`} className={classes.title} />
            <CommonSelect
                items={regions}
                label="Region"
                handleChange={handleRegion}
                selected={region}
            />
            <CommonDataGrid columns={columns} rows={usersByRegion} className="marginBottom" />
        </Grid>
    );
};

export default UsersByRegion;
