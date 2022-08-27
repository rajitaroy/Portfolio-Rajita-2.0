import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

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
                        <p>A snippet of what I know<br></br>But there is so much more to learn</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h1>Golang</h1>
                                <h5>Backend</h5>
                            </div>
                            <div className="item">
                                <h1>MERN</h1>
                                <h5>Strongest Stack</h5>
                            </div>
                            <div className="item">
                                <h1>Python</h1>
                                <h5>Backend</h5>
                            </div>
                            <div className="item">
                                <h1>Java</h1>
                                <h5>Backend</h5>
                            </div>
                            <div className="item">
                                <h1>C++</h1>
                                <h5>Backend</h5>
                            </div>
                            <div className="item">
                            
                                <h1>PHP</h1>
                                <h5>Backend</h5>
                            </div>
                            
                            <div className="item">
                            
                                <h1>MySQL</h1>
                                <h5>Database</h5>
                            </div>
                            <div className="item">
                            
                                <h1>MongoDB</h1>
                                <h5>Database</h5>
                            </div>
                            <div className="item">
                            
                            <h1>PostgreSQL</h1>
                            <h5>Database</h5>
                        </div>
                            <div className="item">
                            
                                <h1>Javascript</h1>
                                <h5>Frontend</h5>
                            </div>
                            <div className="item">
                            
                                <h1>ReactJS</h1>
                                <h5>Frontend</h5>
                            </div>
                            <div className="item">
                            
                                <h1>HTML & CSS</h1>
                                <h5>Frontend</h5>
                            </div>
                            <div className="item">
                            
                                <h1>Django</h1>
                                <h5>Backend framework</h5>
                            </div>
                            <div className="item">
                            
                                <h1>AngularJS</h1>
                                <h5>Frontend framework</h5>
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
