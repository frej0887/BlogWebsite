import {
  MyProjectTitle,
  MyHeader1,
  MyHeader2,
  MyLink,
  MyText,
  MyCopyItem,
} from "../../components/SingleProjectComponents.tsx";


export const Website = () => {
  return <>
    <MyProjectTitle date={new Date('2025-05-11')}>This website</MyProjectTitle>
    <MyText>
      This project is written in React with a very iterative method. I keep a todo list, but really, what motivates me to work on this even when no one is ever going to see it, is doing what I feel like on that day. When I work on it, I think "Hmm.. would be nice to also have easy access to the recipes I just used without having to convert to metric" and then I extend my website to support it.
      <MyLink href={'https://github.com/frej0887/BlogWebsite'}>Github</MyLink>
    </MyText>
    <MyHeader1>Motivation</MyHeader1>
    <MyHeader2>React</MyHeader2>
    I have a bit of experience with React and really like the weird hook thing, so I wanted to learn more. I also use it at work.
    <MyHeader2>SASS</MyHeader2>
    I just wanted to try it because it looked different than SCSS but still popular.
    <MyHeader2>The color</MyHeader2>
    I am bad at html/css, so I found an example header online and stole it for first version of the website. To "avoid copying" I changed the example color slightly and just happened to like the color. <MyCopyItem src={'#1ABC9C'} alt={'#1ABC9C'}></MyCopyItem>
    <MyHeader2>The title</MyHeader2>
    I didn't know what to do for a title and decided start with a greeting as the title. The Obi-Wan Kenobi reference was just because "Hello" on it own was a bit boring
    <MyHeader2>The logo</MyHeader2>
    The logo is a paint roller, painting the primary color of my website. It was originally chosen because it is still actively being built, but then I just liked it and thought it was kinda fun and unique.
  </>
}