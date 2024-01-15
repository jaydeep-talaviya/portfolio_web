import React, { useState } from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import GradientSVG from './GradientSVG';

const ProgressBarPopup = ({ percentage, idCSS }) => (
  <div className="progress-bar-popup">
    <GradientSVG />
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={{
        path: { stroke: `url(#${idCSS})`, height: '100%' },
        trail: {
          stroke: '#2e2e2e',
        },
      }}
    />
  </div>
);

const Skillbar = ({ skill, percentage }) => {
  const idCSS = 'hello';


  const renderTooltip = (props) => (
    <Tooltip id="overlay-example" {...props} className="mytooltip">
      <Card>
        <Card.Body>
          <ProgressBarPopup percentage={percentage} idCSS={idCSS} />
        </Card.Body>
      </Card>
    </Tooltip>
  );

  return (
    <div
      className="skillbar col-12 col-md-6 "
     
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <div style={{ display: 'inline-block' }}>
        <h5 >
          {skill !== '' &&
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cursor" viewBox="0 0 16 16">
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52z"/>
          </svg>
        </span>
        }
        <span className='ml-2'>
         {skill}
        </span>
      </h5> 
        </div>
      </OverlayTrigger>
    </div>
  );
};

export default Skillbar;
