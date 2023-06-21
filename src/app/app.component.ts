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
  message: string = 'Message from the Typescript component file';
  fromChildOutput: string;
  imgUrl: string =
    'https://images.unsplash.com/photo-1687226013074-5d59ffeb2625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60';

    

  @ViewChild(PostComponent) childComp!: string;

  constructor() {
    //console.log(this.childComp);
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    //this.message = this.childComp.childMessage;
  }
  receiveMessage($event) {
    this.fromChildOutput = $event;
  }
}
