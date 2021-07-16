import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-modal-create-user',
  templateUrl: './modal-create-user.component.html',
  styleUrls: ['./modal-create-user.component.css']
})
export class ModalCreateUserComponent implements OnInit {
  public formUserCreate:FormGroup;
  public error$ : Observable<any> =  new Observable<any>();
  public userCreate$ : Observable<any> =  new Observable<any>();
  constructor(
    config: NgbModalConfig, 
    private modalService: NgbModal,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.error$ = userService.error$;
    this.userCreate$ = userService.createUser$;
    this.formUserCreate = this.fb.group({
      name: ['',  [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      user: ['',  [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      password: ['',  [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      userRole: 'user',
    });
  }

  ngOnInit(){
  }

  open(content: any) {
    this.modalService.open(content);
  }

  createUser(){
    let user: User = Object.assign({},this.formUserCreate.value);
    user.UserRole = "User"
    this.userService.postCreateUser(user)
    this.userCreate$.subscribe(
      (x) => {
        this.modalService.dismissAll();
      }
    )
  }
}
