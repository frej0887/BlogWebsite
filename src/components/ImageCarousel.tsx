import {useContext, useState} from "react";
import {Slide} from "react-slideshow-image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {LayoutContext} from "../contexts.tsx";

type ImageCarouselItem = {
  src: string;
  caption: string;
}
type ImageCarouselProps = {
  slideImages: ImageCarouselItem[];
}
export const MyImageCarousel = ({slideImages}: ImageCarouselProps) => {
  const [display, setDisplay] = useState<boolean>();
  const theme = useContext(LayoutContext);

  const displayStyle = display ? {} : {display: 'none'};
  const deviceStyle= theme.is_mobile ? {padding: '0.5rem'} : {padding: '1rem'};

  const nextArrow = <button type="button" style={{...hoverOnImageStyle, ...deviceStyle, ...displayStyle, ...{marginLeft: 'auto'}}}><SlArrowRight/></button>;
  const prevArrow = <button type="button" style={{...hoverOnImageStyle, ...deviceStyle, ...displayStyle, ...{marginLeft: 'auto'}}}><SlArrowLeft/></button>;
  const beneathSpacing = theme.is_mobile ? {marginBottom: "10rem"} : {marginBottom: "5rem"};
  return (
    <div style={{...{marginTop: '2rem'}, ...beneathSpacing}} onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
      <Slide transitionDuration={250} arrows={true} nextArrow={nextArrow} prevArrow={prevArrow} canSwipe={true}>
        {slideImages.map((slideImage, index) => {
          return (
            <div key={index}>
              <div style={{...imageStyle, 'backgroundImage': `url(../images/${slideImage.src})`}}>
                {slideImage.caption ? <span style={{...hoverOnImageStyle, ...deviceStyle, ...displayStyle, ...{marginTop: 'auto'}}}>{slideImage.caption}</span> : null}
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
  // width: 'auto',
  aspectRatio: '3/2',
}