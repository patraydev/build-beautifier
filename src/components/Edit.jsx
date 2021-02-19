

import { Container, Row, Col } from "react-bootstrap";
import CockForm from './CockForm'; 

function Edit(props) {


  const handleClick = (e) => {
    e.preventDefault();
    const target = props.beautifulDict.find(el => el[0].name === e.target.innerHTML);
    props.setRecord(target[0]);
}


  return (
    <Container fluid>
    <Row>
      <Col>
          <CockForm record={props.record} editMode={true} beautifulDict={props.beautifulDict} setToggle={props.setToggle}/>
      </Col>
        <Col>
          <div className="cock-list">
            {/* search bar might be nice here */}
        <h1>Last Updated</h1>
        {props.beautifulDict.map((obj) => (
          <p key={obj[0].name} onClick={handleClick}>{obj[0].name}</p>
        ))}
      </div>
      </Col>
    </Row>
  </Container>
    
    
    
    
    );
    
  };
  
export default Edit;