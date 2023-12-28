import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HBackground from '../assets/images/Hbackground.png'

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

    return (
        <Card className="text-center" style={Background}>
            <Card.Header>Welcome to My Portfolio</Card.Header>
            <Card.Body>
                <Card.Title><h1>Christina Larsen</h1></Card.Title>
                <br></br>
                <Button variant="secondary" href={LinkedIn} target="_blank">LinkedIn</Button>
                <Button variant="secondary" href={GitHub} target="_blank">GitHub</Button>
                <Button variant="secondary" href={Email} target="_blank">Email</Button>
                <Button variant="secondary" href={Resume} target="_blank">Resume</Button>
            </Card.Body>
            <Card.Footer>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="/">About Me</Nav.Link>
                            <Nav.Link href="/Projects">Projects</Nav.Link>
                            <Nav.Link href="/Contact">Contact Me</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Card.Footer>
        </Card>
    );
}

export default Header;