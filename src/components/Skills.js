import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import logo from '../assets/img/react1.svg';
import javascriptlogo from '../assets/img/icons8-javascript-logo.svg';
import mongodblogo from '../assets/img/icons8-mongodb-96.png';
import nodejslogo from '../assets/img/icons8-nodejs-96.png';
import tailwindcsslogo from '../assets/img/icons8-tailwindcss-96.png';
import bootsraplogo from '../assets/img/icons8-bootstrap-144.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Each project is briefly described with
          links to code repositories. <br></br> It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
          <br></br>Languages: C++ | Python | JavaScript 
          <br></br>Algorithmic Problem Solving (solved 500++ problems on various online platforms)
          <br></br>Data Structures and Algorithms</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={javascriptlogo} alt="Image" />
                                <h5>javascript</h5>
                            </div>
                            <div className="item">
                                <img src={logo} alt="Image" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={mongodblogo} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={nodejslogo} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={tailwindcsslogo} alt="Image" />
                                <h5>Tailwindcss</h5>
                            </div>
                            <div className="item">
                                <img src={bootsraplogo} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
