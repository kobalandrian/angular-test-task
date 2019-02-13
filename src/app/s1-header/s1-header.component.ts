import { Input, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User, DataService } from '../../app/user.service';

export class FullUser  {
  first_name: string;
  last_name: string;
  email: string;
  password: number;
  phone: number;
  country: number;
}

@Component({
  selector: 'app-s1-header',
  templateUrl: './s1-header.component.html',
  styleUrls: ['./s1-header.component.css'],
  providers: [DataService]
})
export class S1HeaderComponent implements OnInit {

  myForm: FormGroup;
  items: User[] = [];
  fulluser: FullUser = new FullUser();

  constructor(private dataService: DataService) {
    this.myForm = new FormGroup({
      // 'first_name': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,}')]),
      // 'email': new FormControl('', [ Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]),
      'last_name': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,}')]),
      'password': new FormControl('', [Validators.required, Validators.pattern('[0-9].{6,12}')]),
      'phone': new FormControl('', [Validators.required, Validators.pattern('[0-9].{8}')]),
      'country': new FormControl('', [Validators.required, Validators.pattern('[0-9].{1}')])
    });
  }

  ngOnInit() {
    this.items = this.dataService.getData();
    console.log(this.items);
  }

 submit() {
    console.log(this.myForm.value);
    console.log(this.fulluser);
    alert('Registration has been completed!');
  }

}
