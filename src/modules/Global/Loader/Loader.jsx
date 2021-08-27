import React from 'react';
import CommonDialog from '../../../components/Dialog/Dialog';
import CommonProgress from '../../../components/Progress/Progress';

const defaultColor = 'primary';
const defaultSize = 120;
const defaultPaperProps = {
    style: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        overflow: 'hidden',
    },
};

const Loader = (props) => {
    const {
        size,
        color,
        paperProps,
    } = props;

    const Spinner = () => <CommonProgress size={size} color={color} />;

    return (
        <CommonDialog paperProps={paperProps} Component={Spinner} />
    );
};

Loader.defaultProps = {
    size: defaultSize,
    color: defaultColor,
    paperProps: defaultPaperProps,
};

export default Loader;
