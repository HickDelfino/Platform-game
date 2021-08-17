import styles from './game.module.css';
import { useParams } from 'react-router';

export default function Game(){

    const params = useParams().id; //Pega o parametro id da URL definido no App.js

    return (
        <div style={{marginTop: '100px'}}>
            ID: {params}
        </div>
    )
}

// https://www.youtube.com/watch?v=y_pr4lRoUto