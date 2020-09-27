import {Component, OnInit} from '@angular/core';
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
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  public isComponentSelected = true;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.departmentId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
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
