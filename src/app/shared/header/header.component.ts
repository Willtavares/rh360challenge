import { Component } from '@angular/core';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faGear = faGear;

  name: string = 'Anônimo';
  received: any;
  info: any;

  ngOnInit(): void {
    this.received = window.sessionStorage.getItem('register');
    this.info = JSON.parse(this.received);
    this.name = this.info.name.split(' ')[0];
  }
}
