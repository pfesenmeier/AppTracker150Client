import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
    
    constructor(private router: Router) { }

    canActivate(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            if (!localStorage.getItem('id_token') || localStorage.getItem('IsAdmin') != 'true') {
                this.router.navigate(['/index']);
                return observer.next(false);
            } else {
                return observer.next(true);
            }
        });
    }
}