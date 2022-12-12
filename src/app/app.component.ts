import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from './app.service';
import { User } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appService: AppService) {}
  
  title = 'Users';
  
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  users: any[] = [];
  userCount = 0;
  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {

    // this.appService.addUser(this.userForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
    //   console.log('message::::', data);
    //   this.userCount = this.userCount + 1;
    //   console.log(this.userCount);
    //   this.userForm.reset();
    //   this.getAllUsers();
    // });
    this.appService.addUser(this.userForm.value);
    this.userForm.reset();
    this.getAllUsers();
    // {
    //   this.userCount = this.userCount + 1;
    //   console.log(this.userCount);
    //   this.userForm.reset();
    //   this.getAllUsers();
    // }
  }

  getAllUsers() {
    // this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
    //     this.users = users;
    // });
    
      this.users = this.appService.getUsers();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  
}
