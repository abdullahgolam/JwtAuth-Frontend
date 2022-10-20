import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username:any;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {

  }

}
