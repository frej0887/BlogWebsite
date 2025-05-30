
import {useParams} from "react-router-dom";
import {NoPage} from "./NoPage.tsx";
import {useContext} from "react";
import {ProjectContext} from "../contexts.tsx";

export const SingleProject = () => {
  const { projectId } = useParams();
  const projectList = useContext(ProjectContext);

  if (projectId == undefined) return <NoPage/>
  if (projectList == undefined || projectList.length < parseInt(projectId)) return <NoPage/>

  return projectList[parseInt(projectId)].project;
}
