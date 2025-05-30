import {createContext, type ReactNode} from "react";
import {currentProjects} from "./currentProjects.tsx";

type layoutContext = {
  is_mobile: boolean;
}

export const LayoutContext = createContext<layoutContext>({is_mobile: false});

type ProjectMapType = {
  project: ReactNode;
  previewName: string;
  previewText: string;
  previewImage: string|null;
}


export const ProjectContext = createContext<ProjectMapType[]>(currentProjects)