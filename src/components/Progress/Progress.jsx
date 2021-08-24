import React from 'react';
import { CircularProgress } from '@material-ui/core';

const CommonProgress = (props) => {
    const {
        color,
        size,
    } = props;

    return (
        <CircularProgress color={color} size={size} />
    );
};

CommonProgress.defaultProps = {
    color: '',
    size: 0,
};

export default CommonProgress;
