
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';

function Blog() {
  const data = [
    {
      title: "Materialize",
      date: '2023-10-17',
      link: "https://medium.com/@clarsen1782/materialize-89be591a6e3a",
    },
    {
      title: "Fake Code also known as Pseudocode",
      date: '2023-11-15',
      link: "https://medium.com/@clarsen1782/fake-code-also-known-as-pseudocode-d473872c6174",
    },
    {
      title: "The Fun of Impostor Syndrome",
      date: '2024-1-6',
      link: "https://medium.com/@clarsen1782/the-fun-of-impostor-syndrome-64dc19a56761",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>My Blog - Latest Articles</title>
      </Helmet>
      <div className="container mt-4 text-center">
        <h1 style={{ color: 'white' }}>Welcome to My Blog</h1>
        <br />
        <h5 style={{ color: 'white' }}>I am in the process of transitioning my blogs to my portfolio. In the meantime, you can check out my articles on{' '} <Link to="https://medium.com/@clarsen1782" target="_blank" rel="noopener noreferrer"> Medium.com</Link>{' '}using the following links:</h5>
        <br />
        <div className="row justify-content-center">
          {data.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Card style={{ backgroundColor: '#6a5acd' }}>
                <Card.Body id='text'>
                  <Card.Title style={{ color: 'white' }}>{project.title}</Card.Title>
                  <Card.Text style={{ color: 'white' }}>{project.date}</Card.Text>
                  <Button variant="info" href={project.link} target="_blank" rel="noopener noreferrer">Read Blog</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
