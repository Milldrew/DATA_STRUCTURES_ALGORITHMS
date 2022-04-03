import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  constructor() {}
  menuItems = [
    { name: 'Home', link: 'foo' },
    { name: 'Data Structures Introduction', link: 'foo' },
    { name: 'Algorithms Introduction', link: 'foo' },
    { name: 'Big O', link: 'foo' },
    { name: 'Hash Tables', link: 'foo' },
    { name: 'Stacks and Queues', link: 'foo' },
    { name: 'Recursion', link: 'foo' },
    { name: 'Dynamic Programming', link: 'foo' },
    { name: 'Node Based Data Structures', link: 'foo' },
    { name: 'Binary Trees', link: 'foo' },
    { name: 'Heaps', link: 'foo' },
    { name: 'Trie', link: 'foo' },
    { name: 'Graphs', link: 'foo' },
    { name: 'Space Constraints', link: 'foo' },
    { name: 'Code Optimization', link: 'foo' },
  ];

  isOpen = false;

  ngOnInit(): void {}
}
