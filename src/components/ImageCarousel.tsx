import {createRef, useState} from "react";
import {Slide, type SlideshowRef} from "react-slideshow-image";

type ImageCarouselItem = {
  src: string;
  caption: string;
}
type ImageCarouselProps = {
  slideImages: ImageCarouselItem[];
}
export const MyImageCarousel = ({slideImages}: ImageCarouselProps) => {
  const slideRef = createRef<SlideshowRef>();
  const [display, setDisplay] = useState<boolean>();

  const displayStyle = display ? {} : {display: 'none'};
  return (
    <div className="slide-container">
      <Slide ref={slideRef} transitionDuration={250}>
        {slideImages.map((slideImage, index) => {
          return (
            <div key={index} onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
              <div style={{...divStyle, 'backgroundImage': `url(../images/${slideImage.src})`}}>
                <button onClick={() => slideRef.current?.goBack()} type="button"
                        style={{...spanStyle, ...(display ? {} : {display: 'none'}), ...{marginRight: 'auto'}}}>
                  &lt;
                </button>
                <span
                  style={{...spanStyle, ...(display ? {} : {display: 'none'}), ...{marginTop: 'auto'}}}>{slideImage.caption}</span>
                <button onClick={() => slideRef.current?.goNext()} type="button"
                        style={{...spanStyle, ...displayStyle, ...{marginLeft: 'auto'}}}>
                  &gt;
                </button>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  )
}
const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000',
  border: '0'
}
const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  aspectRatio: '4/3',
}