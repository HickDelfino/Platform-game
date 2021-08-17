import styles from './home.module.css';
import Container from '../../components/container/container';
import CardMain from '../../components/cardmain/cardmain';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../../components/contextProvider/contextProvider';
import ShowMoreButton from './showMoreButton/showMoreButton';
export default function Home() {

    const [amountShowing, setAmountShowing] = useState(20);
    const {contextCache, setContextCache} = useAppContext();

    useEffect(async ()=>{
        await axios.get(`http://localhost:4001/api/games/${amountShowing}`).then((response)=>{
            setContextCache({
                ...contextCache,
                gamesArray: response.data
            });  
        }).catch((err)=>{
            setContextCache({
                ...contextCache,
                gamesArray: []
            }); 
            console.log(err);
        })
    },[amountShowing, setAmountShowing]);

    return (
        <Container>
            <div className={styles.pageContent}>
                <h1>Jogos disponíveis</h1>
                <div className={styles.cardsContainer}>
                    
                    {
                        contextCache.gamesArray.map(game=>(
                            <CardMain gameData={game}  />
                        ))
                    }
                    
                </div>
                <ShowMoreButton onClick={()=>{setAmountShowing((amountShowing+20))}}>Mostrar mais</ShowMoreButton>
            </div>
        </Container>
    )
}