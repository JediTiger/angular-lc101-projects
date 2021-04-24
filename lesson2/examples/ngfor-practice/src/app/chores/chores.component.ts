import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Clean bathroom'];
   todoTitles = ["Yesterday's Chores", "Next Week's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
