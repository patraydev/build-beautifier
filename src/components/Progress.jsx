
import DisplayList from './DisplayList';

function Progress(props) {

  let beautifulObjects = props.beautiful;
  beautifulObjects.sort((a, b) => b.createdTime - a.createdTime);
 beautifulObjects = beautifulObjects.map((obj) => JSON.parse(obj.fields.JSONstring));
  return (
    <div>
      <h2>Latest</h2>
      <DisplayList data={beautifulObjects} feature='name' />
      </div>
);
};

export default Progress