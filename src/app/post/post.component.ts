import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor() {}

  title: string = 'List of Posts';
  messagePost: string = 'Message Post';
  postMessage: string = 'Message from post parent';

  childMessage: string = 'From Child component';
  outputChildMessage: string = 'Message from output child';

  @Input() fromParent!: string;

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }
}
