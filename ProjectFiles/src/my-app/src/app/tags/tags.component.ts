import { Component, OnInit } from '@angular/core';
import {Tag} from "../Tag";
import { Observable, of} from 'rxjs';
import { TagsService } from '../tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: Tag[];

  constructor(private tagService: TagsService) {
    tagService.getTags().subscribe(tags => this.tags = tags);
  }

  ngOnInit() {
  }
}
