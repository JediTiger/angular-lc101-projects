import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
//   chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'Load dishwasher', 'Empty medicine cabinet'];
   finishedChores = ['Robbed bank', 'Laundered funds', 'Bought a new car', 'Helped someone cross the street'];
//   finishedChores = ['Robbed bank', 'Laundered funds', 'Bought a new car', 'Helped someone cross the street', 'Built a bridge', 'Ate some chocolate', 'Watched a bird fly'];
   chores = ['Load dishwasher', 'Empty medicine cabinet'];
//   chores = [];

   targetImage = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';

   constructor() { }

   ngOnInit() {
   }

}
