import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  topic: any;
  ngAfterContedChecked() {
    console.log('checked');
  }
  ngOnInit(): void {
    this.topic = this.route.snapshot.paramMap.get('code');
  }
}
