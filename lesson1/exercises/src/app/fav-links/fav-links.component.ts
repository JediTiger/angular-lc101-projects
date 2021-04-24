import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title = 'Favorite links'
  favLinks = ['http://www.apple.com', 'http://tfw2005.com, "http://launchcode.org']
  constructor() { }

  ngOnInit() {
  }

}
