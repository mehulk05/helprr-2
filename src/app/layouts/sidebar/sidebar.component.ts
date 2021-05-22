import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { LocalStorageService } from 'src/app/shared/local-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private apiService: ApiService,
    private localstorageService:LocalStorageService) { 
   
  }

  ngOnInit(): void {
  }

  async logout(){
    console.log("jere")
    const res:any = await this.apiService.post('user/logout/',{})
    this.localstorageService.clearAllLocalStoreData()

  }

}
