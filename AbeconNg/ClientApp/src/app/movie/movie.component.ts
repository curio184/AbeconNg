import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  ngOnInit() {
    document.body.className = "body-movie";
  }

  ngOnDestroy() {
    document.body.className = "";
  }

}
