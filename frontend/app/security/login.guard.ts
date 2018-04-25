import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from './user/user.service';
import {CoreService} from '../core/core.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router,
                private userService: UserService,
                private coreService: CoreService) {

    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> {
        return this.userService.checkCurrentUser()
            .map((value: boolean) => {
                if (value) {
                    this.router.navigate([this.coreService.homePage]);
                }
                return !value;
            });
    }
}
