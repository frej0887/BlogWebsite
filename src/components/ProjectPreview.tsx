import {Link} from "react-router-dom";
import type {ProjectMapType} from "../contexts.tsx";

type AddId = {
  id: number,
}

export const ProjectPreview = ({previewName, id}: ProjectMapType & AddId) => {
  return (
    <Link to={`/projects/${id}`}>
      <li key={id}>
        <h2>{previewName}</h2>
      </li>
    </Link>
  )
}