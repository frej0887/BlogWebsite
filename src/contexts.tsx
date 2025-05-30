import {createContext, type ReactNode} from "react";
import Dinosaur from "./projects/Dinosaur.tsx";

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

const currentProjects = [{
  project: <Dinosaur/>,
  previewName: 'Dinosaur watering can',
  previewText: 'Dinosaurs are cool',
  previewImage: ''
},{
  project: <Dinosaur/>,
  previewName: 'Dinosaur watering can2',
  previewText: 'Dinosaurs are cool',
  previewImage: ''
},{
  project: <Dinosaur/>,
  previewName: 'Dinosaur watering can3',
  previewText: 'Dinosaurs are cool',
  previewImage: ''
}];


export const ProjectContext = createContext<ProjectMapType[]>(currentProjects)