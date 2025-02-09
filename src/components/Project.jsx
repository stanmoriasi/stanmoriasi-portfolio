import PropTypes from 'prop-types';
import { useState } from 'react';

const Project = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`projects ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>

<div className="card" key="{Math.random()}">
		<div className="face face1">
			<div className="content">
				{/* <i className="{`bi" ${pj.icon}`} /> */}
				<h3>{project.name}</h3>
				<p>{project.description}</p>
				<p>{`${project.stack[0]} | ${project.stack[1]} | ${project.stack[2]}`}</p>
			</div>
		</div>
		<div className="face face2">
			<div className="content" style={{ backgroundImage: `url(${project.images[0]})`
			}} />
			{/* <Popup name="{pj.shortname}" /> */}
		</div>
	</div>

    </div>
  );
};


Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default Project;
