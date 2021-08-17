import { Link } from 'react-router-dom';
import { Button , makeStyles} from '@material-ui/core';
import styles from './menuButton.module.css';

const useStyles = makeStyles({
    root: {
        borderRadius: '2px',
        backgroundColor: '#0044ff',
        color: 'white',
        textTransform: 'none',
        margin: '0',
        height: '45px',
        whiteSpace: 'nowrap',
        "&:hover": {
            backgroundColor: 'white',
            color: 'blue',
            boxShadow: '0 0 120px white'
        }
    }
})

export default function MenuButton({ href, children }) {
    const classes = useStyles();
    return (
        <Link to={href} className={styles.linkStyle}>
            <Button classes={classes}>{children}</Button>
        </Link>
    )
}