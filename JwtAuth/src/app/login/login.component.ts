import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';


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
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  onSubmit(): void {

    this.http.post('http://localhost:8000/api/login', this.loginForm.getRawValue(), {
      withCredentials: true
    }).subscribe({
      next: () => {
        this.router.navigate(['../dashboard'])
      },
      error: () => {
        alert('اسم المستخدم او كلمة المرور خاطئة !!!');
      }
    });

  }

}
