import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {

  ngOnInit() {
    document.body.className = "body-drama";
  }

  ngOnDestroy() {
    document.body.className = "";
  }

}
