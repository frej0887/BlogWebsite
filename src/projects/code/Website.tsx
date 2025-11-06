import {
  MyCopyItem,
  MyHeader2,
  MyHeader3,
  MyProjectTitle,
  MyText
} from "../../components/SingleProjectComponents.tsx";


export const Website = () => {
  return <>
    <MyProjectTitle date={new Date('2025-05-11')}>This website</MyProjectTitle>
    <MyText>
      This project is written in React with a very iterative method. I keep a todo list, but really, what motivates me to work on this even when no one is ever going to see it, is doing what I feel like on that day. When I work on it, I think "Hmm.. would be nice to also have easy access to the recipes I just used without having to convert to metric" and then I extend my website to support it.
    </MyText>
    <MyHeader2>Motivation</MyHeader2>
    <MyHeader3>React</MyHeader3>
    I have a bit of experience with React and really like the weird hook thing, so I wanted to learn more. I also use it at work.
    <MyHeader3>SASS</MyHeader3>
    I just wanted to try it because it looked different than SCSS but still popular.
    <MyHeader3>The color</MyHeader3>
    I am bad at html/css, so I found an example header online and stole it for first version of the website. To "avoid copying" I changed the example color slightly and just happened to like the color. <MyCopyItem src={'#1ABC9C'} alt={'#1ABC9C'}></MyCopyItem>
    <MyHeader3>The title</MyHeader3>
    I didn't know what to do for a title and decided start with a greeting as the title. The Obi-Wan Kenobi reference was just because "Hello" on it own was a bit boring
    <MyHeader3>The logo</MyHeader3>
    The logo is a paint roller, painting the primary color of my website. It was originally chosen because it is still actively being built, but then I just liked it and thought it was kinda fun and unique.
  </>
}