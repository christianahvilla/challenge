import React from 'react';
import { Typography } from '@material-ui/core';

const CommonText = (props) => {
    const {
        text,
        variant,
        className,
    } = props;

    return (
        <Typography
            className={className}
            gutterBottom
            variant={variant}
            noWrap
        >
            {text}
        </Typography>
    );
};

CommonText.defaultProps = {
    text: '',
    variant: '',
    className: '',
};

export default CommonText;
