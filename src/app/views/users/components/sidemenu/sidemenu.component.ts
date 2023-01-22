import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Button } from 'src/app/models/menu-button.model';
import { MenuDataService } from 'src/app/services/menu-data.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  buttonsAccount: Button [] = [];
  buttonsUser: Button [] = [];

  constructor( 
    private menuDataService : MenuDataService,
    ) { }

  ngOnInit(): void {
    this.getMenuData();
  }

  getMenuData(){
    forkJoin([
      this.menuDataService.getButtonsAccount(),
      this.menuDataService.getButtonsUser()
  ]).subscribe(([buttonsAccount, buttonsUser]) => {
    //account
    this.buttonsAccount = buttonsAccount;  
    //user
    this.buttonsUser = buttonsUser;
    
  });
  }

}
