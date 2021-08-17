import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        borderRadius: '2px',
        backgroundColor: 'white',
        color: 'blue',
        textTransform: 'none',
        width: '50%',
        margin: '5px',
        height: '45px',
        "&:hover": {
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid white'
        }
    }
})

export default function CardButton({ children, gameData }) {

    const classes = useStyles();

    return (
        <Button classes={classes}>
            {children}
        </Button>
    )
}