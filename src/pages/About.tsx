import {
  MyEmail,
  MyHeader1,
  MyOuter, MyText,
} from "../components/SingleProjectComponents.tsx";

export const About = () => {

  return (
    <MyOuter>
      <MyHeader1>About me</MyHeader1>
      <MyText>
        Please contact me at:
        <MyEmail href={'contact@osterbog.me'}>contact@osterbog.me</MyEmail>
      </MyText>
    </MyOuter>
  )
}