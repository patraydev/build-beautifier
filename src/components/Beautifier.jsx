import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CockForm from "./CockForm";

function Beautifier(props) {
  const [last, setLast] = useState({ hi: "hi" });

  const handleDragStart = (event,content) => {
    event.dataTransfer.setData("content", content);
    console.log("dragstart on : ", event,content);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // onDrop = (event, cat) => {
  //   let taskName = event.dataTransfer.getData("taskName");

  //   let tasks = this.state.tasks.filter((task) => {
  //     if (task.taskName == taskName) {
  //       task.type = cat;
  //     }
  //     return task;
  //   });

  //   this.setState({
  //     ...this.state,
  //     tasks,
  //   });
  // };

  return (
    <Container fluid>
      <Row>
        <Col>
          <CockForm setLast={setLast} setToggle={props.setToggle} />
        </Col>
        <Col>
          <div className="cock-list">
            <h1>{last.name ? `Last Added: ${last.name}` : ""}</h1>
            {props.raw.map((obj) => (
              <p
                key={obj.id}
                onDragStart={(e) => handleDragStart(e, obj.fields[props.table])}
                onDragOver={handleDragOver}
                draggable
              >
                {obj.fields[props.table] ? obj.fields[props.table] : " "}
              </p>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Beautifier;
