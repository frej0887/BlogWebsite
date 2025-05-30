import {Link} from "react-router-dom";
import {LayoutContext, type ProjectMapType} from "../contexts.tsx";
import {useContext} from "react";

type AddId = {
  id: number,
}

export const ProjectPreview = ({previewName, previewImage, previewText, id}: ProjectMapType & AddId) => {
  const theme = useContext(LayoutContext);

  return (
    <Link to={`/projects/${id}`} style={theme.is_mobile ? styleMobile : styleDesktop}>
      <div>
        <h2>{previewName}</h2>
        <p>{previewText}</p>
      </div>
      {previewImage ? <img src={previewImage} style={theme.is_mobile ? {width: '100%'} : {width: "40%", height: "auto"}}/> : null}
    </Link>
  )
}


const styleMobile = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  // flexFlow: "wrap",
}

const styleDesktop = {
  display: "flex",
  // alignItems: "flex-start",
  justifyContent: "space-between",
}