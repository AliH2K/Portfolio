import html from '../resources/icons/html.png';
import css from '../resources/icons/css.png';
import js from '../resources/icons/js.png';
import bootstrap from '../resources/icons/bootstrap.png';
import react from '../resources/icons/react.png';
import query from '../resources/icons/query.png';
import github from '../resources/icons/github.png';
import webpack from '../resources/icons/webpack.png';
import wordpress from '../resources/icons/wordpress.png';
import Scroll from './scroll';

function Skills() {
  Scroll();
  return (
    <section id="skills">
      <div className="wave2"></div>
      <div className="skillsFlex">
        <div className="skill scroll scrollH">
          <h1>Languages</h1>
          <div className="skillContent">
            <p>
              <img src={html} alt="" /> HTML
            </p>
            <p>
              <img src={css} alt="" /> CSS
            </p>
            <p>
              <img src={js} alt="" /> JavaScript
            </p>
          </div>
        </div>
        <div className="skill scroll scrollH">
          <h1>Frameworks</h1>
          <div className="skillContent">
            <p>
              <img src={bootstrap} alt="" /> Bootstrap
            </p>
            <p>
              <img src={react} alt="" /> React.js
            </p>
            <p>
              <img src={query} alt="" /> React Query
            </p>
          </div>
        </div>
        <div className="skill scroll scrollH">
          <h1>Miscellaneous</h1>
          <div className="skillContent">
            <p>
              <img src={github} alt="" /> Github
            </p>
            <p>
              <img src={webpack} alt="" /> Webpack
            </p>
            <p>
              <img src={wordpress} alt="" /> Wordpress
            </p>
          </div>
        </div>
      </div>
      <div className="waveBottom"></div>
    </section>
  );
}

export default Skills;
