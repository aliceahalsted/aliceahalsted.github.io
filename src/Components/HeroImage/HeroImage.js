import { Image, Container } from 'react-bootstrap';
import Headshot from '../../headshot.jpg';

export default function HeroImage () {
  return (
    <Container className="row justify-content-center mt-5">
        <Image
        className='col-3'
        src={Headshot}
        fluid='true'
        roundedCircle='true' />
        <div className='col-3'>
            Hello! I am Alicea. I am a web developer.
        </div>
    </Container>
  )
};
