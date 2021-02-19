import { useState } from "react";


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

  return (
    <div className='two-col-container'>
        <div className='col'>
          <CockForm setLast={setLast} setToggle={props.setToggle} />
        </div>
        <div className='col'>
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
        </div>
      </div>
  );
}

export default Beautifier;
