import actionsTypes from './ActionsTypes';

const initialState = {
    users: [],
    usersByRegion: [],
    loading: false,
    error: '',
    regions: [],
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
    case actionsTypes.FETCH_USERS_BEGIN:
        return {
            ...state,
            loading: true,
        };

    case actionsTypes.FETCH_USERS_SUCCESS:
        return {
            ...state,
            loading: false,
            users: action.payload,
        };

    case actionsTypes.FETCH_USERS_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };

    case actionsTypes.FETCH_USERS_BY_REGION_BEGIN:
        return {
            ...state,
            loading: true,
        };

    case actionsTypes.FETCH_USERS_BY_REGION_SUCCESS:
        return {
            ...state,
            loading: false,
            usersByRegion: action.payload,
        };

    case actionsTypes.FETCH_USERS_BY_REGION_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };

    case actionsTypes.FETCH_REGIONS_BEGIN:
        return {
            ...state,
            loading: true,
        };

    case actionsTypes.FETCH_REGIONS_SUCCESS:
        return {
            ...state,
            loading: false,
            regions: action.payload,
        };

    case actionsTypes.FETCH_REGIONS_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };

    default: return { ...state };
    }
};

export default homeReducer;
