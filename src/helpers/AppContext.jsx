import React, { createContext, useState } from 'react';

const AppContext = createContext([{}, () => {}]);

const AppProvider = (props) => {
    const {
        children,
    } = props;

    const [state, setState] = useState({
        openDialog: false,
        openSnackbar: false,
        notificationMessage: '',
        notificationSeverity: '',
    });

    return (
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
