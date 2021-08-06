import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from "../../shared/crud.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  filterTerm!: string;
  ABOUTCOMPANY! : string;

  jsonData: any = [];

  constructor(
    public crudService: CrudService,
    public router: Router
  ) { }

  ngOnInit() {
    this.fetchUsers();
    
console.log(data);
  }

  fetchUsers() {
    return this.crudService.getUsers().subscribe((res: {}) => {
      this.jsonData =res;
      console.log(JSON.parse(this.jsonData).status)
    })
  }
  
  delete(id: string) {
    if (window.confirm('Really?')){
      this.crudService.deleteUser(id).subscribe(res => {
        this.fetchUsers()
      })
    }
  }

}

function data(data: any) {
  throw new Error('Function not implemented.');
}
