import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isOpen = false;
  drawerClasses: any = {};
  fabStyles: any = {};
  title = 'DATA_STRUCTURES_ALGORITHMS';

  toggleDrawer() {
    this.isOpen = !this.isOpen;
    this.fabStyles = {
      'background-color': this.isOpen
        ? 'var(--secondary-color)'
        : 'var(--primary-color)',
    };
    console.log(this.isOpen);
    this.drawerClasses = {
      close: !this.isOpen,
      open: this.isOpen,
    };
  }
}
