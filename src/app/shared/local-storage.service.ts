import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
  }

  setLocalStore(key, data) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.setItem(key, JSON.stringify(data));
    }
  }

  getLocalStore(key) {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem(key));
    }
  }

  clearStorageFor(key) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.removeItem(key);
    }
  }

  clearStorage() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.clear();
    }
  }

  clearCartItems() {
    this.clearStorageFor('xyz');
  }

  clearAllLocalStoreData() {
    this.clearStorageFor('LoggedUser');
    this.clearStorageFor('token');
  }

}
