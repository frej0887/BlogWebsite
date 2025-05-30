import {Dinosaur} from "./projects/Dinosaur.tsx";
import {WatchStrap} from "./projects/WatchStrap.tsx";
import {TableClock} from "./projects/TableClock.tsx";

export const currentProjects = [{
  project: <Dinosaur/>,
  previewName: 'Dinosaur watering can',
  previewText: 'A storebought dinosaur shaped watering can painted to look better.',
  previewImage: 'images/wateringcan_after.jpg'
},{
  project: <WatchStrap/>,
  previewName: 'Handmade leather watchstrap',
  previewText: 'Leather watchstrap to replace an old broken one',
  previewImage: ''
},{
  project: <TableClock/>,
  previewName: 'Table clock',
  previewText: '',
  previewImage: ''
}];