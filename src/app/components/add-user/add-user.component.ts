import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CrudService } from "../../shared/crud.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  sorry!: Boolean;
  acc = [120, 240];
  i!: any;
  pageNum=0;
  count!: number;
  val : any;
  changeText!: boolean;
  tou: boolean = false;
  dis: boolean = false;
   filterTerm!: string;
  json!: [];
  emp! : string;
  ABOUTCOMPANY!: string;
  @Input() userObj = { name: ''}
  data: any;
  d : any;
  JsonData: any = [];
  constructor(
    public crudService: CrudService, 
    public router: Router
  ) { }

  ngOnInit(): void { 
    this.addUser(this.data);

  }

  showing(){
   this.sorry = true;
  }
  onKeyPress(){
    this.count = this.count + 1;
  }
  
  func(event: any){
    this.val = event.target.value
     
    
  }

  addValue(value: number){
    this.acc.push(value);
  }


    disp(){
      this.dis = true;
    }

    search(localRef: HTMLInputElement){
       
      this.tou = true;
    }

    arr(value: any){
      this.i = value ;
      console.log(this.i)
    }
  addUser(data:any) {

   
    this.crudService.addUser(this.userObj).subscribe((data: {}) => {
      this.JsonData = JSON.parse(JSON.stringify(data)).jsonData;
     
     /* for(this.i=0; this.i<=this.JsonData.length; this.i++){
        if(this.JsonData[this.i].NameoftheCompnay){
          this.sorry = true;
         console.log(this.JsonData[this.i].NameoftheCompnay)
        }
      }*/

      /*console.log(JSON.parse(JSON.stringify(data)).jsonData[0].NameoftheCompnay)
      console.log(JSON.parse(JSON.stringify(data)).jsonData)
      this.d = this.data;
      console.log(data);
      console.log(typeof(this.d))*/
      

    })
  }

  

}