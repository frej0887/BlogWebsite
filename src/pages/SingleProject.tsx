import {useParams} from "react-router-dom";
import {useContext} from "react";
import {ListContext} from "../contexts.tsx";
import {NoPage} from "./NoPage.tsx";

export const SingleProject = () => {
  const { type, projectId } = useParams();
  const projectList = useContext(ListContext);

  if (!projectId)
    return <NoPage/>
  if (!type)
    return <NoPage/>
  const project = projectList.find((x) => x.type === type);
  if (!project)
    return <NoPage/>
  if (isNaN(parseInt(projectId)))
    return <NoPage/>
  return project.projectMapTypes[parseInt(projectId)].project
}
