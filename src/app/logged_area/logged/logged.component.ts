import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss'],
})
export class LoggedComponent implements OnInit {
  faGear = faGear;

  name: string = '';
  received: any;
  info: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.received = window.sessionStorage.getItem('register');
    this.info = JSON.parse(this.received);
    this.name = this.info.name.split(' ')[0];
  }

  goToUrl(): void {
    this.router.navigateByUrl('/registration');
  }
}
