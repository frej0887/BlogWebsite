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

  return (
    <div className="slide-container">
      <Slide ref={slideRef} transitionDuration={250}>
        {slideImages.map((slideImage, index) => (
          <div key={index} onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
            <div style={{...divStyle, 'backgroundImage': `url(../images/${slideImage.src})`}}>
              <span style={{...spanStyle, ...(display ? {} : {display: 'none'})}}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>

      <div style={buttonBarStyling}>
        <button onClick={() => slideRef.current?.goBack()} type="button" style={buttonStyle}>
          Go Back
        </button>
        <button onClick={() => slideRef.current?.goNext()} type="button" style={buttonStyle}>
          Go Next
        </button>
      </div>
    </div>
  )
}

const spanStyle = {
  padding: '20px',
  marginTop: 'auto',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '800px'
}

const buttonBarStyling = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '0.5rem',
}

const buttonStyle = {
  backgroundColor: "#1abc9c",
  borderRadius: "8px",
  borderStyle: "none",
  color: "#FFFFFF",
  cursor: "pointer",
  display: "inline-block",
  height: "40px",
  lineHeight: "20px",
  listStyle: "none",
  margin: "0",
  outline: "none",
  padding: "10px 16px",
  textDecoration: "none",
  transition: "color 100ms",
  verticalAlign: "baseline",
  touchAction: "manipulation"
}