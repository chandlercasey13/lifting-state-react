// `src/components/BurgerStack.jsx`
const BurgerStack = ({myBurgerToppings}) => {

console.log(myBurgerToppings)

  return (
    <ul>
     {myBurgerToppings.map((myBurgerTopping)=> (
        
        
        <li style={{ backgroundColor: `${myBurgerTopping.color}` }}>{myBurgerTopping.name}
        
        
        
        <button>Remove</button></li>
    
    ) 
        )}
    
    </ul>
  )
}

export default BurgerStack;
