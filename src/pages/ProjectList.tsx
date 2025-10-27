import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import {LayoutContext, ListContext} from "../contexts.tsx";
import {NoPage} from "./NoPage.tsx";

export const ProjectList = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const theme = useContext(LayoutContext);
  const projectList = useContext(ListContext);
  if (!type)
    return <NoPage/>
  const projects = projectList.filter((x) => x.type === type);
  if (projects.length != 1)
    return <NoPage/>
  const project = projects[0]

  return (
    <>
      <h1>{project.title}</h1>
      {
        project.projectMapTypes.map(({previewName, previewImage, previewText}, id) =>
          <div onClick={() => navigate(`/${type}/${id}`)} style={theme.is_mobile ? styleMobile : styleDesktop} key={previewName}>
            <div>
              <h2>{previewName}</h2>
              <p>{previewText}</p>
            </div>
            {previewImage ? <img src={previewImage} style={theme.is_mobile ? {width: '100%'} : {width: "40%", height: "auto"}}/> : null}
          </div>
        )
      }
    </>
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
