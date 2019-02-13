
// import {User} from './s2-header/s2-header.component';

export class User {
    constructor(public first_name: string, public email: string) { }
}

export class DataService {

    private userData: User[] = [
        { first_name: sessionStorage.getItem('item1'), email: sessionStorage.getItem('item2')},
    ];

    getData(): User[] {
        console.log(this.userData);
        return this.userData;
    }
    addData(first_name: string, email: string) {
        this.userData.push(new User(sessionStorage.getItem('item1'), sessionStorage.getItem('item2')));
        console.log(this.userData);
    }

}

/*
import {EventEmitter} from '@angular/core';

export class DataService {
  private clickCnt: number = 0;
  onClick: EventEmitter<number> = new EventEmitter();

  public doClick() {
    this.clickCnt++;
    this.onClick.emit(this.clickCnt);
  }

}
*/
