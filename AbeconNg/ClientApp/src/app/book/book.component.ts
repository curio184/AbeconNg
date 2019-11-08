import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  ngOnInit() {
    document.body.className = "body-essay";
  }

  ngOnDestroy() {
    document.body.className = "";
  }
}
