import {useNavigate} from "react-router-dom";
import {LayoutContext, type ProjectMapType} from "../contexts.tsx";
import {useContext} from "react";

type AddId = {
  id: number,
}

export const ProjectPreview = ({previewName, previewImage, previewText, id}: ProjectMapType & AddId) => {
  const theme = useContext(LayoutContext);
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/projects/${id}`)} style={theme.is_mobile ? styleMobile : styleDesktop}>
      <div>
        <h2>{previewName}</h2>
        <p>{previewText}</p>
      </div>
      {previewImage ? <img src={previewImage} style={theme.is_mobile ? {width: '100%'} : {width: "40%", height: "auto"}}/> : null}
    </div>
  )
}


const styleMobile = {}

const styleDesktop = {
  display: "flex",
  // alignItems: "flex-start",
  justifyContent: "space-between",
  cursor: "pointer",
  marginBottom: "2rem",
}