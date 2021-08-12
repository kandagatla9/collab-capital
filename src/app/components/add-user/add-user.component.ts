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
  NameoftheCompnay!: string;
  length!: number;
  user:any;
  sorrys:boolean = false;
  back:boolean=false;
  reflect:any;
  model:any;
  sorry: Boolean = false;
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

  showing(user: any){
   
    for(this.i=0; this.i<=this.JsonData.length; this.i++){
      if( this.user === this.JsonData[this.i].NameoftheCompnay ){
       
        this.router.navigate(['/add/company'], { queryParams: { user }, queryParamsHandling: 'merge' });
      }
      else{
        this.sorry = true;
      }
      
    }
    
      
    
  
   
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

    detect(event: any): void{
      if(event.target.value.length > 2){
        this.back = true;
        this.sorrys =true;
      }
      else {
        this.sorry = false;
        this.back = false;
        this.sorrys = false;
      }
      /*console.log(event.target.value.length)*/
    }

    search(localRef: HTMLInputElement){
     
     /* console.log(localRef.eventListeners)
       console.log(localRef)
       console.log(localRef.value.length)*/
       if(localRef.value.length > 1) {
         this.tou = true;
       }
    }

    arr(value: any){
      this.i = value ;
     /* console.log(this.i) */
    }
  addUser(data:any) {

   
    this.crudService.addUser(this.userObj).subscribe((data: {}) => {
      this.JsonData = JSON.parse(JSON.stringify(data)).jsonData;
     /*
        if(this.filterTerm != this.JsonData[this.i].NameoftheCompnay ){
          this.sorry = false;
        }
        else
        {
          this.sorry = false;
        } 
        */
      
      
     
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