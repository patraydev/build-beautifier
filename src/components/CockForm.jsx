import axios from 'axios';
import { config } from "../services";
import { useEffect, useState } from "react";

import './CockForm.css'; 

function CockForm(props) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState(["","",""]);
  const [rinse, setRinse] = useState("");
  const [glass, setGlass] = useState("");
  const [ice, setIce] = useState("");
  const [garnish, setGarnish] = useState("");
  const [method, setMethod] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (ingredients.length === 0) {
      setIngredients(["","",""]);
    }
  }, [ingredients]);

  const modifyIngredient = (e, i) => {
    setIngredients((currIngredients) =>
      currIngredients.map((ing, index) => (index === i ? e.target.value : ing))
    );
  };

  const removeIngredient = (i) => {
    setIngredients((currIngredients) =>
      currIngredients.filter((ing, index) => index !== i)
    );
  };

  useEffect(() => {
    if (props.record) {
      setName(props.record.name);
      setIngredients(props.record.ingredients);
      console.log("record", props.record);
      setRinse(props.record.rinse);
      setGlass(props.record.glass);
      setIce(props.record.ice);
      setGarnish(props.record.garnish);
      setMethod(props.record.method);
      setDescription(props.record.description);
    }
  }, [props.record]);


  const clearInputs = () => {
    setName('');
    setIngredients(['', '', ''])
    setRinse('');
    setGlass('');
    setIce('');
    setGarnish('');
    setMethod('');
    setDescription('');
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name) {
      const obj = {
        name,
        ingredients,
        rinse,
        glass,
        ice,
        garnish,
        method,
        description,
      };
      const fields = { JSONstring: JSON.stringify(obj) };
      if (!props.editMode) {
        try {
          await axios.post(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Beautiful`, { fields }, config)
            .then(clearInputs());
        } catch (error) {
          console.log(error);
        }
        props.setLast(obj);
        props.setToggle((tog) => !tog)
      } else {
        
      }
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
          />
        </div>
      {/* Soleil's code for ingredients map! Thanks~ */}
      {ingredients.map((ing, index) => (
        <div key={index} className='form-row'>
          <label>Ingredient {index + 1}: </label>
          <input
            type="text"
            value={ing}
            onChange={(e) => modifyIngredient(e, index)}
          />
          <button onClick={() => removeIngredient(index)}>-</button>
        </div>
      ))}
          <div className='form-row'>
      <button onClick={() => setIngredients((curr) => [...curr, ""])}>
              add ingredient
      </button>
      </div>
      <div className='form-row'>
      <label>Rinse:</label>
      <input
        type="text"
        value={rinse}
        onChange={(e) => setRinse(e.target.value)}
          />
          </div>
          <div className='form-row'>
      <label>Glass:</label>
      <input
        type="text"
        value={glass}
        onChange={(e) => setGlass(e.target.value)}
            />
            </div>
          <div className='form-row'>
      <label>Ice:</label>
            <input type="text" value={ice} onChange={(e) => setIce(e.target.value)} />
            </div>
          <div className='form-row'>
      <label>Garnish:</label>
      <input
        type="text"
        value={garnish}
        onChange={(e) => setGarnish(e.target.value)}
            />
            </div>
          <div className='form-row'>
      <label>Method:</label>
      <textarea
        type="textarea"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
            />
        </div>
        <div className='form-row'>
      <label>Description:</label>
      <textarea
            type="textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
            />
            </div>
          <div className='form-row'>
            <button type="submit">write</button>
            </div>
      </form>
      </div>
  );
}
export default CockForm;
