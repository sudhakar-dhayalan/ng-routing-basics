import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-lis',
  template: `
    <div>
      <h3>Department List</h3>
<!--      <ul class='listItems' *ngFor="let department of departmentList">-->
<!--        <a role="button"><li>{{department.id}} {{department.name}}</li></a>-->
<!--      </ul>-->

      <hr>
      <ul class="listItems">
        <li (click)="onClickFunc(department)" *ngFor="let department of departmentList">
          <button style="margin-bottom: 2%;" [class.selected]="isSelectedId(department)">
            {{department.id}} {{department.name}}
          </button>
        </li><br>
      </ul>

      <input [(ngModel)]="firstName" />
    </div>
  `,
  styles: [`
    .listItems {
      list-style-type: none;
    }

    .selected {
      background: green;
      font-style: italic;
    }
  `]
})
export class DepartmentListComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked,
  AfterViewInit ,AfterViewChecked, OnDestroy {

    firstName;
  public selectedId;
  public departmentList = [
    { id: '1', name: 'Angular'},
    { id: '2', name: 'React'},
    { id: '3', name: 'AngularJs'},
    { id: '4', name: 'Spring'}
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log('department constructor');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngOnInit(){
    console.log('ngOnInit  ');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  // tslint:disable-next-line:typedef
  onClickFunc(department) {
    /*this.router.navigate(['/departments', department.id]);*/
    /* Relative Path */
    this.router.navigate([department.id], {relativeTo: this.activatedRoute});
  }

  // tslint:disable-next-line:typedef
  isSelectedId(department) {
    // tslint:disable-next-line:triple-equals
    return department.id == this.selectedId;
  }
}
