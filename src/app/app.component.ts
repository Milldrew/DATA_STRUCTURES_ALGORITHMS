import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isOpen = false;
  drawerStyles: any = {
    'background-color': this.isOpen ? 'red' : 'orange',
  };
  title = 'DATA_STRUCTURES_ALGORITHMS';

  toggleDrawer() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
    this.drawerStyles = {
      'background-color': this.isOpen ? 'red' : 'orange',
      transform: this.isOpen ? 'translate(100%, 0%)' : 'translate(0%, 0%)',
    };
  }
}
