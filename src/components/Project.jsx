import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Project = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (expanded) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [expanded]);

  return (
      <div className="project-card">
        <div className={`projects ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h3>{project.name}</h3>
                {/* <p>{project.description}</p> */}
                <p>{`${project.stack[0]} | ${project.stack[1]} | ${project.stack[2]}`}</p>
              </div>
            </div>
            <div className="face face2">
              <div className="content" style={{ backgroundImage: `url(${project.images[0]})` }} />
            </div>
          </div>
        </div>
  
        {expanded && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleExpand}>&times;</span>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p>{project.stack.join(' | ')}</p>
              <div className="modal-image" style={{ backgroundImage: `url(${project.images[0]})` }} />
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            </div>
          </div>
        )}
      </div>
  );
};


Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default Project;
