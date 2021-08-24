import React from 'react';
import CommonText from '../../../components/Text/Text';

const Title = (props) => {
    const {
        text,
        variant,
        className,
    } = props;

    return (
        <CommonText className={className} text={text} variant={variant} />
    );
};

Title.defaultProps = {
    text: '',
    variant: 'h4',
    className: '',
};

export default Title;
