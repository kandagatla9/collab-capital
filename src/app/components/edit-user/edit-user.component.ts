import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from "../../shared/crud.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  userObj: any = {};

  constructor(
    public crudService: CrudService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.crudService.getSingleUser(this.id).subscribe((res: {}) => {
      this.userObj = res;
    })
  }

  updateUser(id: any, data: any) {
    if(window.confirm('Yes, please...')){
      this.crudService.updateUser(this.id, data).subscribe(res => {
        this.router.navigate(['/list'])
      })
    }
  }

}