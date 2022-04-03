import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  constructor() {}
  menuItems = ['foo', 'bar', 'bax'];

  isOpen = false;

  ngOnInit(): void {}
}
