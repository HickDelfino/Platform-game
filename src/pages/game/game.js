import styles from './game.module.css';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Container from '../../components/container/container';
import ReviewCard from '../../components/reviewCard/reviewCard';
import { Doughnut } from 'react-chartjs-2';
import ImageSlider from '../../components/imageSlider/imageSlider';
import Speech from 'react-speech';
import { withTheme } from '@material-ui/core';

export default function Game() {
    const id = useParams().id;
    const [game, setGame] = useState({});
    const [reviews, setReviews] = useState([])

    useEffect(async () => {
        await axios.get(`http://localhost:4001/api/games/selected/${id}`).then((response) => {
            setGame(response.data);
            setReviews(response.data.reviews);
        }).catch((err) => {
            console.log(err)
        })
    }, []);

    return (
        <Container>
            <div className={styles.pageContent}>

                <div className={styles.gameData}>
                    <img src={game.coverImage} className={styles.gameDataCoverImage} />
                    <div className={styles.gameScores}>
                        
                        <h1 className={styles.gameAverage}>{game.average}</h1>
                        <Doughnut width={25} height={25} data={{
                            labels: ['average'],
                            datasets: [
                                {
                                    label: 'average',
                                    backgroundColor: ['#ffff00', 'transparent'],
                                    data: [game.average, (10 - (game.average))],
                                    borderColor: ['transparent']
                                }
                            ]
                        }} options={{
                            plugins:{
                                legend:{
                                    display: false
                                }
                            }
                        }} />

                    </div>
                </div>

                <div className={styles.gameDetailsAndReviews}>

                    <ImageSlider slides={game.images} />

                    <div className={styles.details}>
                        <h1>{game.gameTitle}</h1>
                        <p>{game.description}</p>

                        <Speech className={styles.speechButton} text={game.description} />

                    </div>
                    <div className={styles.reviews}>
                        {
                            reviews.map(review => (
                                <ReviewCard review={review} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </Container>

    )
}
