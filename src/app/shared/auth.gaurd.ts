import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs';

// Service
import { LocalStorageService } from './local-storage.service';

/****************************************************************************
@PURPOSE      : Dont allow public pages to get accessed. (without Login)
@PARAMETERS   : N/A
@RETURN       : <boolean>
/****************************************************************************/
@Injectable()
export class CanLoginActivate implements CanActivate {
  constructor(public localStorageService: LocalStorageService, public router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const token: any =  this.localStorageService.getLocalStore('token');
    if (!token) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
  // async canActivate() {
  //   const token: any = await this.localStorageService.getLocalStore('token');
  //   console.log(token)
  //   if (!token) {
  //     this.router.navigate(['/login']);
  

  //   }
    
  //   return token;
  // }

 

//   if (!isAuth) {
//     this.router.navigate(['/login']);
//   }
//   return isAuth;
// }

/****************************************************************************/
