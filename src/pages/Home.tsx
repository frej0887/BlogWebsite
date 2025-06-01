import {
  MyEmail,
  MyHeader1,
  MyHeader2,
  MyLink,
  MyList, MyListItem,
  MyOuter,
  MyText
} from "../components/SingleProjectComponents.tsx";

export const Home = () => {
  return (
    <MyOuter>
      <MyHeader1>Home</MyHeader1>
      <MyText>
        Hi, I am Freja, owner of <MyLink href={'osterbog.me'}>osterbog.me</MyLink>.
        I am a full time backend developer, but in my free time I like to create or fix things, often with a purpose,
        but sometimes just for fun. I often don't know what I am doing, so if you have any comments or help, please
        contact me at <MyEmail href={'contact@osterbog.me'}>contact@osterbog.me</MyEmail>.
      </MyText>
      <MyText>
        This website is still under construction, so please bear with me or make a MR on <MyLink href={'https://github.com/frej0887/BlogWebsite'}>Github</MyLink>.
      </MyText>
      <MyHeader2>Recommendations</MyHeader2>
      <MyList>
        <MyListItem><MyText><MyLink href={'vedsted.me'}>vedsted.me</MyLink></MyText></MyListItem>
      </MyList>
    </MyOuter>
  )
}