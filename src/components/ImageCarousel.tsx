import {useContext, useState} from "react";
import {Slide} from "react-slideshow-image";
import {LayoutContext} from "../contexts.tsx";

type ImageCarouselItem = {
  src: string;
  caption?: string;
}
type ImageCarouselProps = {
  slideImages: ImageCarouselItem[];
}
export const MyImageCarousel = ({slideImages}: ImageCarouselProps) => {
  const [display, setDisplay] = useState<boolean>();
  const theme = useContext(LayoutContext);

  const displayStyle = display ? {} : {display: 'none'};
  const deviceStyle= theme.is_mobile ? {padding: '0.5rem'} : {padding: '1rem'};

  return (
    <div style={{...{marginTop: '2rem'}}} onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
      <Slide transitionDuration={250} arrows={theme.is_mobile ? false : display} canSwipe={true} indicators={true}>
        {slideImages.map((slideImage, index) => {
          return (
            <div key={index}>
              <div style={{...imageStyle, 'backgroundImage': `url(../images/${slideImage.src})`}}>
                {slideImage.caption == undefined ||slideImage.caption == '' ? null : <span style={{...hoverOnImageStyle, ...deviceStyle, ...displayStyle, ...{marginTop: 'auto'}}}>{slideImage.caption}</span>}
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  )
}
const hoverOnImageStyle = {
  background: '#efefef',
  color: '#000000',
  border: '0'
}
const imageStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  aspectRatio: '3/2',
}