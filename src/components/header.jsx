import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import '../styles/style.css'

function Header() {
    const LinkedIn = "https://www.linkedin.com/in/clarsen1782/";
    const GitHub = "https://github.com/Clarsen1782";
    const Email = "mailto:clarsen31782@gmail.com";
    const Resume = "https://docs.google.com/document/d/1NWsT0Gh7Tcckcdnea1Za0sWWXWo1uR8O81CUKk5oNlw/edit?usp=sharing";

    return (
        <Card className="text-center back2">
            <Card.Body>
                <Card.Title id='heading'>Christina Larsen</Card.Title>
                <br></br>
                <Button variant="secondary" href={LinkedIn} target="_blank">LinkedIn</Button>
                <Button variant="secondary" href={GitHub} target="_blank">GitHub</Button>
                <Button variant="secondary" href={Email} target="_blank">Email</Button>
                <Button variant="secondary" href={Resume} target="_blank">Resume</Button>
            </Card.Body>
            <Card.Footer>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/" style={{ color: 'white' }}>About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Projects" style={{ color: 'white' }}>Projects</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Footer>
        </Card>
    );
}

export default Header;