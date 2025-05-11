import {useContext} from "react";
import {LayoutContext} from "../contexts.tsx";

export const Home = () => {
  const theme = useContext(LayoutContext);
  return (
    <>
      Home
      {theme.is_mobile ? ' mobile' : ' desktop'}
    </>
  )
}