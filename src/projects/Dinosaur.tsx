import {
  MyHeader2,
  MyHeader3,
  MyImage, MyLink, MyList, MyListItem,
  MyOuter,
  MyText, MyProjectTitle
} from "../components/SingleProjectComponents.tsx";
import {MyImageCarousel} from "../components/ImageCarousel.tsx";

export const Dinosaur = () => {
  return (
    <MyOuter>
      <MyProjectTitle date={new Date('2025-01')}>Dinosaur watering can</MyProjectTitle>
      <MyText>This is the watering can before, bought at
        <MyLink
          href={'https://www.imerco.dk/casa-living-vandkande-dinosaur-1-liter-plastik-groen?id=100433309'}>Imerco</MyLink>
      </MyText>
      <MyImage src={'watering_can/wateringcan_before.png'} alt={'The watering can before'}></MyImage>
      <MyText>This is it after</MyText>
      <MyImage src={'watering_can/left.png'} alt={'The watering can after'}></MyImage>
      <MyHeader2>Materials</MyHeader2>
      <MyList>
        <MyListItem>Acrylic paint</MyListItem>
        <MyListItem>Panduro Limitless Marker</MyListItem>
        <MyListItem>Schjerning Art Acrylic Lacquer</MyListItem>
      </MyList>
      <MyHeader2>How it was made</MyHeader2>
      <MyText>
        First I made a green base layer. But then I realised that it is hard to make the next fully layer cover the old
        paint, because the green was too dark compared to the new red. To fix this, I first painted all the places I
        wanted red with the Limitless Marker, which lies on top of the paint, and creates a surface which is easier to
        cover with paint, than just acrylics. This might not be a problem with higher quality paint, but it was a nice
        fix for my situation. It made the border between the green background and the red back, a lot sharper than it
        otherwise would have been. The eyes and mouth are also painted with the black and white markers, to make it
        clear on the background.
      </MyText>
      <MyText>
        After it was done drying, In added 4 layers of acrylic lacquer, which makes the paint more resistant. Up until
        this point, I had always only painted parts of the dinosaur between drying, but here I painted everything at
        once. I let it dry by putting a screw on some yarn inside the hole used for filling the watering can. This held
        the dinosaur in the un-lacquered hole to let me lacquer everything in one go and let everything dry.
      </MyText>
      <MyHeader3>Newly learned techniques</MyHeader3>
      <MyText>The smooth transition between red and yellow is made by putting both yellow and red on a flat brush on the
        same time on
        each end. In this case, the red is a lot stronger, I needed to add significantly more yellow than red to the
        brush.
        Simply brush with the flat side adjusting the other so it mixes the wanted amount. </MyText>
      <MyHeader2>My experience</MyHeader2>
      <MyText>The funny shape of the watering can it not the most practical, but the design is always a joy to look
        at.</MyText>
      <MyImageCarousel slideImages={[
        {src:'watering_can/front.png', caption:''},
        {src:'watering_can/front2.png', caption:''},
        {src:'watering_can/left.png', caption:''},
        {src:'watering_can/right.png', caption:''},
        {src:'watering_can/wateringcan_before.png', caption:'The old and bland dinosaur-shaped watering can'},
        {src:'watering_can/eater_of_worlds.png', caption:''},
      ]}/>
    </MyOuter>
  )
}
