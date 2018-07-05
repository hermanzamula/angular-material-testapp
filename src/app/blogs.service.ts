import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable()
export class BlogsService {

  postAdded = new Subject();

}
