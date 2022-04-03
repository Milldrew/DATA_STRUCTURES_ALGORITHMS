import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  constructor() {}
  menuItems = [
    { name: 'Home', link: '/home' },
    { name: 'Data Structures Introduction', link: '/topic/data' },
    { name: 'Algorithms Introduction', link: '/topic/algorithms' },
    { name: 'Big O', link: '/topic/bigo' },
    { name: 'Hash Tables', link: '/topic/hash' },
    { name: 'Stacks and Queues', link: '/topic/stacks-queues' },
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
