import ReactMarkdown from 'react-markdown'
import {useParams} from "react-router-dom";
import projectOverview from "./projects.json";

export const SingleProject = () => {
  const {projectId} = useParams();
  if (projectId == undefined) {
    return <div></div>
  }
  const project = projectOverview.filter(x => x.id == parseInt(projectId))
    .map(function (object) {
    return <Project id={object.id} name={object.name} path={object.path} text={object.text} />;
  })

  return (
    <>
      {project}
    </>
  )
}

type ProjectPreview = {
  "id": number,
  "name": string,
  "path": string,
  "text": string,
}

const Project = ({name, id, text}: ProjectPreview) => {

  return (
    <>
      <h1>{name}</h1>
      <p>Id: {id}</p>
      <ReactMarkdown>{text}</ReactMarkdown>
    </>
  )
}