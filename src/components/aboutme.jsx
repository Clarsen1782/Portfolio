import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from '../assets/images/ChristinaLarsen.jpg';
import '../styles/style.css'


function AboutMe() {
  const emailAddress = 'clarsen31782@gmail.com';
  const cardStyle = {
    maxWidth: '2000px',
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card mb-3" style={cardStyle}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={Profile} className="img-fluid rounded-start" alt="Christina Larsen - Profile" />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h5 className="card-title" id='title'>Hello and Welcome</h5>
              <br></br>
              <p className="card-text" id='text'>
                Hello, I'm Christina Larsen. After six years in sustainability, the shift to remote
                work during the pandemic sparked my interest in web development. Now in a new career,
                I bring a strong work ethic, ethics, and attention to detail. I see myself as a
                perpetual learner, always expanding my knowledge. My background in sustainability adds
                a unique perspective to my journey in web development. I'm dedicated to staying
                current with industry trends through continuous learning and networking. If you have
                insights or advice, I'm eager to hear and thrive in this evolving role.
              </p>
            </div>
            <div className="card-body" id='links'>
              <a href={`mailto:${emailAddress}`} className="card-link">Email</a>
              <a href="https://www.linkedin.com/in/christina-larsen-471b321b0" className="card-link" target="_blank" rel="noopener noreferrer">Linkedin</a>
              <a href="https://github.com/Clarsen1782" className="card-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://docs.google.com/document/d/1OaxAfNfqoUiVEx-UJdeI7Zs51b0iVrcWvIaitZ6MsVE/edit?usp=sharing" className="card-link" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default AboutMe;
