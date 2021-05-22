import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ApiService,
    LocalStorageService,
  ],
})
export class SharedModule { }
