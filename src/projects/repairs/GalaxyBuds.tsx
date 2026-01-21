import {
  MyDoubleImage,
  MyHeader1,
  MyImage,
  MyLink,
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
        I've now accidentally washed my partners earbuds twice. First time it happened because I washed trousers and the earbuds where in the case in a pocket. We bought the same pair again but it happened again a few years after..
      </MyText>
      <MyImage src={'galaxy_buds/both_cases.jpg'} alt={'Both cases side by side'}/>
      <MyText>
        I noticed that in one pair, the right one worked as new and in the other pair the left one had great sound, but a bad microphone, which made ambient mode awful. However that made one full pair, with functioning noise cancelling.
      </MyText>
      <MyHeader1>The fix</MyHeader1>
      <MyText>
        I found a <MyLink href={'https://www.youtube.com/watch?v=2fRBIhEp1Rg'}>guide online</MyLink>, telling me to open the earbuds, by moving slowly with a knife around the edges to pop the top off. No heat needed! When open, I saw that it holds itself in place with a raised band on the side.
      </MyText>
      <MyImage src={'galaxy_buds/single_side.jpg'} alt={'A single bud with the top cover removed'}/>
      <MyText>
        In here we have a small board with a removable connector. Popping this off reveals a removable board with a battery underneath.
      </MyText>
      <MyText>
        The battery can be flipped out, but is otherwise soldered to the rest of the electronics, and the speaker below is also hidden behind glue.
      </MyText>
      <MyImage src={'galaxy_buds/exploded2.jpg'} alt={'All the parts of the bud'}/>
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
      <MyHeader1>Bonus look inside of the case</MyHeader1>
      <MyText>Just for fun, I decided to open the other case. I could pry it open with a few <MyLink href={'https://www.ifixit.com/en-eu/products/ifixit-opening-picks-set-of-6'}>iFixit picks</MyLink> around the edge. In it I found a white paper-like substance which I assume is due to the water damage.</MyText>
      <MyImage src={'galaxy_buds/case_battery.jpg'} alt={'The just opened case'}/>
      <MyText>Unscrewing two screws and the battery reveals the full board. On here, I notice the red rectangle. This is most likely <MyLink href={'https://en.wikipedia.org/wiki/Liquid_contact_indicator'}>liquid contact indicator</MyLink> which is inside a lot of consumer electronics, to tell a repair person that the device was water damaged.</MyText>
      <MyDoubleImage img1={{src: 'galaxy_buds/case_top.jpg', alt: 'The case where the PCB is clearly visible'}}  img2={{src: 'galaxy_buds/battery.jpg', alt: 'The battery with corruption'}}/>
      <MyText>I also notice that we have some corrosion on one of the battery terminals, which together with the white stuff could explain why it doesn't charge.</MyText>
    </MyOuter>
  )
}