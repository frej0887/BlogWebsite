import {useParams} from "react-router-dom";
import {useContext} from "react";
import {ListContext} from "../contexts.tsx";
import {NoPage} from "./NoPage.tsx";

export const SingleProject = () => {
  const { type, projectId } = useParams();

  const projectList = useContext(ListContext);
  if (!type || !projectId)
    return <NoPage/>
  const project = projectList[type].projectMapTypes;
  if (!project || parseInt(projectId) >= project.length)
    return <NoPage/>

  return project[parseInt(projectId)].project;
}
