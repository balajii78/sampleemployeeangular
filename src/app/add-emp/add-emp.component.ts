import { Component, OnInit, ViewChild, ElementRef, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {Employee} from '../Model/employee';
import { debuglog } from 'util';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  //deptlst:any[];
  EmpForm:FormGroup;
  empformlabel:string;
  empformbtnlabel:string;
  empformbtntitle:string;
  emp:Employee;
  sub:Subscription;
  empkey:any;
  isalreadyexists:boolean ;
  //deptname:string;
 
  
  // @ViewChild('empname',{static:false}) employeename:ElementRef;
  @ViewChild("AssociateID",{static:true}) associateid: ElementRef;
  @ViewChild("Name",{static:true}) empname:ElementRef;


  constructor(private objRoute:Router,private objEmpservice:EmployeeService,private objFb:FormBuilder,private objActivatedroute:ActivatedRoute) { }

  

  ngOnInit() {
   /* this.sub = this.objEmpservice.GetDepartments().subscribe(
    (data:any[])=>{
     
  
    this.deptlst =  data;



    }

   );*/

   

   this.EmpForm = this.objFb.group(
  {
    //Empid:[],
    AssociateID:['', [Validators.required,Validators.maxLength(8)]],
    Name:['', [Validators.required,Validators.maxLength(30)]],
    Gender:['M'],
    Designation:['',[Validators.maxLength(20)]],
    EmpAddress:['',[Validators.maxLength(60)]],
    /*DepartmentId:[''],
    departmentname:[''],*/
    Emailid:['', [Validators.required,Validators.email,Validators.maxLength(50)]],
    Phone:[,[Validators.minLength(10),Validators.maxLength(10)]],
    Salary:[,Validators.maxLength(10)]
  });

  

  this.empformbtnlabel = "Save";
  this.empformlabel = "Add Employee";
  this.empformbtntitle = "Click to Save";
  //this.EmpForm.reset();
  this.associateid.nativeElement.focus();
 // this.employeename.nativeElement.focus();
 // this.EmpForm.controls["empname"].patchValue("Balaji");



  this.sub = this.objActivatedroute.paramMap.subscribe(param=>{
  this.empkey =  param.get('id');
    
    
     if(this.empkey!=undefined && this.empkey!=null)
     {
     
      this.objEmpservice.GetEmployeebyID(this.empkey).subscribe(
        (data:Employee) => {
          
           
           console.log(data);
           this.EmpForm.patchValue(data);

           
          
  
        }
    
      );

          this.empformbtnlabel = "Update";
          this.empformlabel = "Edit Employee";
          //this.EmpForm.controls["AssociateID"].disabled ;
          this.associateid.nativeElement.readOnly = true;
          this.empname.nativeElement.focus();
           this.empformbtntitle = "Click to Update";

        
          
     }  
    
    
      

    });



  }

  /*GetDepartment(event:any)
  {
    this.EmpForm.controls['departmentname'].setValue(event.target.options[event.target.options.selectedIndex].text);


  }*/

  get f() { return this.EmpForm.controls; }

  onSubmit()
  {

    
    alert("Inside Submit");
    if (this.EmpForm.invalid) 
    {
      return;
    }
    
    //Validations
    debugger; 
    this.objEmpservice.IsAlreadyExists(this.EmpForm.value).subscribe((data:any)=>
    {
    
     console.log(data);
      
    //  this.isalreadyexists = data;
       //alert(this.isalreadyexists);
       
    if(data)
    {
        alert("Either AssociateID or Mailid already exists");
        return;
    }
    
    if(this.empkey!=undefined && this.empkey!=null)
    {
           
      this.emp = this.EmpForm.value;
      this.emp.Empid =  this.empkey;
      

      //this.emp.EmpId = this.empid;
    
    
      this.sub = this.objEmpservice.UpdateEmployee(this.emp).subscribe( 
        (_d:Employee)=>
       {
           
           console.log(_d);
           alert('Record updated successfully');
           this.objRoute.navigate(['emplist']);

       },
       err=>{console.log(Error);}
      );
       
    }
    else
    {
      
      
      const empl = this.EmpForm.value;
      this.CreateEmp(empl);
      
     /* this.sub = this.objEmpservice.GetEmployees().subscribe( 
        (data:Employee[]) => {
      
           //console.log(data);
          
           this.emp.EmpId = Math.max(...data.map(d=>d.EmpId))+1;
           //alert(this.newempid);
           
           
          
          
        } 
    
      );*/
      
    

    }



    }
    ,(error:any)=>{console.error(error)}
    );
       //this.EmpForm.reset();
    
  }

  
  CreateEmp(empl:Employee)
    {
    
      
      this.sub = this.objEmpservice.AddEmployee(empl).subscribe(
        (_d)=>{
         alert('Record added successfully');
         this.objRoute.navigate(['emplist']);
     }
     ,
       err=>{
        console.log(Error);
        }
    );
      
    }


 ngOnDestroy()
 {

//   this.sub.unsubscribe();

 }



}
