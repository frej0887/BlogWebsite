import {type PropsWithChildren, type ReactNode} from "react";
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

export const MyHeader1 = ({children}: Props) => <h1>{children}</h1>;
export const MyHeader2 = ({children}: Props) => <h2>{children}</h2>;
export const MyHeader3 = ({children}: Props) => <h3>{children}</h3>;
export const MyImage = ({src, alt}: ImgProps) => <div id={"image"}><img src={'../images/' + src} alt={alt}/></div>;
export const MyText = ({children}: Props) => <p>{children}</p>;
export const MyLink = ({href, children}: PropsWithChildren<AProps>) => <a href={href}>{' ' + children}</a>;
export const MyOuter = ({children}: PropsWithChildren<Props>) => <>{children}</>;
export const MyList = ({children}: ListProps) => <ul>{children}</ul>;
export const MyListItem = ({children}: Props) => <li>{children}</li>

