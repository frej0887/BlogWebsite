import {RecipeUnits} from "../constants.ts";
import {MyRecipe} from "../components/RecipeComponenents.tsx";

export const BananaPancakes = () => {
  return <MyRecipe
    title={"Banana Pancakes"}
    instructions={["Smash bananas with a fork", "Mix everything", "Use about ½ dL per pancake", "Cook each pancake on 6/9 on induction or similar"]}
    ingredients={[
      {count: 2, item: 'bananas'},
      {count: 4, item: 'eggs'},
      {count: 1, unit: RecipeUnits.dl, item: 'wheat'},
      {item: 'butter for frying'},
    ]}
    originalRecipe={"https://cookieandkate.com/healthy-banana-pancakes-recipe/"}
  />
}

