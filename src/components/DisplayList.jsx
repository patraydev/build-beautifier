import './DisplayList.css';

function DisplayList(props) {

console.log("prop data in displaylist",props.data);
  
    if (props.data) {
      return (
        <div className="cock-list">
          {/* <h1>{ props.last.name ? `Last Added: ${ props.last.name}`:""}</h1> */}
          {props.data.map((obj) => (
            <p key={obj.id}>{obj[props.feature] ? obj[props.feature] : " "}</p>
          ))}
        </div>
    
      );
    } else return null;
};

export default DisplayList;