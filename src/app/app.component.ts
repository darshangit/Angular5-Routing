import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './user/auth.service';

@Component({
    selector: 'pm-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    pageTitle = 'Acme Product Management';

    constructor(private authService: AuthService, private router: Router) { }

    logOut(): void {
        this.authService.logout();
        this.router.navigateByUrl('/welcome'); // remove every secondary parameter attached to the url.
    }
}
