import {
  MyHeader1,
  MyHeader2,
  MyImage,
  MyList,
  MyListItem,
  MyMaterialList,
  MyNote,
  MyOuter, MyProjectTitle,
  MyText
} from "../../components/SingleProjectComponents";
import {MyImageCarousel} from "../../components/ImageCarousel.tsx";


export const WoodenLampshade = () => {
  return (
    <MyOuter>
      <MyProjectTitle date={new Date(2026, 4)}>Layered wooden lampshade</MyProjectTitle>
      <MyHeader1>Intro</MyHeader1>
      <MyText>
        I've had this idea for about 10 years of a wooden lampshade made from layers of veneer. The idea was to have a
        base layer and then add layers of veneer following the grain of the wood to give it a 3d shape. Different places
        would have different amount of layers and therefore thicknesses, which would allow for different amount of light
        to pass through. The nice warm glow through the wood, makes it a nice bedside lamp.
      </MyText>
      <MyText>
        The original idea was for the layers to be on the outside of the shade, such that the layers are visible at all
        times. For this to be possible, each layer would need to be from the same place on the same tree. This was the
        main issue which halted me from making it for so long, since I could not find any veneer which was guaranteed to
        be cut as I wanted it to be. I ended up buying some veneer, thinking I had found some similar pieces, but in the
        end it was not as wanted and I had to find a way to make the same idea with different looking wood. I ended up
        doing it on the inside, so the grain is only visible when the light is turned on.
      </MyText>
      <MyMaterialList materialListItems={[
        {
          text: '5 A4 0.5mm sheets of birch veneer',
          link: 'https://panduro.com/da-dk/products/skab-dekorer/rammer-kranse-figurer/tra/finerark-a4-05-mm-5-stk-109441',
          note: 'A bright wood like birch allows for more light to pass each layer and therefore allows for more' +
            ' layers, however in birch the grains are not very distinct, so another light woods might have been better.'
        },
        {
          text: 'A cheap cylindrical lampshade',
          link: 'https://www.ikea.com/dk/da/p/tvaerfot-bordlampe-sort-hvid-50467524/'
        },
        {
          text: 'A cool lamp base',
          link: 'https://www.silvan.dk/produkt/trio-bordlampe-martin-29-cm-2682-9861971'
        },
        {
          text: '25W LED light bulb',
          link: 'https://www.foetex.dk/produkter/philips-led-classic-filament-paere-25w/200344983/',
          note: 'This bulb doesn\'t get very hot and is small which makes it less visible at odd angles, but I wish it' +
            ' had light diffusion.'
        },
        {
          text: 'Danish Oil',
          link: 'https://www.linaa.dk/shop/danish-oil-rustins-851p.html',
        },
        {
          text: 'Sanding pads',
          link: 'https://www.linaa.dk/shop/slibesvamp-nylon-15x21-18246p.html',
        },
        {text: 'Wood glue'},
        {text: 'Glue clamps'},
        {
          text: 'Wood repair stick',
          link: 'https://woodrepair.dk/Bloed-Voks/TU1.80001',
          note: 'Soft wax for filling cracks in wood',
          optional: true,
        },
        {text: 'Food wrapping', optional: true},
      ]}/>


      <MyHeader1>How it was made</MyHeader1>
      <MyText>
        My sheets were not individually large enough to to cover the whole circumference of the lampshade I found, so the
        first thing I had to do was find two good looking veneer sheets which looked natural together. I found two which
        lined well up in a place with a nice pattern. Wrapping it around the old lampshade, revealed that the backside had
        a lot of very flat grain-lines which would be easier to line up nicely.
      </MyText>
      <MyImage src={'wooden_lampshade/full_wood.jpg'} alt={'My main sheet of veneer'}/>


      <MyHeader2>Cutting the veneer</MyHeader2>
      <MyText>My first instinct was to use a small baking sheet to trace the wanted shape with a pencil, cut it out and
        then use the template to cut the correct shape.</MyText>
      <MyImageCarousel slideImages={[
        {src: 'wooden_lampshade/first_wood_template.jpg', caption: ''},
        {src: 'wooden_lampshade/first_wood_cut.jpg', caption: ''},
        {src: 'wooden_lampshade/first_wood_layered.jpg', caption: ''},
      ]}/>
      <MyText>
        This worked quite well, but the areas quickly became too large for the small papers, so I replaced it with a large
        baking sheet where I traced all of the veins. This ended up being a huge help with planning the design, that is,
        choosing which veins to use and which to ignore.
      </MyText>
      <MyImage src={'wooden_lampshade/screen.jpg'} alt={''}/>
      <MyText>
        It was also allowed me to wrap it around the old lampshade, which made it easier to visualise, figure out which
        parts to keep, and helped lining up the back. I tried both masking tape and invisible tape, but neither were grat
        at holding it together.
      </MyText>
      <MyImage src={'wooden_lampshade/screen_on_old_shade.jpg'} alt={''}/>
      <MyText>
        For this big sheet, I did not want to cut it and ruin the structure, so instead I traced it again, this time from
        the paper onto the veneer. This however was a mistake, as it was quite hard to remove the pencil markings. I tried
        using both a normal rubber and to sand it out and while both helped, it is still there. Luckily you can't really
        see it much as it is on the inside of the lampshade.
      </MyText>
      <MyImage src={'wooden_lampshade/traced_wood.jpg'} alt={''}/>
      <MyText>
        Lastly, I cut everything out with my trusty knife, cleaned the edges, and sanded the surface a bit. This was not
        going to be very visible on the outside, so it was mainly for comfort when handling.
      </MyText>


      <MyHeader2>Testing</MyHeader2>
      <MyText>
        As I now had everything ready, it was time for testing.
      </MyText>
      <MyList>
        <MyListItem>I compared a 250lm and a 470lm bulb and saw almost no difference though the lampshade.</MyListItem>
        <MyListItem>I also tested the heat production of the 470lm bulb by having it turned on for around an hour and then
          touching it with my hand. To my surprise, it was warm to the touch, but not uncomfortable. This eased my fear of
          my project burning my apartment down. Comfortably warm shoutout to the creator of the LED ❤️.</MyListItem>
        <MyListItem>I tested the difference in how much light passes through with or without the material of the
          manufactured lampshade. This was hard for me to judge, but it made me think a lot about the old lampshade, which
          made me realise that I could just take it apart and glue the wood directly onto the metal parts.</MyListItem>
        <MyListItem>I tested with the brighter bulb and without the manufactured lampshade, because I hoped to be able add
          a layer, making it 5 instead of 4, but it was too much.</MyListItem>
      </MyList>


      <MyHeader2>Gluing it together</MyHeader2>
      <MyText>
        First I wrapped the old shade and lamp in foil, to reduce the risk of dropping glue onto it.
        Then I glued them layer by layer, smallest to largest.
        I decided to do smaller towards the center and then larger going out, but I think that as long as the outermost
        layer is the full one, the order would not change the shading effect.
        I glued all the small pieces individually, before gluing them to the outside veneer.
      </MyText>
      <MyNote>
        I found that my clamps would make the shape of the wood a bit flat where I put them, so I considered clamping
        somewhere without glue, but still close enough to hold shape and tension. I decided against it as it did not
        flatten it very much, and holding it well was more important.
        My clamps are not very deep, and it would have been nice to have the clamping area a bit better spread out, but
        this worked quite well.
      </MyNote>
      <MyImageCarousel slideImages={[
        {src: 'wooden_lampshade/gluing.jpg', caption: ''},
        {src: 'wooden_lampshade/full_glued_part.jpg', caption: ''},
        {src: 'wooden_lampshade/gluing_with_light.jpg', caption: ''},
      ]}/>

      <MyText>
        Gluing the pieces onto the outside veneer together was a bit more tricky because of the connections between the
        two outer layers of veneer, but I had strategically placed a very large simple shape over one of the connection
        lines. This makes the connection a lot more secure, but also a bit more troublesome, as it is extra important with
        a large piece, to make sure it curves well. To do it, I taped it well on the other side, and glued a few
        centimeters on one side first so I could make sure it still lined up on the other side when it is curved. I then
        glued the rest of the large sheet, removed the painters tape and did the last two inside pieces.
      </MyText>
      <MyText>
        I must have made a mistake and accidentally glued it too tight, as I had created a bit of a hill with one of the
        outside veneer connections. To fix it, I just cut it down with the blade of my knife and luckily, it was not very
        visible afterwards.
      </MyText>
      <MyImage src={'wooden_lampshade/full_glued_wood.jpg'} alt={''}/>
      <MyText>
        Before I glued everything together, I wrapped it around the old lampshade, and used the right angles of the
        manufactured lampshade to trace two flat lines around the inside of my lampshade, which I then used to cut it to
        size.
      </MyText>
      <MyText>
        I put the backside connection in one of darkest areas of the lampshade, which makes the inevitable crack less
        obvious, however the front was not as well chosen. To close this, I only had a small piece of overlapping veneer,
        while the rest of the area was just a single non-overlapping layer. I don't know if there is a smart way to glue
        the edges of two thin pieces of wood together, so I just glued it on that small overlap and put glue in the crack.
        This is not a strong connection, but the lamp-shade metal would hold it together well enough for it to work.
        The crack was quite visible, so I tried to add sawdust/glue mixture to the crack but it didn't do much as the
        crack was already full of normal glue. I got a wax repair stick, but as my oil doesn't stick to wax, I decided to
        try to fix this later.
      </MyText>
      <MyImage src={'wooden_lampshade/shade_metal.jpg'} alt={''}/>
      <MyText>
        Last step of putting the shade together, was gluing the lampshade metal to the inside of my new one, to keep the
        shape and to have a connection point to the lamp. I used violence to take out the metal from the old lampshade,
        cleaned it up and glued it to the shade with a bit of superglue in places with a stable touch between the wood and
        the metal. Of course, the insides are quite uneven due to the layers of veneer, but a few spots of glue are
        plenty.
      </MyText>
      <MyNote>
        The fit here is quite tight, but it is easier to put the metal parts in, side first and then turn it into
        position.
      </MyNote>


      <MyHeader2>Finishing</MyHeader2>
      <MyText>
        As the lamp finally had good structure, this was the chance to make the surface nice and smooth. I started by
        sanding with sandpaper, grit 280 and 400, followed by sanding pads, grit 400, 600 and 1000.
        Last step was 3 layers of Danish Oil. This darkens the grain, which makes the effect more apparent.
      </MyText>

      <MyText>
        I had ignored the cracks for now due to it being okay and hard to fix.
        I could not find a wood repair stick for birch, and as it is a lot brighter than most other woods, I ended up
        getting the natural tone. It filled the cracks nicely and added a little bit of darkness, but sadly the cracks are
        still quite visible.
      </MyText>
      <MyText>
        I did try to match the birch color with paint, and to paint the cracks a bit darker, but it is hard to match the
        color and to paint it only on the crack, so I decided tp give up on that idea.
      </MyText>


      <MyHeader2>Spacer</MyHeader2>
      <MyText>
        During testing, I used a physically larger bulb and this bulb was a bit too large and was visible over the top, so
        I made a spacer to lift the lampshade up a bit. I made it by just wrapping a lot of veneer around the thread and
        gluing it together. It is not pretty, but it works.
        I later learned that the top of the lamp base was not flat, and as I already had a spacer, I just tried to make
        the spacer uneven to try to counter it. Perfecting it would take a lot of trial and error, but I am okay with my
        decent result in not too long time.
      </MyText>


      <MyHeader2>Lamp base</MyHeader2>
      <MyText>
        I chose a lamp base with horizontal grooves on the side, which with light reflecting onto it, makes a cool effect
        with horizontal dark stripes. At first I tried to recreate this with paint so it looked cool all the time, but in
        the end, I realized that it looked better before, so I ended up just painting it white. Before it was a creamy
        color, and I do think the white is better, but it was also just easier to paint. I also think it is quite fitting
        with a lampshade made from beech wood, to have the base be white with horizontal dark stripes.
        I really wanted to play with this some more, but filling with too much paint could remove some of the effect, so I
        decided to keep it simple.
        I also painted a bit of the lamp holder to make it just a bit less accidentally visible.
      </MyText>


      <MyHeader1>My experience</MyHeader1>
      <MyText>
        I am a bit unsatisfied with the very visible cracks, but mostly I am just so happy that I finally got around to
        making it, especially the fix with the not perfectly matching veneer.
        It also made me clean up my website a bit :)
      </MyText>

      <MyHeader1>Techniques</MyHeader1>
      <MyHeader2>Old LCD screen for tracing</MyHeader2>
      <MyText>
        I had an old pc screen which had been replaced and had gotten a scratch on the LCD panel. I decided to take it
        apart and take out the LCD panel, so there only was the LED backlight left. I originally did it to use it for
        better lightning while doing product photography, but it works quite well for tracing the grain of the wood.
      </MyText>
    </MyOuter>
  )
}