import {Dinosaur} from "./projects/Dinosaur.tsx";
import {WatchStrap} from "./projects/WatchStrap.tsx";
import {TableClock} from "./projects/TableClock.tsx";
import { WorkhourCalculator } from "./projects/WorkhourCalculator.tsx";

export const currentProjects = [{
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
},{
  project: <WorkhourCalculator/>,
  previewName: 'Workhour Calculator',
  previewText: 'Upcoming...',
  previewImage: ''
}
];