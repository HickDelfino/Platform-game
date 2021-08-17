import styles from "./menu.module.css";
import MenuButton from "./menuButton/menuButton";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Speech from 'react-speech';
import { useState } from 'react';
import MenuButtonsList from "./menuButtonsList/menuButtonsList";

export default function Menu() {

    const [isRecording, setIsRecording] = useState(false);
    const [searchString, setSearchString] = useState("");

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        console.log("Browser do not support speech recognition")
    }

    return (
        <nav className={styles.navbar}>
            <img className={styles.navlogo} src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" width="190" />
            
            <div className={styles.mobileMenu}>
                <button className={styles.mobileMenuIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className={styles.searchBar}>
                <input value={searchString} onChange={(event) => { setSearchString(event.target.value) }} placeHolder="digite sua pesquisa" />
                <button className={styles.searchBarIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} className={'h-6 w-6'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <button className={styles.searchBarIcon} onClick={() => {
                    if (!isRecording) {
                        setIsRecording(true);
                        return SpeechRecognition.startListening();
                    }
                    setIsRecording(false);
                    SpeechRecognition.stopListening();
                    return setSearchString(transcript);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} className={'h-5 w-5'} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            <MenuButtonsList/>
            
        </nav>
    )
}