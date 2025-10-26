import {numToSymbol, RecipeUnits} from "../constants.ts";
import {MyHeader1, MyHeader2, MyLink, MyOuter, MyText} from "./SingleProjectComponents.tsx";

type IngredientsProps = {
  count?: number;
  unit?: RecipeUnits;
  item: string;
}
type RecipeProps = {
  title: string;
  originalRecipe?: string;
  note?: string;
  ingredients: IngredientsProps[];
  instructions: string[];
}

const tableCheckmark = () =>
  <td><input type={'checkbox'} style={{marginInline: '1rem'}}/></td>

export const MyIngredient = ({count, unit, item}: IngredientsProps) =>
  <tr>
    {tableCheckmark()}
    <td style={{width: '1.2rem'}}><p>{numToSymbol(count)}</p></td>
    <td style={{width: '1.2rem'}}><p>{unit}</p></td>
    <td><p>{item}</p></td>
  </tr>

export const MyInstruction = (text: string) =>
  <tr>
    {tableCheckmark()}
    <td><p>{text}</p></td>
  </tr>

export const MyRecipe = ({title, originalRecipe, note, instructions, ingredients}: RecipeProps) =>
  <MyOuter>
    <MyHeader1>{title}</MyHeader1>
    {originalRecipe ? <MyLink href={originalRecipe}>Original recipe</MyLink> : <></>}
    {note ? <MyText>{note}</MyText> : <></>}
    <MyHeader2>Ingredients</MyHeader2>
    <table>
      {ingredients.map(MyIngredient)}
    </table>
    <MyHeader2>Instructions</MyHeader2>
    <table>
      {instructions.map(MyInstruction)}
    </table>
  </MyOuter>