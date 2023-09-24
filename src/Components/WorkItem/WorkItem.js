import React from 'react'
import { Link } from 'react-router-dom';

export const WorkItem = ({work, index}) => {
    const linkStyle = {
        textDecoration: 'none', 
        color: 'inherit',
      };

   
  return (
    <div className="workItem-container" key={index}>
        <Link to={work.slug} style={linkStyle}>
            <div className="workItem" >
                <div className="text">
                    <h2>{work.title}</h2>
                    <p>{work.subtitle}</p>
                </div>
                <img src={work.previewImage} alt='' />
            </div>
        </Link>
    </div>
  )
}
