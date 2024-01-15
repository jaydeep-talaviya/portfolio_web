
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../static/bg/color-sharp.png"
import React from 'react'
import Skillbar from "./Skillbar";
import Card from 'react-bootstrap/Card';
import skills from './skills_data';

function Skills() {
    const cardStyle = {
        backgroundColor: 'transparent',
        height: '100%'// Adjust the alpha value for transparency
      };

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      console.log(">>>>skills",skills)
  return (
     <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Experienced Python developer with a proficiency spanning three years, adept in both backend and frontend technologies, and well-versed in database management.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider my-3">
                            {skills.map((topics)=>{
                                   return (<Card className="item inner-div child" style={cardStyle}>
                                                <Card.Body>
                                                <Card.Title className='pb-4 skill-title'>
                                                <h4>{topics.topic_name}</h4></Card.Title>
                                                <div className="row">
                                                    {topics.topic_skill.map((skill)=>{
                                                        
                                                        return <Skillbar skill={skill.skill} percentage={skill.percentage} />
                                                    })}
                                            
                                                </div>
                                            </Card.Body>
                                        </Card>
                                   )
                            })}
                        
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills