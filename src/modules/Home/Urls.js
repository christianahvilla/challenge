const API_URL = `${process.env.REACT_APP_API_URL}`;

const endpoints = {
    getUsers: `${API_URL}/users`,

    getRegions: `${API_URL}/regions`,

    getUserByRegion: (region) => `${API_URL}/users/age${region ? `?region=${region}` : ''}`,
};

export default endpoints;
