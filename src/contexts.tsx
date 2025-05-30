import {createContext, type ReactNode} from "react";
import {Dinosaur} from "./projects/Dinosaur.tsx";
import {WatchStrap} from "./projects/WatchStrap.tsx";
import {TableClock} from "./projects/TableClock.tsx";

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
  project: <WatchStrap/>,
  previewName: 'Hand-made leather watchstrap',
  previewText: '',
  previewImage: ''
},{
  project: <TableClock/>,
  previewName: 'Table clock',
  previewText: '',
  previewImage: ''
}];


export const ProjectContext = createContext<ProjectMapType[]>(currentProjects)