import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeSidenav: boolean = false;
  getActiveSidenav(event: boolean) {
    this.activeSidenav = event;
  }
}
