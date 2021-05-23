import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from 'src/app/shared/api.service';
import { LocalStorageService } from 'src/app/shared/local-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isShowMenu:any
  constructor( private apiService: ApiService,
    private localstorageService:LocalStorageService,
    private ngxLoader: NgxUiLoaderService,) { 
   
  }

  ngOnInit(): void {
    this.apiService.isShowMenu.subscribe(data=>{
      console.log(data)
      this.isShowMenu =data
    })
  }

  async logout(){
    this.ngxLoader.start()
    const res:any = await this.apiService.post('user/logout/',{})
    this.localstorageService.clearAllLocalStoreData()

  }

}
