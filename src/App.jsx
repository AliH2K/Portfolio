import Intro from './components/intro';
import Skills from './components/skills';
import Projects from './components/projects';
import GoTop from './components/goTop';
import './styles/intro.css';
import './styles/skills.css';
import './styles/projects.css';
import './styles/goTop.css';
import './styles/mediaqueries.css';

function App() {
  return (
    <>
      <Intro />
      <Skills />
      <Projects />
      <GoTop />
    </>
  );
}

export default App;
