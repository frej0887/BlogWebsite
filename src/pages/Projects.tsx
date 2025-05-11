import projectOverview from './projects.json'
import {Link} from "react-router-dom";

export const Projects = () => {

  const projects = projectOverview.map(function (object) {
    return <ProjectPreview id={object.id} name={object.name} path={object.path}/>;
  })

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
  "id": number,
  "name": string,
  "path": string,
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