import { useParams } from "react-router-dom";
import projectOverview from "./projects.json";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export const SingleProject = () => {
  const [post, setPost] = useState('');
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId === undefined) {
      setPost('');
      return;
    }

    const project = projectOverview.find(x => x.id === parseInt(projectId));
    if (project === undefined) {
      setPost('');
      return;
    }

    const fileName = project.path;

    // Fetch the Markdown file
    fetch(fileName)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(text => {
        if (!text) {
          setPost('Sorry, this post is not available');
        }
        else if (text.startsWith('<!doctype html>')) {
          setPost('Sorry, this post is not available');
        }
        else {
          setPost(text);
        }
      })
      .catch(err => {
        console.log("FetchError: " + err);
        setPost('Sorry, this post is not available');
      });
  }, [projectId]);

  return (
    <>
      <ReactMarkdown>{post}</ReactMarkdown>
    </>
  );
}
