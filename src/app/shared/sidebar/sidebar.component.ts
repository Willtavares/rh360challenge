import { Component } from '@angular/core';
import { Event, NavigationEnd, NavigationError, Router } from '@angular/router';
import {
  faCaretDown,
  faIdCardClip,
  faLocationDot,
  faRulerCombined,
  faUsers,
  faWindowRestore,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  faCaretDown = faCaretDown;
  faRulerCombined = faRulerCombined;
  faWindowRestore = faWindowRestore;
  faLocationDot = faLocationDot;
  faIdCardClip = faIdCardClip;
  faUsers = faUsers;

  currentRoute!: string;

  readonly registeredAddress: string = '/registered';
  isRegistered: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.receiveURL(this.currentRoute);
      }

      if (event instanceof NavigationError) {
        // Hide progress spinner or progress bar

        // Present error to user
        console.log(event.error);
      }
    });
  }

  receiveURL(url: string): void {
    console.log('Este é o endereço: ', url);
    if (url === this.registeredAddress) {
      this.isRegistered = true;
    } else {
      this.isRegistered = false;
    }

    console.log(11, this.isRegistered);
  }
}
