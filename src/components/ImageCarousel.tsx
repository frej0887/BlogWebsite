import {useState} from "react";
import {Slide} from "react-slideshow-image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

type ImageCarouselItem = {
  src: string;
  caption: string;
}
type ImageCarouselProps = {
  slideImages: ImageCarouselItem[];
}
export const MyImageCarousel = ({slideImages}: ImageCarouselProps) => {
  const [display, setDisplay] = useState<boolean>();

  const displayStyle = display ? {} : {display: 'none'};
  const nextArrow = <button type="button" style={{...hoverOnImageStyle, ...displayStyle, ...{marginLeft: 'auto'}}}><SlArrowRight/></button>;
  const prevArrow = <button type="button" style={{...hoverOnImageStyle, ...displayStyle, ...{marginLeft: 'auto'}}}><SlArrowLeft/></button>;
  return (
    <div style={{marginTop: '2rem'}} onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
      <Slide transitionDuration={250} arrows={true} nextArrow={nextArrow} prevArrow={prevArrow} canSwipe={true}>
        {slideImages.map((slideImage, index) => {
          return (
            <div key={index}>
              <div style={{...imageStyle, 'backgroundImage': `url(../images/${slideImage.src})`}}>
                {slideImage.caption ? <span style={{...hoverOnImageStyle, ...displayStyle, ...{marginTop: 'auto'}}}>{slideImage.caption}</span> : null}
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  )
}
const hoverOnImageStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000',
  border: '0'
}
const imageStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  aspectRatio: '4/3',
}