import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service: MainService, private route: ActivatedRoute, private r2:Router) { }

  id:any
  EmployeeNumber:any = ''
  Designation :any = ''
  DateOfJoining :any = ''
  EmployeeId :any = ''
  Salary :any = ''
  firstName :any = ''
  lastName:any = ''
  DesignationId:any = ''

  EmployeeNumberError:any = ''
  DesignationError :any = ''
  DateOfJoiningError :any = ''
  EmployeeIdError :any = ''
  SalaryError :any = ''
  firstNameError :any = ''
  lastNameError:any = ''
  DesignationIdError:any = ''


  ngOnInit(): void {
    this.route.paramMap.subscribe((obs) => {
      console.log(obs.get('id'));
      this.id = obs.get('id')

      if(this.id){
        this.getUser()
      }


    });
  }


  getUser(){
    this.service.getSingleEmployee(this.id).subscribe(data=>{
      console.log(data)

      if(!data.errorCode) {

        this.EmployeeNumber = data.EmployeeNumber
        this.Designation = data.Designation
        this.DateOfJoining = data.DateOfJoining.split('T')[0]
        this.EmployeeId = data.EmployeeId
        this.Salary = data.Salary
        this.firstName = data.firstName
        this.lastName = data.lastName
        this.DesignationId = data.DesignationId

      }

    })
  }


  onInputChange(){
    this.EmployeeNumberError = ''
    this.DesignationError  = ''
    this.DateOfJoiningError  = ''
    this.EmployeeIdError  = ''
    this.SalaryError  = ''
    this.firstNameError  = ''
    this.lastNameError = ''
    this.DesignationIdError = ''
  }


  createEmployee(){
    if(!this.firstName){
      this.firstNameError = "Please add first name"
    } else if (!this.lastName){
      this.lastNameError = "Please add last name"
    }else if (! this.Designation){
      this.DesignationError = "Please add Designation here"
    } else if (! this.DateOfJoining) {
      this.DateOfJoiningError = "Please add data of joining here"
    } else if (! String(this.Salary)){
      this.SalaryError = "Please add Salary here "
    } else {


      let obj = {
        "firstName":this.firstName,
        "lastName": this.lastName,
        "DateOfJoining": this.DateOfJoining,
        "Salary": this.Salary,
        "DesignationId": this.DesignationId == '' ? 1000:  this.DesignationId
      }

      this.service.addEmployee(obj).subscribe(data=>{
        console.log(data)
        this.r2.navigate(['/employeeList'])
      })

    }

  }


  updateEmployee(){
    if(!this.firstName){
      this.firstNameError = "Please add first name"
    } else if (!this.lastName){
      this.lastNameError = "Please add last name"
    }else if (! this.Designation){
      this.DesignationError = "Please add Designation here"
    } else if (! this.DateOfJoining) {
      this.DateOfJoiningError = "Please add data of joining here"
    } else if (! String(this.Salary)){
      this.SalaryError = "Please add Salary here "
    } else {


      let obj = {
        "firstName":this.firstName,
        "lastName": this.lastName,
        "DateOfJoining": this.DateOfJoining,
        "Salary": this.Salary,
        "DesignationId": this.DesignationId == '' ? 1000:  this.DesignationId,
        "EmployeeId" : this.id
      }

      this.service.updateEmployee(obj).subscribe(data=>{
        console.log(data)
        this.r2.navigate(['/employeeList'])
      })

    }
  }
}
