// src/components/IngredientList.jsx
const IngredientList = ({ availableIngredients, addToBurger }) => {
  

  return (
    <ul>
      {availableIngredients.map((availableIngredient) => (
        <li style={{ backgroundColor: `${availableIngredient.color}` }}>
          
          {availableIngredient.name}
          <button onClick= { function () {addToBurger(availableIngredient)}}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
