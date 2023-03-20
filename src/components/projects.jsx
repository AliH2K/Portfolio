import weather from '../resources/gifs/weatherapp.gif';
import overclocked from '../resources/gifs/overclocked.gif';
import Scroll from './scroll';

function Projects() {
  Scroll();
  return (
    <section id="projects">
      <div className="projectsContainer">
        <div className="project weather scroll scrollH">
          <div>
            <h1>Weather App</h1>
            <a href="https://alih2k.github.io/WeatherApp/" target="_blank">
              <button>Visit</button>
            </a>
            <a href="https://github.com/AliH2K/WeatherApp" target="_blank">
              <button id="source">Source Code</button>
            </a>
            <p>
              A simple weather app created with React using open weather map
              API.
            </p>
          </div>
          <img src={weather} alt="" />
        </div>
        <div className="project store scroll scrollH">
          <img src={overclocked} alt="" />
          <div>
            <h1>Overclocked PC Store</h1>
            <a href="https://alih2k.github.io/PCshop/" target="_blank">
              <button>Visit</button>
            </a>
            <a href="https://github.com/alih2k/pcshop" target="_blank">
              <button id="source">Source Code</button>
            </a>
            <p>
              A PC store with add to cart functionallity created with React.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
