import styles from './home.module.css';
import Container from '../../components/container/container';
import CardMain from '../../components/cardmain/cardmain';

export default function Home() {
    return (
        <Container>
            <div className={styles.pageContent}>
                <h1>Jogos disponíveis</h1>
                <div className={styles.cardsContainer}>
                    <CardMain img={"https://img.hype.games/cdn/facad932-4082-4d20-980d-34bb385d2233Red-Dead-Redemption-2-Ultimate-Edition-Cover.jpg"} title={"Red Dead Redemption 2"} description={"Arthur Morgan e a gangue Van der Linde são bandidos em fuga. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou."} />
                    <CardMain img={"https://image.api.playstation.com/vulcan/img/rnd/202010/2619/gRnScYA4PLovtrbWGya54xnx.jpg"} title={"The last of us 2"} description={"Ambientado cinco anos após os eventos de The Last of Us (2013), o jogador assume o papel de duas protagonistas em um Estados Uni…"} />
                    <CardMain img={"https://img.olhardigital.com.br/wp-content/uploads/2021/05/gta-v-1024x540.jpg"} title={"Grand Theft Auto V"} description={"Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se envolvem com alguns dos criminosos mais assustadores e loucos do submundo, o governo dos EUA e a indústria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro"} />
                    <CardMain img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6BXlv0r6Lr8XfJgTMBsiFKXLF0kMkwubuGUBVyrDvZdfdPPw3cKdam8TcPOiUe6rsf0&usqp=CAU"} title={"Forza horizon 4"} description={"Estações dinâmicas mudam tudo no maior festival automotivo do mundo. Participe sozinho ou junte os amigos para explorar a linda e histórica Grã-Bretanha num mundo aberto compartilhado. Colete, modifique e pilote mais de 450 carros. Corra, faça proeza, crie e explore. Escolha seu caminho para se tornar um superastro do Horizon."} />
                </div>
            </div>
        </Container>
    )
}