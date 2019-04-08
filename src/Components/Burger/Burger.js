import React from "react";

import Classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIndredient/BurgerIndredient";

const burger = props => {
  let transformedIngredient = Object.keys(props.ingredients)
    .map(igKeys => {
      return [...Array(props.ingredients[igKeys])].map((_, i) => {
        return <BurgerIngredients key={igKeys + i} type={igKeys} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredient.length === 0) {
    transformedIngredient = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={Classes.Burger}>
      <BurgerIngredients type="bread-Top" />
      {transformedIngredient}
      <BurgerIngredients type="bread-bottom" />
      ramy
    </div>
  );
};

export default burger;
