import {useParams} from "react-router-dom";
import {ProjectPreview} from "../components/ProjectPreview.tsx";
import {useContext} from "react";
import {ListContext, type ProjectListType} from "../contexts.tsx";
import {NoPage} from "./NoPage.tsx";

export const ProjectList = () => {
  const { type } = useParams();
  const projectList = useContext(ListContext);
  if (!type)
    return <NoPage/>
  const project: ProjectListType = projectList[type];

  return (
    <>
      <h1>{project.title}</h1>
      {
        project.projectMapTypes.map((project, id) => ProjectPreview({id, project, type}))
        }
      <div>
      </div>
    </>
  )
}

