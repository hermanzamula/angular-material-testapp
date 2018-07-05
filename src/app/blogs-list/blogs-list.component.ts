import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogsService} from '../blogs.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {

  blogs = [];

  constructor(private http: HttpClient, private service: BlogsService) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/posts')
      .subscribe((r: Array<any>) => this.blogs = r.reverse());

    this.service.postAdded.subscribe(value => {
      this.blogs.unshift(value);
    });
  }

}
