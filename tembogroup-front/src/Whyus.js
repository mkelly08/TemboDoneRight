import React from 'react'
import { Row, Container} from 'react-bootstrap';

export const WhyUs = () => (
  <Container>
    <Row className='justify-content-center' fluid>
      <h2 className='text-center'>Why Tembo?</h2>
    </Row>
    <p className='text-center font-italic'><small>February 25, 2016</small></p>
    <Row>
      <p>The name Tembo, which is Swahili for elephant, holds very special meaning for us. Elephants are a keystone species that have a disproportionate impact on their environment, but today face grave threats. We chose the name because this important species reflects the values of our organization, but also the delicate balance our societies face today.</p>
      <p>Here are some interesting facts you may not have known about this precious animal:  </p>
      <br/><br/>
      <ul>
        <li>Elephants are among the world's most intelligent species — their brains have a total of 300 billion neurons. Aristotle once said that elephants were "the animal which surpasses all others in wit and mind."</li>
        <li>Elephants are thought to be highly altruistic animals that even aid other species, including humans, in distress.</li>
        <li>They are highly social creatures with incredible self awareness and enormous capacity for empathy.</li>
        <li>The elephant has one of the most closely knit societies of any living species, are highly communal and can only be separated by death or capture.</li>
        <li>Elephants have excellent problem-solving skills, spend substantial time working through challenges, and demonstrate highly cooperative behaviors with other elephants and species.</li>
        <li>They are also able to change their behavior radically to face new challenges, a hallmark of complex intelligence.</li>
      </ul>
      <p>
      Oscar-winning filmmaker, Kathryn Bigelow, made an important short film about the dangers they face today and the complex links between species extinction and global terrorism. It is well worth the watch, and if you're inspired to do something to save these remarkable creatures, reach out and we'll connect you to our non-profit partners in the field.
      </p>
    </Row>
    <Row className='justify-content-center mt-5 pb-5' fluid>
    <iframe title="Last Days Film, Kathryn Bigelow" className='justify-content-center' width="1200" height="600" src="https://www.youtube.com/embed/5gQujyNDp98" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Row>
  </Container>
)
