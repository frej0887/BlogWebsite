import {
  MyProjectTitle,
  MyHeader1,
  MyHeader2,
  MyImage,
  MyList,
  MyListItem,
  MyOuter,
  MyText, MyMaterialList
} from "../../components/SingleProjectComponents.tsx";
import {MyImageCarousel} from "../../components/ImageCarousel.tsx";

export const WatchStrap = () => {


  return (
    <MyOuter>
      <MyProjectTitle date={new Date('2025-03')}>Leather watchstrap</MyProjectTitle>
      <MyText>
        My old watchstrap was breaking, so I decided to create a new one
      </MyText>
      <MyImage src={'watchstrap/watchstrap.jpg'} alt={'My new leather strap'}></MyImage>
      <MyText>
        There exists a lot of tools for leatherwork, but I decided to try to create this strap while buying as few
        tools as possible.
      </MyText>
      <MyMaterialList materialListItems={[
        {
          text: '20mm ⋅ 3mm leather strap from Panduro',
          link: 'https://panduro.com/da-dk/products/sy-strik/lader-tilbehor/lader/laderrem-2-mm-sort-20mm-100cm-305386',
          note: 'Other colors are of course available, but hard leather is recommended. Remember to measure' +
            ' watchband width before buying the leather.'
        },
        {
          text: 'Watch buckle and quick release spring bars',
          note: 'I found these on Amazon, but you could of course reuse the old ones'
        },
        {
          text: 'Waxed leather thread',
        },
        {
          text: 'Mister Minit shoe polishing cream',
          note: 'The only leather treatment I already had',
          optional: true,
        },
      ]}/>
      <MyHeader1>How it was made</MyHeader1>
      <MyText>
        The leather strap was 3mm thick, which is a bit thick for a watch strap, so the first step was to thin the
        leather. The normal way of doing this is with a specific thinning knife, but I had to replace it with the knife
        I already had. However, a normal thinning knife has the blade facing away from the handle, where my knife has
        the blade on the side, which made it a lot harder for me to cut the leather away equally. After working on this,
        I finished it off by sanding the inside with sanding paper, to make the inside smoother, and lessening blemishes
        done by my bad knife-work. The ends had to fold onto itself in order to hold on to the quick release bars, which
        meant the ends had to be thinned even more.
        I again used the knife to cut the leather away on the inside of the strap, but this time with an angle, so the
        leather closest to the tip is the thinnest. For how much to cut off like this, I took inspiration from my old
        watchstrap.
      </MyText>

      <MyHeader2>Making the holes</MyHeader2>
      <MyText>
        Having the leather thin and malleable, I went on to making fixing the ends.
      </MyText>

      <MyText>The watch ends</MyText>
      <MyList>
        <MyListItem>A hole for he pin on the quick release bar</MyListItem>
        <MyListItem>Sewing holes</MyListItem>
      </MyList>

      <MyText>The end with the buckle</MyText>
      <MyList>
        <MyListItem>A long hole for the pin of the buckle</MyListItem>
        <MyListItem>Sewing holes</MyListItem>
      </MyList>

      <MyText>The point side with the holes to fit the length</MyText>
      <MyList>
        <MyListItem>2 adjustment holes</MyListItem>
      </MyList>

      <MyText>
        For the sewing, you would usually use an awl or a fork to make the holes before sewing, because it
        makes it easier to sew later.
        I didn't have either, so instead I found a large needle and gave it a handle by using some moldable plastics I
        already had. You heat up the plastics in warm water, so it gets moldable and then put it in the shape you like
        and let it cool down and solidify. Awls are usually a lot thicker, but this made an awl, which I used to make
        the sewing holes. For the first one I made too many holes, which is still visible on the strap. I then sewed it
        all together with some old leather thread I already had. This thread is a lot thicker and stronger than normal
        sewing thread and is covered in a wax, which is a key feature because when you want to stop sewing with it, you
        burn the rest of the thread off, and it still holds itself together
      </MyText>

      <MyText>
        For the rest of the holes, I used a hole punch I already had. The pin holes were supposed to be elongated, which
        I did by making multiple holes and cutting the sides to connect them.
      </MyText>

      <MyHeader2>The edges</MyHeader2>
      <MyText>
        To make the watch more comfortable to wear, I decided to round the edges. Usually an edge beveler would be handy
        here, which are for cutting off corners, but are made to always cut the same amount off. In my case I used my
        trusty knife and tried doing it evenly. After that you would use a tool to round and polish the edges, but as I
        don't have the tools, I had to compromise by only sanding and cutting the edges.
      </MyText>

      <MyHeader2>The finishing touches</MyHeader2>
      <MyText>
        I also made a free loop to hold the point side in place. For this, I sewed it together and made an attempt at
        hardening the leather with water, but it didn't work.
        Lastly I gave the strop a leather treatment meant for polishing shoes, let it dry and have worn it since then.
      </MyText>

      <MyHeader1>My experience</MyHeader1>
      <MyText>
        I have worn the new watch strap for a few months now, and while it is clearly a lot thicker and the inside more
        coarse, it doesn't bother me.
        I really liked the bonus objective of only buying things if it was necessary and trying to figure out a way
        around the missing tools. I would really like to have an easier time with some things, and being able to give it
        a nice edge, but I am quite happy with how it ended up. If I did it again and I could buy one additional tool, I
        would get a tool for making the edge nicer, and remember to measure before making holes for sewing.
      </MyText>
      <MyImageCarousel slideImages={[
        {src: 'watchstrap/watchstrap.jpg'},
        {src: 'watchstrap/full.jpg'},
        {src: 'watchstrap/buckle_side.jpg', caption: 'The buckle side'},
        {src: 'watchstrap/point_side.jpg', caption: 'The point side'},
      ]}/>
    </MyOuter>
  )
}
