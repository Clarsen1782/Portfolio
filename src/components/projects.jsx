
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Donutz from '../assets/images/GoNutzDonutz.png';
import Gaming from '../assets/images/PlayJoin.png';
import Editor from '../assets/images/Jate.png';
import Password from '../assets/images/PassGen.png';
import Wealth from '../assets/images/WealthBuilder.png';
import Logo from '../assets/images/LogoGen.png';

function Portfolio() {
  const data = [
   {
      title: "Wealth Builder",
      image: Wealth,
      link: "https://wealth-builder-d2d82a6766d2.herokuapp.com/",
      github: "https://github.com/nba251522/Wealth-Builder.git"
    },
    {
      title: "play.join() Gaming Connection",
      image: Gaming,
      link: "https://play-join-6cebcc414827.herokuapp.com/",
      github: "https://github.com/Clarsen1782/play.join.git"
    },
    {
      title: "J.A.T.E Text Editor",
      image: Editor,
      link: "https://pwa-c19-05f17cf9ac73.herokuapp.com/",
      github: "https://github.com/Clarsen1782/pwa-c19.git"
    },
     {
      title: "Go Nutz Donutz",
      image: Donutz,
      link: "https://flimits.github.io/gonutzfordonutz/",
      github: "https://github.com/flimits/gonutzfordonutz.git"
    },
    {
      title: "Password Generator",
      image: Password,
      link: "https://clarsen1782.github.io/password-c2/",
      github: "https://github.com/Clarsen1782/password-c2.git"
    },
    {
      title: "Simple Logo Generator with SVG",
      image: Logo,
      link: "https://drive.google.com/file/d/1OTfqMQZ_uwjDE1f3j-wkAyLt2dpVR5Tf/view?pli=1",
      github: "https://github.com/Clarsen1782/logos-c10.git"
    }
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card style={{ backgroundColor: '#6a5acd' }}>
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body id='text'>
                <Card.Title style={{ color: 'White' }}>{project.title}</Card.Title>
                <Button variant="info" href={project.link} target="_blank" rel="noopener noreferrer">View Project</Button>
                <Button variant="success" className="ml-2" href={project.github} target="_blank" rel="noopener noreferrer"> View GitHub</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
