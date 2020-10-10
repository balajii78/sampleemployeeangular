import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddEmpComponent } from './add-emp/add-emp.component';


const routes: Routes = [

  {path:'',redirectTo:'emplist',pathMatch:'full'}
  ,{path:'emplist',component:ListEmpComponent}
  ,{path:'emp',component:AddEmpComponent}
  ,{path:'emp/:id',component:AddEmpComponent}
  ,{path:'**',component:PagenotfoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
