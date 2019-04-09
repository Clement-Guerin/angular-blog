import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../Post';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() post: Post;

  constructor() {
  }

  ngOnInit() {
  }

  getPostColor() {
    if (this.post.likeIts > 0) {
      return 'green';
    } else if (this.post.likeIts < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }
}
