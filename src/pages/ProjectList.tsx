import {useContext} from "react";
import {ProjectContext} from "../contexts.tsx";
import {ProjectPreview} from "../components/ProjectPreview.tsx"

export const ProjectList = () => {

  const projectList = useContext(ProjectContext);
  if (projectList == undefined || projectList.length == 0) return <p>No projects</p>

  const projects = projectList.map((project, id) => ProjectPreview({...project,  id: id}))

  return (
    <>
      <h1>Projects</h1>
      <div>
        {projects}
      </div>
    </>
  )
}