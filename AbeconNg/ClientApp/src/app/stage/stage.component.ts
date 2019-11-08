import { Component } from '@angular/core';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent {
  ngOnInit() {
    document.body.className = "body-stage";
  }

  ngOnDestroy() {
    document.body.className = "";
  }
}
