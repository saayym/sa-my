import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Landing from './views/Landing';

export default function Home() {
    return (
        <>
            <header>
                <Navbar/>
            </header>

            <main>
                <Landing/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </>
    );
}
