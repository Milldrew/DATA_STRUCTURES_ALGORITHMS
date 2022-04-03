import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isOpen = false;
  drawerClasses: any = {};
  fabStyles = { 'background-color': 'var(--dark-gray)' };
  title = 'DATA_STRUCTURES_ALGORITHMS';

  toggleDrawer() {
    this.isOpen = !this.isOpen;
    this.fabStyles = {
      'background-color': this.isOpen
        ? 'var(--light-gray)'
        : 'var(--dark-gray)',
    };
    console.log(this.isOpen);
    this.drawerClasses = {
      close: this.isOpen,
      open: !this.isOpen,
    };
  }
}
