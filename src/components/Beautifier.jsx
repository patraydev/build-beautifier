import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CockForm from "./CockForm";

import DisplayList from "./DisplayList";

function Beautifier(props) {
  const [last, setLast] = useState({hi:"hi"});
  

  return (
    <Container fluid>
      <Row>
        <Col>
          <CockForm setLast={setLast} setToggle={ props.setToggle}/>
        </Col>
        <Col>
          <DisplayList data={props.raw.map((obj) => obj.fields)} last={last} feature='CHICAGO COCKTAILS LIST SUMMER ‘07'/>
        </Col>
      </Row>
    </Container>
  );
}

export default Beautifier;
