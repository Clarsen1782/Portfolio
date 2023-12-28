import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from '../assets/images/ChristinaLarsen.jpg';
import '../styles/style.css'


function AboutMe() {
  const LinkedIn = "https://www.linkedin.com/in/clarsen1782/";
  const GitHub = "https://github.com/Clarsen1782";
  const Email = "mailto:clarsen31782@gmail.com";
  const Resume = "https://docs.google.com/document/d/1NWsT0Gh7Tcckcdnea1Za0sWWXWo1uR8O81CUKk5oNlw/edit?usp=sharing";

  const cardStyle = {
    maxWidth: '2000px',
  };

  const imageStyle = {
    width: '100px',
    height: 'auto',
    padding: '15px'
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
              <h5 className="card-title" id='title'>Welcome to my portfolio!</h5>
              <br />
              <p>Hello, I am Christina Larsen, a dedicated professional with a rich background in sustainability and healthcare. The pandemic-induced shift to remote work sparked a newfound passion for web development within me. Now embarking on a new career path, I bring to the table a robust work ethic, strong ethical values, and an unwavering attention to detail.</p>

              <p>Considered a perpetual learner, I am committed to expanding my knowledge continually. My background in sustainability and healthcare not only adds a unique perspective to my journey in web development but also instills in me a deep sense of responsibility toward creating solutions that positively impact both users and the environment.</p>

              <p>As a results-driven, detail-oriented, full-stack programmer, I possess a solid academic foundation complemented by hands-on experience in healthcare and sustainability. Proficient in various facets of development, I excel in:</p>
              <ul>
                <li>Front-end: Utilizing HTML, CSS, and JavaScript, employing popular frameworks like React.js to craft responsive and user-friendly interfaces.</li>
                <li>Back-end: Demonstrating proficiency in server-side development using Node.js and Express, with a nuanced understanding of RESTful API design. My skills extend to working with both SQL (e.g., MYSQL) and NoSQL databases (e.g., MongoDB).</li>
                <li>Full-Stack: Seamlessly integrating front-end and back-end components to deliver cohesive, end-to-end solutions. I am comfortable working with version control systems such as Git for collaborative development.</li>
              </ul>

              <p>I am genuinely excited about contributing innovative ideas to a dynamic development team and making meaningful contributions to projects. My passion for continuous learning aligns with my dedication to growth, both as a full-stack developer and as an individual.</p>
            </div>
            <div className="card-body" id='links'>
              <a href={LinkedIn} target="_blank" rel="noopener noreferrer" style={imageStyle}>LinkedIn</a>
              <a href={GitHub} target="_blank" rel="noopener noreferrer" style={imageStyle}>GitHub</a>
              <a href={Email} target="_blank" rel="noopener noreferrer" style={imageStyle}>Email</a>
              <a href={Resume} target="_blank" rel="noopener noreferrer" style={imageStyle}>Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default AboutMe;
