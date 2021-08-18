import styles from './game.module.css';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Container from '../../components/container/container';

export default function Game() {
    const id = useParams().id;
    const [game, setGame] = useState({});

    useEffect(async () => {
        await axios.get(`http://localhost:4001/api/games/selected/${id}`).then((response) => {
            setGame(response.data);
        }).catch((err) => {

        })
    }, []);

    return (
        <Container>
            <div className={styles.pageContent}>
                <div className={styles.gameData}>
                    <img src={game.coverImage} className={styles.gameDataCoverImage} />
                </div>
                <div className={styles.gameDetailsAndReviews}>
                    <h1>{game.gameTitle}</h1>
                </div>
            </div>
        </Container>

    )
}
