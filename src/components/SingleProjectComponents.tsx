import {type PropsWithChildren, type ReactNode, useContext} from "react";
import 'react-slideshow-image/dist/styles.css'
import {LayoutContext} from "../contexts.tsx";

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

type DateProps = {
  date: Date
}

export const MyHeader1 = ({children}: Props) => <h1>{children}</h1>;
export const MyProjectTitle = ({date, children}: PropsWithChildren<DateProps>) => <div style={{marginBottom: '1rem'}}>
  <h1>{children}</h1>
  <i>{date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear().toString()}</i>
</div>;
export const MyHeader2 = ({children}: Props) => <h2>{children}</h2>;
export const MyHeader3 = ({children}: Props) => <h3>{children}</h3>;
export const MyImage = ({src, alt}: ImgProps) => {
  const theme = useContext(LayoutContext);
  return <div id={"image"}><img src={'../images/' + src} alt={alt} className={theme.is_mobile ? 'image-mobile' : 'image-desktop'}/></div>;
}
export const MyText = ({children}: Props) => {
  const theme = useContext(LayoutContext);
  return (<p style={{textAlign: (theme.is_mobile ? 'left' : 'justify')}}>{children}</p>)
};
export const MyLink = ({href, children}: PropsWithChildren<AProps>) => <a href={href}> {children}</a>;
export const MyOuter = ({children}: PropsWithChildren<Props>) => <>{children}</>;
export const MyList = ({children}: ListProps) => <ul>{children}</ul>;
export const MyListItem = ({children}: Props) => <li>{children}</li>
export const MyEmail = ({href, children}: PropsWithChildren<AProps>) => <a href={'mailto:' + href}> {children}</a>;