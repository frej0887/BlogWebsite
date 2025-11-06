import {createContext, type ReactNode} from "react";
import {LIST_LIST} from "./projects/dataLists.tsx";

type layoutContext = {
  is_mobile: boolean;
}

export const LayoutContext = createContext<layoutContext>({is_mobile: false});

export type ProjectListType = {
  type: string;
  title: string;
  projectMapTypes: ProjectMapType[];
}

export type ProjectMapType = {
  project: ReactNode;
  previewName: string;
  previewText: string;
  previewImage?: string;
}

export const ListContext = createContext<ProjectListType[]>(LIST_LIST)
