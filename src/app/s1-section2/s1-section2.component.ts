import { Component, OnInit } from '@angular/core';
import {User, USERS} from '../../app/table-users';

@Component({
  selector: 'app-s1-section2',
  templateUrl: './s1-section2.component.html',
  styleUrls: ['./s1-section2.component.css']
})
export class S1Section2Component implements OnInit {

users = USERS;

  constructor() { }

  ngOnInit() {
  }

}
