import React from 'react'
import { Row, Container} from 'react-bootstrap';
import imgLine from './img/dividerLineHor.png';

export const BrainTrust = () => (
  <Container>
    <div className="generalContent">
      The backbone of The Tembo Group is our Brain Trust: a deep bench of extraordinary, world-changing professionals.
      <br/><br/>
      For every client engagement, we build bespoke, interdisciplinary teams, and provide the oversight and management needed for flawless execution. Our teams are lean and cost effective, and eliminate the need for clients to engage multiple firms across a range of functions. We bring together the best minds and managers who can challenge old assumptions, point to new solutions, and handle every requirement with precision and care.
      <br/><br/>
      The Trust is a network of systems thinkers, movement-makers, and management consultants. We are design-thinkers, doers, artists and culture-shifters. We are lawyers, futurists, fundraisers, and researchers. We have been operating in the eye of the storm for many years, have seen the best brains tackle seemingly intractable problems, and know who and what it takes to get the job done.
    </div>
    <Row className='justify-content-center' fluid>
      <img src={imgLine} alt="imgLine"/> 
    </Row>
  </Container>
)
