import {
  MyOuter,
  MyText, MyProjectTitle
} from "../components/SingleProjectComponents.tsx";

export const BananaPancakes = () => {
  return (
    <MyOuter>
      <MyProjectTitle date={new Date('2025-01')}>Banana pancakes</MyProjectTitle>
      <MyText>pancakes
      </MyText>
    </MyOuter>
  )
}
