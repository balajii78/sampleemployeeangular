import { Component, OnInit } from '@angular/core';
import {Employee} from '../Model/employee';
import { EmployeeService } from '../Service/employee.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})


export class ListEmpComponent implements OnInit {

  sub:Subscription;
  emplst:Employee[]=[];
  //objkeys=Object.keys;
  //deptname :string;

  constructor(private objEmployee:EmployeeService,private objRoute:Router) { 
   
  }

  


  ngOnInit() {
    
    this.GetAllemployees();
     //this.Fetchdepartment(106);
  

 
  }

  GetAllemployees()
  {
   
 this.sub = this.objEmployee.GetEmployees().subscribe(
    (data:Employee[]) => {
      
      
      console.log(data);
      this.emplst = data;
      

      
     

    }, 
    
       err=>{console.log(Error);}

  );
 

  }

  


  deleteemployee(empkey:any)
  {
    debugger;
    if(confirm("Are you sure you want to delete this record?"))
    {
     
      
    this.objEmployee.DeleteEmployeebyId(empkey.Empid).subscribe(
     (_data =>{
       //this.emplst = this.emplst.filter(d=>d!==emp);
        alert('Record deleted successfully');
        this.GetAllemployees();

     })


    );

    }

  }


  editemployee(empkey:any)
  {
   
    
    this.objRoute.navigate(['emp', empkey.Empid]);     

  }


  AddEmployee()
  {
    this.objRoute.navigate(['emp']);

  }

  ngOnDestroy()
 {

   this.sub.unsubscribe();

 }

}
