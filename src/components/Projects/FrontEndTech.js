import React from 'react'
import { SiCss3, SiHtml5, SiJavascript, SiReact } from 'react-icons/si';
import { iconStyle } from '../../aux';

function FrontEndTech() {
  return (
      <>
          <div className="skill">
              <SiHtml5 style={iconStyle} />
              <p>HTML5</p>
          </div>
          <div className="skill">
              <SiCss3 style={iconStyle} />
              <p>CSS3</p>
          </div>
          <div className="skill">
              <SiJavascript style={iconStyle} />
              <p>JavaScript</p>
          </div>
          <div className="skill">
              <SiReact style={iconStyle} />
              <p>React</p>
          </div>
      </>
  );
}

export default FrontEndTech