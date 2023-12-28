
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import HBackground from '../assets/images/Background.png'
import Lin from '../assets/images/LinkedIn.png';
import Git from '../assets/images/GitHub.png';
import Ema from '../assets/images/Email.png';
import Res from '../assets/images/Resume.png';
import '../styles/style.css'

function Header() {
    const LinkedIn = "https://www.linkedin.com/in/clarsen1782/";
    const GitHub = "https://github.com/Clarsen1782";
    const Email = "mailto:clarsen31782@gmail.com";
    const Resume = "https://docs.google.com/document/d/1NWsT0Gh7Tcckcdnea1Za0sWWXWo1uR8O81CUKk5oNlw/edit?usp=sharing";

    const Background = {
        backgroundImage: `url(${HBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const imageStyle = {
        width: '100px',
        height: 'auto',
        padding: '15px'
    };

    return (
        <Card className="text-center back2" style={Background}>
            <Card.Body>
                <Card.Title id='heading'>Christina Larsen</Card.Title>
                <br></br>
                <a href={LinkedIn} target="_blank" rel="noopener noreferrer"><img src={Lin} title="LinkedIn Profile" style={imageStyle} /></a>
                <a href={GitHub} target="_blank" rel="noopener noreferrer"><img src={Git} title="GitHub Profile" style={imageStyle} /></a>
                <a href={Email} target="_blank" rel="noopener noreferrer"><img src={Ema} title="Email" style={imageStyle} /></a>
                <a href={Resume} target="_blank" rel="noopener noreferrer"><img src={Res} title="Downloadable Resume" style={imageStyle} /></a>
            </Card.Body>
            <Card.Footer>
                <Nav className="justify-content-center" activeKey="/">
                    <Nav.Item>
                        <Nav.Link href="/" active>About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Projects">Projects</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Footer>

        </Card>
    );
}

export default Header;