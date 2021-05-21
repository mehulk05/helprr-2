import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';

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
  async canActivate() {
    const token: any = await this.localStorageService.getLocalStore('token');
    if (!token) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
/****************************************************************************/
