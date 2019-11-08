import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  ngOnInit() {
    document.body.className = "body-profile";
  }

  ngOnDestroy() {
    document.body.className = "";
  }

}
