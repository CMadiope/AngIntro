import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage: string = 'Message coming from the parent component';
  message: string;
  fromChildOutput: string;

  @ViewChild(PostComponent) childComp!: string;

  constructor() {
    //console.log(this.childComp);
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    //this.message = this.childComp.childMessage;
  }
  receiveMessage($event) {
    this.fromChildOutput = $event
  }
}
