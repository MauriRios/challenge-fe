import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction-data.model';
import { TransactionDataService } from 'src/app/services/transaction-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  transactions: Transaction[] =[];


  constructor( 
    private transactionDataService : TransactionDataService) { 
      this.getTransactions();
    }

  ngOnInit(): void {
    
  }

  getTransactions(){
    this.transactionDataService.getTransactions().subscribe(data => this.transactions = data);

  }


}
