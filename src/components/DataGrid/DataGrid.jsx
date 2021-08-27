import { Grid } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React from 'react';
import gridtStyle from './Style';

const CommonDataGrid = (props) => {
    const {
        columns,
        rows,
        className,
    } = props;

    const classes = gridtStyle();

    return (
        <Grid className={`${classes.grid} ${classes[className]}`}>
            <DataGrid columns={columns} rows={rows} />
        </Grid>
    );
};

CommonDataGrid.defaultProps = {
    columns: [],
    rows: [],
    className: '',
};

export default CommonDataGrid;
