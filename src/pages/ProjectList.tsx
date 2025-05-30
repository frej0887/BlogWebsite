import {Link} from "react-router-dom";
import {useContext} from "react";
import {ProjectContext} from "../contexts.tsx";

export const ProjectList = () => {

  const projectList = useContext(ProjectContext);
  if (projectList == undefined || projectList.length == 0) return <p>No projects</p>

  const projects = projectList.map((project, id) => ProjectPreview({name:project.previewName, id}))

  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects}
      </ul>
    </>
  )
}

type ProjectPreview = {
  id: number,
  name: string,
}

const ProjectPreview = ({name, id}: ProjectPreview) => {
  return (
    <Link to={`/projects/${id}`}>
      <li key={id}>
        <h2>{name}</h2>
      </li>
    </Link>
  )
}