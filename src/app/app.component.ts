import {Component} from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  posts: Array<Post> = [
    new Post('Mon premier post','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ducimus enim optio repellat reprehenderit. A earum eum ipsam odio quo. Dicta ipsa ipsam nisi provident tempora, tempore voluptatem! Praesentium, qui.'),
    new Post('Mon deuxième post','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ducimus enim optio repellat reprehenderit. A earum eum ipsam odio quo. Dicta ipsa ipsam nisi provident tempora, tempore voluptatem! Praesentium, qui.'),
    new Post('Encore un post','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ducimus enim optio repellat reprehenderit. A earum eum ipsam odio quo. Dicta ipsa ipsam nisi provident tempora, tempore voluptatem! Praesentium, qui.'),
  ];

  constructor() {
    console.log(this.posts);
  }


}
