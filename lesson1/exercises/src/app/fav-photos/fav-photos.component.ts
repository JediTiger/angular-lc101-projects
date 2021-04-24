import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite random images from around the web';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i.kym-cdn.com/entries/icons/original/000/010/114/Transformer_Insigina_Wipe.gif';
  image3 = 'https://images-gmi-pmc.edge-generalmills.com/ca219ec8-c4f6-4e86-992c-68dd5671d4c8.jpg';

  constructor() { }

  ngOnInit() {
  }

}