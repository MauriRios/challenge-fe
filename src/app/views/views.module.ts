import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    
  ],
  exports: [
    UsersModule,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersModule
    

  ]
})
export class ViewsModule { }
