import {Dinosaur} from "./projects/Dinosaur.tsx";
import {WatchStrap} from "./projects/WatchStrap.tsx";
import {TableClock} from "./projects/TableClock.tsx";
import {BananaPancakes} from "./recipes/BananaPancakes.tsx";
import {BananaIceCream} from "./recipes/BananaIceCream.tsx";

const dataLists = [{
  project: <Dinosaur/>,
  previewName: 'Dinosaur watering can',
  previewText: 'A storebought dinosaur shaped watering can painted to look better.',
  previewImage: 'images/watering_can/left.png'
},{
  project: <WatchStrap/>,
  previewName: 'Leather watchstrap',
  previewText: 'Leather watchstrap to replace an old broken one',
  previewImage: 'images/watchstrap/watchstrap.png'
},{
  project: <TableClock/>,
  previewName: 'Table clock',
  previewText: 'Upcoming...',
  previewImage: ''
}];

const recipesData = [{
  project: <BananaPancakes/>,
  previewName: 'Banana pancakes',
  previewText: ''
},{
  project: <BananaIceCream/>,
  previewName: 'Banana ice cream',
  previewText: ''
}];

const origamiData = [{
  project: <BananaPancakes/>,
  previewName: 'Origami',
  previewText: '',
  previewImage: ''
}];

export const LIST_LIST = {
  projects: {title: "Projects", type: "projects", projectMapTypes: dataLists},
  recipes: {title: "Recipes", type: "recipes", projectMapTypes: recipesData},
  origami: {title: "Origami", type: "origami", projectMapTypes: origamiData},
}

export const LIST_LIST_KEYS = ["projects", "origami", "recipes"]
