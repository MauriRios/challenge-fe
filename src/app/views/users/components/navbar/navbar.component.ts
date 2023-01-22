import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Button } from 'src/app/models/menu-button.model';
import { MenuDataService } from 'src/app/services/menu-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  alertLength: number = 2;
  buttonsAccount: Button [] = [];
  buttonsUser: Button [] = [];

  constructor( 
    private menuDataService : MenuDataService,
    ) { this.getMenuData(); }

  ngOnInit(): void {
    
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
