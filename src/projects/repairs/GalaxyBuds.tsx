import {
  MyHeader1,
  MyList, MyListItem,
  MyOuter,
  MyProjectTitle,
  MyText
} from "../../components/SingleProjectComponents.tsx";


export const GalaxyBuds = () => {
  return (
    <MyOuter>
      <MyProjectTitle date={new Date('2025-11')}>Samsung Galaxy Buds 2 Pro</MyProjectTitle>
      <MyHeader1>The problem</MyHeader1>
      <MyText>
        I've now accidentally washed my partners earbuds twice. First time it happened because I washed trousers and the earbuds where in the case in a pocket. We bought the same pair again but it happened again around two years after..
        I noticed that in one pair, the right one worked as new and in the other pair the left one had great sound, but a bad microphone, which made calls and ambient mode awful. However that made one full pair, with noise cancelling, but without ambient mode.
      </MyText>
      <MyHeader1>The fix</MyHeader1>
      <MyText>
        I found a guide online, telling me to open the earbuds, by moving slowly with a knife around the edges to pop the top off. No heat needed! When open, I saw that it has a raised band on the side and a rubber band to hold it in place.
      </MyText>
      <MyText>
        In here we have a small board with a removable connector. Popping this off reveals a removable board with a battery underneath.
      </MyText>
      <MyText>
        The battery can be flipped out, but is otherwise soldered to the rest of the electronics, and the speaker below is also hidden behind glue.
      </MyText>
      <MyText>
        In the end there was only one thing that could easily be replaced, and they were non-symmetrical. I switched the removable boards from the bad speaker into the good speaker and viola, the two good speakers in the earbuds were now connected.
      </MyText>
      <MyText>
        The sound had pretty low volume, which was fixed with a software reset, but otherwise the speakers works.
      </MyText>
      <MyText>
        In addition, one of the cases had stopped charging, and the earbuds looked quite roughed up, but I could just switch with the other.
      </MyText>
      <MyHeader1>Issues</MyHeader1>
      <MyList>
        <MyListItem>Microphone on left earbud doesn't work, which means ambient mode don't work.</MyListItem>
        <MyListItem>I cannot change the batteries, which means they might end up having a very unequal lifetime.</MyListItem>
      </MyList>
      <MyHeader1>Key takeaways</MyHeader1>
      <MyList>
        <MyListItem>The only easily fixable thing on the Samsung Galaxy Buds 2 Pro is the board which it uses for connecting.</MyListItem>
        <MyListItem>The cap on the individual buds are easy to replace.</MyListItem>
        <MyListItem>I ended up being pretty lucky, as I had a left and a right which worked almost perfectly.</MyListItem>
      </MyList>
    </MyOuter>
  )
}