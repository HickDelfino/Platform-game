import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        borderRadius: '2px',
        backgroundColor: 'white',
        color: 'blue',
        textTransform: 'none',
        width: '100%',
        marginTop: '15px',
        marginBottom: '15px',
        height: '50px',
        "&:hover": {
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid white'
        }
    }
})

export default function ShowMoreButton({children, onClick}){
    const classes = useStyles();

    return(
        <Button onClick={onClick} classes={classes}>{children}</Button>
    )
}