import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/models/balance.model';
import { BalanceDataService } from 'src/app/services/balance-data.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
  providers: [CurrencyPipe]
})
export class BalanceComponent implements OnInit {

  isIncrease!: boolean;
  balance!: Balance;
  withdraw!: number;
  deposit!: number;
  totalBalance!: number;

  constructor( 
    private balanceDataService: BalanceDataService,
    ) { }

  ngOnInit(): void {
    this.getBalance();
    
  }

  getBalance(){
    this.balanceDataService.getBalance().subscribe(
      data => {
      this.balance = data,
      this.deposit = data.deposit,
      this.withdraw = data.withdraw,
  
      this.totalBalance = data.deposit + data.withdraw
      })

    this.whereIncrease();
  }
  whereIncrease(){
    if( this.withdraw ){
      this.isIncrease = false
    } else {
      this.isIncrease = true
    }
  }


}
