
import Card from 'react-bootstrap/Card';
import HBackground from '../assets/images/Hbackground.png'

function Footer() {
    const MIT = "https://opensource.org/licenses/MIT"

    const Background = {
        backgroundImage: `url(${HBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <Card className="text-center" style={Background}>
            <Card.Body>
                <Card.Title>&copy;2023 Christina Larsen All rights reserved.</Card.Title>
                <br />
                <Card.Text>This project is licensed under the <a href={MIT}>MIT License</a>.</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Footer;