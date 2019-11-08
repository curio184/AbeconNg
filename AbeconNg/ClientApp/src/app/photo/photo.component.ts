import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  ngOnInit() {
    document.body.className = "body-home";
  }

  ngOnDestroy() {
    document.body.className = "";
  }

}
