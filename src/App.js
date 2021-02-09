import './App.css';
import Custom from './components/Custom';
import Footer from './components/Footer';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Platforms from './components/Platforms';
import Projects from './components/Projects';
import Team from './components/Team';

function App() {
  return (
    <div className="app">
    <Header />
    <Jumbo />
    <Platforms />
    <Projects />
    <Team />
    <Custom />
    <Footer />
    </div>
  );
}

export default App;
