import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked,
AfterViewInit ,AfterViewChecked, OnDestroy {
  title = 'ng-routing-basics';
    constructor(){
    console.log('app component constructor');
  }

  ngOnChanges() {
    console.log('ngOnChanges from app component');
  }
  ngOnInit(){
    console.log('ngOnInit from app component');
  }
  ngDoCheck() {
    console.log('ngDoCheck from app component');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit from app component');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked from app component');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit from app component');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked from app component');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy from app component');
  }

}
