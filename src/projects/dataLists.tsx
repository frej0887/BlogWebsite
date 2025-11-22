import {Dinosaur} from "./material/Dinosaur.tsx";
import {WatchStrap} from "./material/WatchStrap.tsx";
import {BananaPancakes} from "./recipes/BananaPancakes.tsx";
import {BananaIceCream} from "./recipes/BananaIceCream.tsx";
import {Website} from "./code/Website.tsx";
import {GalaxyBuds} from "./repairs/GalaxyBuds.tsx";
import {MoneyCountingHelper} from "./code/MoneyCountingHelper.tsx";

const materialContent = [{
  project: <Dinosaur/>,
  previewName: 'Dinosaur watering can',
  previewText: 'A storebought dinosaur shaped watering can painted to look better.',
  previewImage: 'images/watering_can/left.jpg'
},{
  project: <WatchStrap/>,
  previewName: 'Leather watchstrap',
  previewText: 'Leather watchstrap to replace an old broken one',
  previewImage: 'images/watchstrap/watchstrap.jpg'
}];

const recipeContent = [{
  project: <BananaPancakes/>,
  previewName: 'Banana pancakes',
  previewText: ''
},{
  project: <BananaIceCream/>,
  previewName: 'Banana ice cream',
  previewText: ''
}];

const codeContent = [{
  project: <Website/>,
  previewName: 'Website',
  previewText: 'This website',
  previewImage: 'images/website.jpg'
},{
  project: <MoneyCountingHelper/>,
  previewName: 'Money Counter',
  previewText: 'Maths is hard',
  previewImage: 'images/money.jpg'
}]

/*const origamiContent = [{
  project: <></>,
  previewName: 'Origami',
  previewText: '',
  previewImage: ''
}];*/

const repairContent = [{
  project: <GalaxyBuds/>,
  previewName: 'Galaxy Buds 2 Pro',
  previewText: 'Fixing washed Galaxy Buds 2 Pro',
  previewImage: ''
}];

const repairQuickLinks = [
  {title: "Replace laptop keyboard", url:"https://www.youtube.com/watch?v=YIJ-1oTwb48"}
]

export const LIST_LIST = [
  {title: "Material projects", type: "material", projectMapTypes: materialContent, quickLinks: []},
  //{title: "Origami", type: "origami", projectMapTypes: origamiContent, quickLinks: []},
  {title: "Repairs", type: "repairs", projectMapTypes: [], quickLinks: repairQuickLinks},
  {title: "Coding", type: "code", projectMapTypes: codeContent, quickLinks: []},
  {title: "Recipes", type: "recipes", projectMapTypes: recipeContent, quickLinks: []},
]
