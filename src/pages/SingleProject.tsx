import {useParams} from "react-router-dom";
import {useContext} from "react";
import {ListContext} from "../contexts.tsx";
import {NoPage} from "./NoPage.tsx";
import {slugify} from "../tools.ts";

export const SingleProject = () => {
  const { type, projectSlug } = useParams();
  const projectList = useContext(ListContext);

  if (!projectSlug)
    return <NoPage/>
  if (!type)
    return <NoPage/>
  const project = projectList.find((x) => x.type === type);
  if (!project)
    return <NoPage/>
  return project.projectMapTypes.find(({previewName}) => slugify(previewName) == projectSlug)!.project
}
