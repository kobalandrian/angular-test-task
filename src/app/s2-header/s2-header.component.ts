import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { User, DataService } from '../../app/user.service';

@Component({
  selector: 'app-s2-header',
  templateUrl: './s2-header.component.html',
  styleUrls: ['./s2-header.component.css'],
  providers: [DataService]
})
export class S2HeaderComponent implements OnInit {

  myForm: FormGroup;
  params: string;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
    this.myForm = new FormGroup({
      'first_name': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,}')]),
      'email': new FormControl('', [ Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')])
    });
    this.params = route.snapshot.params['id'];
   }

  ngOnInit() {
  }

  submit(first_name, email) {
    first_name = sessionStorage.setItem('item1', first_name);
    email = sessionStorage.setItem('item2', email);
    this.dataService.addData(first_name, email);

    console.log(first_name);
    console.log(email);
    console.log(this.myForm);
    console.log(this.myForm.value);

    alert('Your autorithation will continue...');
    this.router.navigate(['step2']);
  }

}
