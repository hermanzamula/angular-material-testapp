import {Component} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BlogsService} from '../blogs.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['new-blog.component.css']
})
export class NewBlogComponent {

  user: any;
  form: FormGroup;

  constructor(private http: HttpClient, fb: FormBuilder, private service: BlogsService) {
    http.get('http://localhost:3000/users/' + 1).subscribe((user) => this.user = user);
    this.form = fb.group({
      title: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      body: ['', Validators.compose([Validators.required])]
    });
  }

  createBlog() {
    const post = {
      userId: this.user.id,
      title: this.form.get('title').value,
      body: this.form.get('body').value,
      userName: this.user.username
    };
    this.http.post('http://localhost:3000/posts/', post)
      .subscribe(() => this.service.postAdded.next(post));
  }

  cancel() {
    this.form.get('title').reset('');
    this.form.get('body').reset('');
  }

}
