import {Component, OnInit} from '@angular/core';
import {UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faUser = faUser
  faLock = faLock

  loginForm!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['dashboard']).then()
      },
      error: () =>{
        alert('اسم المستخدم او كلمة المرور خاطئة !!!')
      }
    })
  }

}
