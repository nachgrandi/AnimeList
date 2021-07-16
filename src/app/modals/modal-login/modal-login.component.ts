import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  public formLogin:FormGroup;
  public error$ : Observable<any> =  new Observable<any>();
  public userLogin$ : Observable<any> =  new Observable<any>();

  constructor(
    config: NgbModalConfig, 
    private modalService: NgbModal,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.formLogin=this.fb.group({
      user:['',  [Validators.required,Validators.minLength(3), Validators.maxLength(15)]],
      password: ['',  [Validators.required,Validators.minLength(3), Validators.maxLength(15)]],
    });
    this.userLogin$ = userService.login$;
    this.error$ = userService.error$;
  }

  ngOnInit(){
  }

  open(content: any) {
    this.modalService.open(content);
  }

  login(){
    let user: User = Object.assign({},this.formLogin.value);
    this.userService.postLoggin(user)
    this.userLogin$.subscribe(
      (x) => {
        this.modalService.dismissAll();
      }
    )
  }

}
