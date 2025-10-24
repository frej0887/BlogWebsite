import {RecipeUnits} from "../constants.ts";
import {MyRecipe} from "../components/RecipeComponenents.tsx";

export const BananaIceCream = () => {
  return <MyRecipe
    title={"Banana Ice cream"}
    instructions={["Smash bananas with a fork", "Mix bananas and peanut butter until smooth", "Add chocolate and mix until even", "Add chocolate on top", "Freeze"]}
    ingredients={[
      {count: 3, item: 'preferably frozen bananas'},
      {count: 0.5, unit: RecipeUnits.dl, item: 'peanut butter'},
      {count: 1, unit: RecipeUnits.dl, item: 'chocolate chunks or shavings'},
    ]}
    originalRecipe={"https://www.adashofmegnut.com/vegan-banana-chocolate-chunk-ice-cream/"}
  />
}

