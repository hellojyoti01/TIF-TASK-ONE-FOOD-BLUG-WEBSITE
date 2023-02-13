import styles from './App.module.css';
import Header from "./components/Header/Header";
import FooterView from "./components/Footer/FooterView";
import AboutArea from "./components/Main/AboutArea";
import LatestArticles from "./components/Main/LatestArticles";
import { BrowserRouter } from 'react-router-dom';

function App() {

    return (
        <section>
            <BrowserRouter>
                <header className={styles.Header}>
                <Header />
            </header>
             <main className={styles.Main}>
                <AboutArea />
                <LatestArticles />
            </main>
            <footer className={styles.Footer}>
                <FooterView />
                </footer> 
                </BrowserRouter>

        </section>
    );
}

export default App;
