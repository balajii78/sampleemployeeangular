import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Employee} from '../Model/employee';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private objClient:HttpClient) { }

 // url ="http://localhost:53893/Api/Employees/";
 url = environment.url;

  
 
  /* GetDepartments()
   {
   // return this.objClient.get<any[]>(this.url+'/AllDepartments');
   return this.objClient.get<any[]>(this.Depturl+'Departments.json');

   }*/

   //Fetch all employees
   
  IsAlreadyExists(employee:Employee)
  {
    
    alert("Inside already exists");    
     
    
    return this.objClient.post<any>(this.url+'IsAlreadyExists/',employee);
    //return this.objClient.get<any>(`${ this.url }IsAlreadyExists?associateId=${employee. AssociateID }&emailid=${employee.Emailid}`);
  } 

   GetEmployees()
   {
     
       return this.objClient.get<Employee[]>(this.url+'GetAllEmployees');
      
      //return this.objClient.get<Employee[]>(this.Empurl+'Employees.json');
   }
 

   //Fetch a specific employee detail
   GetEmployeebyID(Empid:number)
   {
    
   return this.objClient.get<Employee>(this.url+'GetEmployeeDetailsById/'+Empid);
   
   
   }
   //Add employee
  AddEmployee(employee:Employee)
  {
    
    return this.objClient.post<Employee>(this.url+'InsertEmployeeDetail/',employee);
   //return this.objClient.post<Employee>(this.Empurl+'/InsertEmployee/',employee);

  }
 
   //Delete Employee by id
   DeleteEmployeebyId(Empid:number)
   {
    
    
    return this.objClient.delete<number>(this.url+'DeleteEmployeeDetail?id='+Empid);
    // return this.objClient.delete<any>(this.Empurl+'Employees/'+Empkey+'.json');

   } 
   //Update Employee by id
  UpdateEmployee(employee:Employee)
  {
    
    return this.objClient.put<Employee>(this.url+'UpdateEmployeeDetail/',employee);
   
 //   return this.objClient.put<Employee>(this.Empurl+'Employees/'+Empkey+'.json',employee);
 
  }
  
  


}
