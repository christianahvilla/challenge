import { makeStyles } from '@material-ui/core/styles';

const selectStyle = makeStyles((theme) => ({
    formControl: {
        margin: '10px 0',
        [theme.breakpoints.down('sm')]: {
            width: 160,
        },
        [theme.breakpoints.up('md')]: {
            width: 320,
        },
        [theme.breakpoints.up('lg')]: {
            width: 400,
        },
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default selectStyle;
