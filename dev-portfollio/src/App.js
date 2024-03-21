import './App.css';
import NavBar from './comps/NavBar';
import Screen1 from './comps/Screen1';
import Description from './comps/Description';
import Projects from './comps/Projects';
import Quotes from './comps/Quotes';
import Skills from './comps/Skills';
import SocialLinks from './comps/SocialLinks';
import Footer from './comps/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Screen1 />
      <Description />
      <Projects />
      <Skills />
      <Quotes />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
