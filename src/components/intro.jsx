import TypedCode from './typedCode';
import img from '../resources/img.png';
import linkedin from '../resources/icons/linkedin.png';
import gmail from '../resources/icons/gmail.png';
import telegram from '../resources/icons/telegram.png';
import whatsapp from '../resources/icons/whatsapp.png';
import { Link } from 'react-scroll';
import { useState } from 'react';

function Intro() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section id="intro">
      <div className="introFlex">
        <img className="image" src={img} alt="" />
        <div className="introText">
          <h1 className="text">
            <TypedCode />
          </h1>
          <div className="introButtons">
            <Link to="skills" spy={true} smooth={true}>
              <button>Skills</button>
            </Link>
            <Link to="projects" spy={true} smooth={true}>
              <button className="projects">Projects</button>
            </Link>
          </div>
          <div className="contact">
            <a
              href="https://www.linkedin.com/in/ali-heidari-06a946235"
              target="_blank"
            >
              <img src={linkedin} alt="" />
            </a>
            <a>
              <img
                className="emailIco"
                onClick={(e) => {
                  setIsActive((current) => !current);
                }}
                src={gmail}
                alt=""
              />
              <p
                className={isActive ? 'email' : 'email hidden'}
                onClick={() => {
                  navigator.clipboard.writeText('aliheidari2k@gmail.com');
                }}
              >
                aliheidari2k@gmail.com
                <br />
                <span className="copy">Click to Copy</span>
              </p>
            </a>
            <a href="https://t.me/AliH2K" target="_blank">
              <img src={telegram} alt="" />
            </a>
            <a href="https://wa.me/989215422874" target="_blank">
              <img src={whatsapp} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="wave1"></div>
    </section>
  );
}

export default Intro;
