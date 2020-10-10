import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { HeaderComponent } from './header/header.component';
import {ReactiveFormsModule}  from '@angular/forms';
import { EmployeeService } from './Service/employee.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {HttpClientModule} from '@angular/common/http';
import { ApphighlightDirective } from './apphighlight.directive';
import {NgxPaginationModule} from 'ngx-pagination';  


@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    ListEmpComponent,
    HeaderComponent,
    PagenotfoundComponent,
    ApphighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
