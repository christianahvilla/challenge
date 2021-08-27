import React from 'react';
import {
    FormControl, InputLabel, MenuItem, Select,
} from '@material-ui/core';
import selectStyle from './Style';

const CommonSelect = (props) => {
    const classes = selectStyle();
    const {
        items,
        handleChange,
        label,
        selected,
    } = props;

    const getItems = () => {
        return items.map((value) => {
            return <MenuItem key={`${value}`} value={value}>{value}</MenuItem>;
        });
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="select">{label}</InputLabel>
            <Select
                labelId="select-label"
                id="select-id"
                value={selected}
                onChange={handleChange}
                label={label}
            >
                <MenuItem value="">
                    <em>Ninguno</em>
                </MenuItem>
                {getItems()}
            </Select>
        </FormControl>
    );
};

CommonSelect.defaultProps = {
    items: [],
    label: '',
    selected: '',
    handleChange: () => {},
};

export default CommonSelect;
