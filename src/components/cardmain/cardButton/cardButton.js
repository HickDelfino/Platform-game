import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        borderRadius: '2px',
        backgroundColor: 'white',
        color: 'blue',
        textTransform: 'none',
        width: '100%',
        margin: '5px',
        height: '45px',
        "&:hover": {
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid white'
        }
    }
})

export default function CardButton({ children, gameData, href }) {

    const classes = useStyles();

    return (
        <Link to={href} style={{textDecoration: 'none', width: '45%', margin: "5px", marginLeft: '-5px', padding: 'none'}}>
            <Button classes={classes} href={href}>
                {children}
            </Button>
        </Link>
    )
}