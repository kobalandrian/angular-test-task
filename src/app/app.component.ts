import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countDown;
  counter = 900;
  tick = 1000;
  ngOnInit() {
    this.countDown = timer(0, this.tick).pipe(
      take(this.counter),
      map(() => --this.counter)
    );
  }
  /*
  showMenu(): void {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  */
}

@Pipe({name: 'formatTime'})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }
}
