import actionsTypes from './ActionsTypes';

const fetchUsersBegin = () => ({
    type: actionsTypes.FETCH_USERS_BEGIN,
});

const fetchUsersSuccess = (response) => ({
    type: actionsTypes.FETCH_USERS_SUCCESS,
    payload: response.data,
});

const fetchUsersError = (error) => ({
    type: actionsTypes.FETCH_USERS_ERROR,
    payload: error.message,
});

const fetchUsersByRegionBegin = () => ({
    type: actionsTypes.FETCH_USERS_BY_REGION_BEGIN,
});

const fetchUsersByRegionSuccess = (response) => ({
    type: actionsTypes.FETCH_USERS_BY_REGION_SUCCESS,
    payload: response.data,
});

const fetchUsersByRegionError = (error) => ({
    type: actionsTypes.FETCH_USERS_BY_REGION_ERROR,
    payload: error.message,
});

const fetchRegionBegin = () => ({
    type: actionsTypes.FETCH_REGIONS_BEGIN,
});

const fetchRegionSuccess = (response) => ({
    type: actionsTypes.FETCH_REGIONS_SUCCESS,
    payload: response.data,
});

const fetchRegionError = (error) => ({
    type: actionsTypes.FETCH_REGIONS_ERROR,
    payload: error.message,
});

const userActions = {
    fetchUsersBegin,
    fetchUsersSuccess,
    fetchUsersError,
    fetchUsersByRegionBegin,
    fetchUsersByRegionSuccess,
    fetchUsersByRegionError,
    fetchRegionBegin,
    fetchRegionSuccess,
    fetchRegionError,
};

export default userActions;
