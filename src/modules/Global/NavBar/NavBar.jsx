import React from 'react';
import {
    AppBar, Toolbar,
} from '@material-ui/core';
import navBarStyle from './Style';
import CommonText from '../../../components/Text/Text';

const NavBar = () => {
    const classes = navBarStyle();

    return (
        <AppBar position="static">
            <Toolbar>
                <CommonText variant="h6" className={classes.title} text="WalMex" />
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
