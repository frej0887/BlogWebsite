import {createRef, type PropsWithChildren, type ReactNode, useState} from "react";
import {Slide, type SlideshowRef} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

type Props = {
  children: string | ReactNode;
}

type ImgProps = {
  src: string;
  alt: string;
}

type AProps = {
  href: string;
}

type ListProps = {
  children: ReactNode;
}

type ImageCarouselItem = {
  src: string;
  caption: string;
}

type ImageCarouselProps = {
  slideImages: ImageCarouselItem[];
}

export const MyHeader1 = ({children}: Props) => <h1>{children}</h1>;
export const MyHeader2 = ({children}: Props) => <h2>{children}</h2>;
export const MyHeader3 = ({children}: Props) => <h3>{children}</h3>;
export const MyImage = ({src, alt}: ImgProps) => <div id={"image"}><img src={'../images/' + src} alt={alt}/></div>;
export const MyText = ({children}: Props) => <p>{children}</p>;
export const MyLink = ({href, children}: PropsWithChildren<AProps>) => <a href={href}>{' ' + children}</a>;
export const MyOuter = ({children}: PropsWithChildren<Props>) => <>{children}</>;
export const MyList = ({children}: ListProps) => <ul>{children}</ul>;
export const MyListItem = ({children}: Props) => <li>{children}</li>

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
  height: '800px'
}