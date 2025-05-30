import {Link} from "react-router-dom";

type ProjectPreview = {
  id: number,
  name: string,
}

export const ProjectPreview = ({name, id}: ProjectPreview) => {
  return (
    <Link to={`/projects/${id}`}>
      <li key={id}>
        <h2>{name}</h2>
      </li>
    </Link>
  )
}