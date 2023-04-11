import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service: MainService) { }


  currentPage:any = 1
  allData:any = []
  total:any = 0
  search:any = ''

  seletedForDelete:any = ''

  ngOnInit(): void {
    this.service.getAllEmployees({currentPage: this.currentPage}).subscribe(data=>{
      console.log(data)

      if(!data.errorCode){
        this.allData  = data.data
        this.total = data.total
      }

    })
  }


  deleteEmp(){
      this.service.deleteEmployee(this.seletedForDelete).subscribe(data=>{
        console.log(data)
        this.ngOnInit()
      })
  }

}
