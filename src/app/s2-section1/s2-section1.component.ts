import { Component, OnInit } from '@angular/core';
import {Comment, COMMENTS} from '../../app/comments';

@Component({
  selector: 'app-s2-section1',
  templateUrl: './s2-section1.component.html',
  styleUrls: ['./s2-section1.component.css']
})
export class S2Section1Component implements OnInit {

comments = COMMENTS;
  constructor() { }

  ngOnInit() {
  }

}
