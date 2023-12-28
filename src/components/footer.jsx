
import Card from 'react-bootstrap/Card';
import HBackground from '../assets/images/Background.png'
import '../styles/style.css'

function Footer() {
    const MIT = "https://opensource.org/licenses/MIT"

    const Background = {
        backgroundImage: `url(${HBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <Card className="text-center foot" style={Background}>
            <Card.Body style={{ color: 'white' }}>
                <Card.Title><h2>&copy;2023 Christina Larsen All rights reserved.</h2></Card.Title>
                <br />
                <Card.Text>This project is licensed under the <a href={MIT} className="text-white">MIT License</a>.</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Footer;