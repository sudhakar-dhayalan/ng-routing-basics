import {Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      <span>You've clicked department with id = {{departmentId}}</span>
      <br>Child components
      <br><button (click)="goToOverview()" [class.active]="isComponentSelected">Overview Component</button>
      <button (click)="goToContact()" [class.active]="!isComponentSelected">Contact Component</button>
      <router-outlet></router-outlet>

      <br><button (click)="goToPrevious()">Previous</button>&nbsp;&nbsp;
      <button (click)="goToNext()">Next</button>

      <br>
      <button (click)="goBack()">Back</button>

    </p>
  `,
  styles: [`
    .active {
      color: green;
    }
  `
  ]
})
export class DepartmentDetailComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked,
AfterViewInit ,AfterViewChecked, OnDestroy{
  public departmentId;
  public isComponentSelected = true;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.departmentId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log('ngOnInit child');
  }


  ngOnChanges() {
    console.log('ngOnChanges child');
  }
  ngDoCheck() {
    console.log('ngDoCheck child');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit child');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked child');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit child');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked child');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy child');
  }
  // tslint:disable-next-line:typedef
  goToPrevious() {
    this.departmentId = this.departmentId - 1;
    this.router.navigate(['/departments', this.departmentId]);
  }

  // tslint:disable-next-line:typedef
  goToNext() {
    this.departmentId = this.departmentId + 1;
    this.router.navigate(['/departments', this.departmentId]);
  }

  // tslint:disable-next-line:typedef
  goBack() {
    /*this.router.navigate(['/departments', {id: this.departmentId}]);*/
    /* Relative Path */
    this.router.navigate(['../', {id: this.departmentId}]);
  }

  // tslint:disable-next-line:typedef
  goToOverview() {
    this.router.navigate(['overview'], {relativeTo: this.activatedRoute});
    this.isComponentSelected = true;
  }

  // tslint:disable-next-line:typedef
  goToContact() {
    this.router.navigate(['contact'], {relativeTo: this.activatedRoute});
    this.isComponentSelected = false;
  }
}
