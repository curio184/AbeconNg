import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  ngOnInit() {
    document.body.className = "body-home";
  }

  ngOnDestroy() {
    document.body.className = "";
  }

}
