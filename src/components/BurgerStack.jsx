// `src/components/BurgerStack.jsx`
const BurgerStack = ({ myBurgerToppings, removeFromBurger }) => {
  return (
    <ul>
      {myBurgerToppings.map((myBurgerTopping, index) => (
        <li
          key={index + myBurgerTopping}
          style={{ backgroundColor: `${myBurgerTopping.color}` }}
        >
          {myBurgerTopping.name}

          <button
            onClick={function () {
              removeFromBurger(myBurgerTopping, index);
            }}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
