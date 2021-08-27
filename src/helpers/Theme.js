import { createTheme } from '@material-ui/core/styles';

const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#017ADB',
            light: '#188FF1',
            dark: '#004F8F',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FFA821',
            light: '#FFB03B',
            dark: '#B3700C',
            contrastText: '#212B36',
        },
    },
});

export default mainTheme;
