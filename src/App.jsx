import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './modules/Global/NavBar/NavBar';
import { AppProvider } from './helpers/AppContext';
import Routes from './helpers/Router';
import { store } from './helpers/Store';
import mainTheme from './helpers/Theme';
import Loader from './modules/Global/Loader/Loader';
import Notification from './modules/Global/Notification/Notification';

const App = () => (
    <Provider store={store}>
        <MuiThemeProvider theme={mainTheme}>
            <AppProvider>
                <BrowserRouter>
                    <NavBar />
                    <Loader />
                    <Notification />
                    <Routes />
                </BrowserRouter>
            </AppProvider>
        </MuiThemeProvider>
    </Provider>
);

export default App;
