import React from 'react'
import { Row, Container} from 'react-bootstrap';

export const Careers = () => (
  <Container fluid>
    <Container>
      <Row className='justify-content-center'>
        <h2 className='text-center'>Joing our team of smart. passionate. diverse. idealist</h2>
        <h2 className='text-center'>who are on a mission to change the world</h2>
      </Row>
    </Container>
    <p className='text-center font-italic'><small>February 25, 2016</small></p>
    <Row className='justify-content-center' fluid>
    <Row className="careersTable">
          <table cellSpacing="0">
            <tbody>
              <tr>
                <td bgcolor="#cce6ff"><b>Engagement Manager</b></td>
              </tr>
              <tr>
                <td>The Engagement Manager will primary responsibility for managing daily interaction, workflow, timelines and deliverables. This is an ideal position for someone who has excellent people skills, a love of structure, and who is detail oriented but does not miss the big picture.</td>
              </tr>
              <tr bgcolor="#f2f2f2">
                <td><br/></td>
              </tr>
            </tbody>
          </table>
        </Row>
        <Row className="careersTable">
          <table cellSpacing="0">
            <tbody>
              <tr>
                <td bgcolor="#cce6ff"><b>Chief of Staff</b></td>
              </tr>
              <tr>
                <td>The Tembo Group is seeking an Executive Assistant to support our Managing Director and perform a variety of administrative tasks across the organization. The ideal candidate is dynamic, entrepreneurial, highly organized and an excellent internet sleuth and problem solver. They are self- motivated, professional, and capable of managing their work load and prioritizing tasks in a fast-paced start-up environment.</td>
              </tr>
              <tr bgcolor="#f2f2f2">
                <td><br/></td>
              </tr>
            </tbody>
          </table>
        </Row>
    </Row>
    <Row className='justify-content-center pb-5' fluid>
      <p className='text-center'>Are you intrested in somthing short-term or part-time?<br/>
      Tembo is always looking for whip smart consultants to join specific projects, and have a rolling internship program.<br/>
      If you are intrested in eather opportunity please submit a letter of intrest and CV to<br/>
      jobs@tembogroup.com</p>
    </Row>
  </Container>
)
