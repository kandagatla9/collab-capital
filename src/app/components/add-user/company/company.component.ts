import { Component, Input, OnInit, Query } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/shared/crud.service';
import { AddUserComponent } from '../add-user.component';
import { Student } from 'src/app/shared/student';
import { filter } from 'rxjs/operators'
import { count } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  m:boolean = false;
  s: boolean = true;
  seconds:number = 0;
  timer:any;
 
  dt: any;
  dataDisplay: any;
  count!: number;
  sorrys:boolean = false;
  back:boolean = false;
  sorry: Boolean = false;
  tou: boolean = false;
  val : any;
  filterTerm!: string;
  HOWBUSINESSISPERFORMAINGWHENCOMPARINGTOOTHERCOMPANIESINSAMEINDUSTRY:any;
  LASTSIXMONTHSWORKPROFILE:any;
  BSECODE:any;
  NSECODE:any;
 nam:any;
  acc!: number;
  i!: any;
  Student!: Student[];
 companyName:any = 0;
 snapshotPageNo:any = 0;
  filterTer!: string;
  json!: [];
  emp! : string;
  ABOUTCOMPANY!: string;
  @Input() userObj = { name: ''}
  data: any;
  d : any;
  JsonData: any = [];
  HOWINDUSTRYISRUNNINGFROMLASTTHREEYEARSANDTOBEEXPECTEDINTHENEXTTHREEYEARS: any;
  OVERVIEWOFTHECOMPANYAFTERMAKINGAINDEAPTHSTUDYOFFINNCIALSSIMILARCOMPANIESANDIndustries: any;
  QoneTAKEAWAYS: any;
  QtwoTAKEAWAYS: any;
  QthreeTAKEAWAYS: any;
  QfourTAKEAWAYS: any;
  OVERVIEWONfourQ: any;
  MARKETCAPITAL: any;
  VALUEOFSTOCK: any;
  ROCE: any;
  EVEBITDA: any;
  ROE: any;
  TAKEAWAYONROCE:any;
  TAKEAWAYONROE: any;
  TAKEAWAYONEVEBITDA: any;
  PERATIO: any;
  PAT: any;
  DEBTTOEQUITY: any;
  ROA: any;
  TAKEAWAYONPERATIO: any;
  TAKEAWAYONPAT: any;
  TAKEAWAYONDEBTTOEQUITY: any;
  TAKEAWAYONROA: any;
  Strengths: any;
  Weekness: any;
  Opportunities: any;
  Threats: any;
  TAKEAWAYSFORCHANGESINTHREEYEARSBALANCESHEET: any;
  TAKEAWAYSFORCHNAGESINHOLDINGPATTERNS: any;
  CompoundedSalesGrowthONEyear: any;
  CompoundedProfitGrowthforONEYear: any;
  StockPriceCAGRForoneyear: any;
  TAKEAWAYonCompoundedSalesGrowth: any;
  CompoundedSalesGrowthTWOyears: any;
  CompoundedProfitGrowthfortwoYears: any;
  StockPriceCAGRFortwoyears: any;
  TAKEAWAYonCompoundedProfitGrowth: any;
  CompoundedSalesGrowthTHREEyears: any;
  CompoundedProfitGrowthforthreeYear: any;
  StockPriceCAGRForthreeyear: any;
  TAKEAWAYOnReturnonEquity: any;
  TAKEAWAYonStockPriceCAGR: any;
  TAKEAWAYONEPS: any;
  TAKEAWAYonOperatingProfit: any;
  HOLDINGSBYPROMOTERSINMINESTWO: any;
  HOLDINGBYDIIMINESTWO: any;
  HOLDINGSBYPUBLICINMINESTWO: any;
  HOLDINGSBYPROMOTERSINMINESONE: any;
  HOLDINGBYFIIINMINESONE: any;
  HOLDINGBYDIIMINESONE: any;
  HOLDINGSBYPUBLICINMINESONE: any;
  HOLDINGSBYPROMOTERSINZERO: any;
  HOLDINGBYFIIINZERO: any;
  HOLDINGBYDIIZERO: any;
  HOLDINGSBYPUBLICINZERO: any;
  SHARECAPITALINMINESTWO: any;
  RESERVESINMINESTWO: any;
  LIABILITIESINMINESTWO: any;
  ASSETSINMINESTWO: any;
  SHARECAPITALINMINESONE: any;
  RESERVESINMINESONE: any;
  LIABILITIESINMINESONE: any;
  ASSESTSINMINESONE: any;
  SHARECAPITALINZERO: any;
  RESERVESINZERO: any;
  LIABILITIESINZERO: any;
  ASSESTSINZERO: any;
  PATINMINESTWO: any;
  PATINMINESONE: any;
  PATINZERO: any;
  EPSINMINESTWO: any;
  EPSINMINESONE: any;
  EPSINZERO: any;
  SalesinMINESTWO: any;
  OperatingProfitinMINESTWO: any;
  salesinMINESONE: any;
  salesinZERO: any;
  OVERVIEWONfourQS: any;
  HOLDINGBYFIIINMINESTWO: any;
  OperatingProfitinzero: any;
  OperatingProfitinMINESone: any;
  ReturnonEquityForoneYear: any;
  ReturnonEquityFortwoYears: any;
  ReturnonEquityForthreeYears: any;
  constructor( 
    private http: HttpClient,
    private Activatedroute: ActivatedRoute,
    public crudService: CrudService,
    public router: Router
  ) { }
/*
  ngOnInit(){
    this.addUser(this.data)
    
    let s = this.crudService.getUsers();
    s.subscribe((data: any[]) => {
      this.Student = [];
      data.forEach(item => {
        let a:any;
        a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Student.push(a as Student);
        console.log(this.JsonData);
      })
    })
    this.snapshotPageNo = this.Activatedroute.snapshot.queryParamMap.get('q')||0;
    this.Activatedroute.queryParamMap
    .subscribe(params => {
      this.companyName = params.get('q')||0;
      console.log('Query params', this.companyName)
    });
  }  */
 ngOnInit(): void {  
  this.http.get('https://collabgenics-api.herokuapp.com/api')
  .subscribe(Response => {
    //If Response comes function
    //hideloader() is called
    this.seconds = 0;
    this.timer = setInterval(() =>{
      if (this.seconds > 7) {
        hideloader();
        this.s=false;
        this.m=true
      }
      this.seconds+=1;
    }, 1000)
  

    console.log(Response)
    this.dt = Response;
    this.dataDisplay = this.dt.data;
  });
  //Function is defined
  function hideloader() {
    //setting display of spinner
    // element to none
    (<HTMLInputElement>document.getElementById('loading')).style.display = 'none';
  }
   
  const id = this.Activatedroute.snapshot.paramMap.get('id');
  this.crudService.getSingleUser(id).subscribe();
   
  this.addUser(this.data)
    this.snapshotPageNo = this.Activatedroute.snapshot.queryParamMap.get('user')||0;
    this.Activatedroute.queryParamMap
    .subscribe(params => {
      this.companyName = params.get('user')||0;
     /* console.log('Query params', this.companyName)
      console.log(this.snapshotPageNo) */
      /*
      for(c = 2; c <= this.JsonData.length; c++){
        if(this.snapshotPageNo == this.JsonData.jsonData[2].NameoftheCompnay){
          console.log(this.snapshotPageNo)
        }
        
      }*/
     
    });
    this.user(this.data);

    
  }

  /*-----------------------------------------*/
  user(data:any) {

   
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
  /*----------------------------------------------*/

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

showing(event: any){
  
  if(event){
    this.sorry = true;
  }
    else{
      this.sorry = false;
    }
  

 
}

search(localRef: HTMLInputElement){
   
   /* console.log(localRef.eventListeners)
     console.log(localRef)
     console.log(localRef.value.length)*/
     if(localRef.value.length > 1) {
       this.tou = true;
     }
  }

func(event: any){
  this.val = event.target.value
   
  
}	
onKeyPress(){
  this.count = this.count + 1;
}

  


  

  addUser(data:any) {
    this.crudService.addUser(this.userObj).subscribe((data: {}) => {
      this.JsonData = JSON.parse(JSON.stringify(data));
      for(this.i=0; this.i<=this.JsonData.jsonData.length; this.i++){
        if(this.snapshotPageNo === this.JsonData.jsonData[this.i].NameoftheCompnay){
         return this.nam = JSON.parse(JSON.stringify(data)).jsonData[this.i].ABOUTCOMPANY,
         this.NSECODE = JSON.parse(JSON.stringify(data)).jsonData[this.i].NSECODE,
         this.BSECODE = JSON.parse(JSON.stringify(data)).jsonData[this.i].BSECODE,
         this.LASTSIXMONTHSWORKPROFILE = JSON.parse(JSON.stringify(data)).jsonData[this.i].LASTSIXMONTHSWORKPROFILE,
         this.HOWBUSINESSISPERFORMAINGWHENCOMPARINGTOOTHERCOMPANIESINSAMEINDUSTRY = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOWBUSINESSISPERFORMAINGWHENCOMPARINGTOOTHERCOMPANIESINSAMEINDUSTRY,
         this.HOWINDUSTRYISRUNNINGFROMLASTTHREEYEARSANDTOBEEXPECTEDINTHENEXTTHREEYEARS = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOWINDUSTRYISRUNNINGFROMLASTTHREEYEARSANDTOBEEXPECTEDINTHENEXTTHREEYEARS,
         this.OVERVIEWOFTHECOMPANYAFTERMAKINGAINDEAPTHSTUDYOFFINNCIALSSIMILARCOMPANIESANDIndustries = JSON.parse(JSON.stringify(data)).jsonData[this.i].OVERVIEWOFTHECOMPANYAFTERMAKINGAINDEAPTHSTUDYOFFINNCIALSSIMILARCOMPANIESANDIndustries,
         this.QoneTAKEAWAYS = JSON.parse(JSON.stringify(data)).jsonData[this.i].QoneTAKEAWAYS,
         this.QtwoTAKEAWAYS = JSON.parse(JSON.stringify(data)).jsonData[this.i].QtwoTAKEAWAYS,
         this.QthreeTAKEAWAYS = JSON.parse(JSON.stringify(data)).jsonData[this.i].QthreeTAKEAWAYS,
         this.QfourTAKEAWAYS = JSON.parse(JSON.stringify(data)).jsonData[this.i].QfourTAKEAWAYS,
         this.OVERVIEWONfourQ = JSON.parse(JSON.stringify(data)).jsonData[this.i].OVERVIEWONfourQ,
         this.MARKETCAPITAL = JSON.parse(JSON.stringify(data)).jsonData[this.i].MARKETCAPITAL,
         this.VALUEOFSTOCK = JSON.parse(JSON.stringify(data)).jsonData[this.i].VALUEOFSTOCK,
         this.ROCE = JSON.parse(JSON.stringify(data)).jsonData[this.i].ROCE,
         this.EVEBITDA = JSON.parse(JSON.stringify(data)).jsonData[this.i].EVEBITDA,
         this.ROE = JSON.parse(JSON.stringify(data)).jsonData[this.i].ROE,
         this.TAKEAWAYONROE = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYONROE,
         this.TAKEAWAYONEVEBITDA = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYONEVEBITDA,
         this.TAKEAWAYONROE = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYONROE,
         this.PERATIO = JSON.parse(JSON.stringify(data)).jsonData[this.i].PERATIO,
         this.PAT = JSON.parse(JSON.stringify(data)).jsonData[this.i].PAT,
         this.DEBTTOEQUITY = JSON.parse(JSON.stringify(data)).jsonData[this.i].DEBTTOEQUITY,
         this.ROA = JSON.parse(JSON.stringify(data)).jsonData[this.i].ROA,
         this.TAKEAWAYONPERATIO = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYONPERATIO,
         this.TAKEAWAYONPAT = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYONPAT,
         this.TAKEAWAYONDEBTTOEQUITY = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYONDEBTTOEQUITY,
         this.TAKEAWAYONROA = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYONROA,
         this.Strengths = JSON.parse(JSON.stringify(data)).jsonData[this.i].Strengths,
         this.Weekness = JSON.parse(JSON.stringify(data)).jsonData[this.i].Weekness,
         this.Opportunities = JSON.parse(JSON.stringify(data)).jsonData[this.i].Opportunities,
         this.Threats = JSON.parse(JSON.stringify(data)).jsonData[this.i].Threats,
         this.TAKEAWAYSFORCHANGESINTHREEYEARSBALANCESHEET = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYSFORCHANGESINTHREEYEARSBALANCESHEET,
         this.TAKEAWAYSFORCHNAGESINHOLDINGPATTERNS = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYSFORCHNAGESINHOLDINGPATTERNS,
         this.CompoundedSalesGrowthONEyear = JSON.parse(JSON.stringify(data)).jsonData[this.i].CompoundedSalesGrowthONEyear,
         this.CompoundedProfitGrowthforONEYear = JSON.parse(JSON.stringify(data)).jsonData[this.i].CompoundedProfitGrowthforONEYear,
         this.StockPriceCAGRForoneyear = JSON.parse(JSON.stringify(data)).jsonData[this.i].StockPriceCAGRForoneyear,
         this.TAKEAWAYonCompoundedSalesGrowth = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYonCompoundedSalesGrowth,
         this.CompoundedSalesGrowthTWOyears = JSON.parse(JSON.stringify(data)).jsonData[this.i].CompoundedSalesGrowthTWOyears,
         this.CompoundedProfitGrowthfortwoYears = JSON.parse(JSON.stringify(data)).jsonData[this.i].CompoundedProfitGrowthfortwoYears,
         this.StockPriceCAGRFortwoyears = JSON.parse(JSON.stringify(data)).jsonData[this.i].StockPriceCAGRFortwoyears,
         this.TAKEAWAYonCompoundedProfitGrowth = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYonCompoundedProfitGrowth,
         this.CompoundedSalesGrowthTHREEyears = JSON.parse(JSON.stringify(data)).jsonData[this.i].CompoundedSalesGrowthTHREEyears,
         this.CompoundedProfitGrowthforthreeYear = JSON.parse(JSON.stringify(data)).jsonData[this.i].CompoundedProfitGrowthforthreeYear,
         this.StockPriceCAGRForthreeyear = JSON.parse(JSON.stringify(data)).jsonData[this.i].StockPriceCAGRForthreeyear,
         this.TAKEAWAYonStockPriceCAGR = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYonStockPriceCAGR,
         this.TAKEAWAYOnReturnonEquity = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYOnReturnonEquity,
         this.TAKEAWAYONPAT = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYONPAT,
         this.TAKEAWAYONEPS = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYONEPS,
         this.TAKEAWAYonOperatingProfit = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYonOperatingProfit,
         this.HOLDINGSBYPROMOTERSINMINESTWO = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOLDINGSBYPROMOTERSINMINESTWO,
         this.HOLDINGBYDIIMINESTWO = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOLDINGBYDIIMINESTWO,
         this.HOLDINGSBYPUBLICINMINESTWO = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOLDINGSBYPUBLICINMINESTWO,
         this.HOLDINGSBYPROMOTERSINMINESONE = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOLDINGSBYPROMOTERSINMINESONE,
         this.HOLDINGBYFIIINMINESONE = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOLDINGBYFIIINMINESONE,
         this.HOLDINGBYDIIMINESONE = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOLDINGBYDIIMINESONE,
         this.HOLDINGSBYPUBLICINMINESONE = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOLDINGSBYPUBLICINMINESONE,
         this.HOLDINGSBYPROMOTERSINZERO = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOLDINGSBYPROMOTERSINZERO,
         this.HOLDINGBYFIIINZERO = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOLDINGBYFIIINZERO,
         this.HOLDINGBYDIIZERO = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOLDINGBYDIIZERO,
         this.HOLDINGSBYPUBLICINZERO = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOLDINGSBYPUBLICINZERO,
         this.SHARECAPITALINMINESTWO = JSON.parse(JSON.stringify(data)).jsonData[this.i].SHARECAPITALINMINESTWO,
         this.RESERVESINMINESTWO = JSON.parse(JSON.stringify(data)).jsonData[this.i].RESERVESINMINESTWO,
         this.LIABILITIESINMINESTWO = JSON.parse(JSON.stringify(data)).jsonData[this.i].LIABILITIESINMINESTWO,
         this.ASSETSINMINESTWO = JSON.parse(JSON.stringify(data)).jsonData[this.i].ASSETSINMINESTWO,
         this.SHARECAPITALINMINESONE = JSON.parse(JSON.stringify(data)).jsonData[this.i].SHARECAPITALINMINESONE,
         this.RESERVESINMINESONE = JSON.parse(JSON.stringify(data)).jsonData[this.i].RESERVESINMINESONE,
         this.LIABILITIESINMINESONE = JSON.parse(JSON.stringify(data)).jsonData[this.i].LIABILITIESINMINESONE,
         this.ASSESTSINMINESONE = JSON.parse(JSON.stringify(data)).jsonData[this.i].ASSESTSINMINESONE,
         this.SHARECAPITALINZERO = JSON.parse(JSON.stringify(data)).jsonData[this.i].SHARECAPITALINZERO,
         this.RESERVESINZERO = JSON.parse(JSON.stringify(data)).jsonData[this.i].RESERVESINZERO,
         this.LIABILITIESINZERO = JSON.parse(JSON.stringify(data)).jsonData[this.i].LIABILITIESINZERO,
         this.ASSESTSINZERO = JSON.parse(JSON.stringify(data)).jsonData[this.i].ASSESTSINZERO,
         this.PATINMINESTWO = JSON.parse(JSON.stringify(data)).jsonData[this.i].PATINMINESTWO,
         this.PATINMINESONE = JSON.parse(JSON.stringify(data)).jsonData[this.i].PATINMINESONE,
         this.PATINZERO = JSON.parse(JSON.stringify(data)).jsonData[this.i].PATINZERO,
         this.EPSINMINESTWO = JSON.parse(JSON.stringify(data)).jsonData[this.i].EPSINMINESTWO,
         this.EPSINMINESONE = JSON.parse(JSON.stringify(data)).jsonData[this.i].EPSINMINESONE,
         this.EPSINZERO = JSON.parse(JSON.stringify(data)).jsonData[this.i].EPSINZERO,
         this.SalesinMINESTWO = JSON.parse(JSON.stringify(data)).jsonData[this.i].SalesinMINESTWO,
         this.EPSINMINESTWO = JSON.parse(JSON.stringify(data)).jsonData[this.i].EPSINMINESTWO,
         this.OperatingProfitinMINESTWO = JSON.parse(JSON.stringify(data)).jsonData[this.i].OperatingProfitinMINESTWO,
         this.OperatingProfitinMINESone = JSON.parse(JSON.stringify(data)).jsonData[this.i].OperatingProfitinMINESone,
         this.OperatingProfitinzero = JSON.parse(JSON.stringify(data)).jsonData[this.i].OperatingProfitinzero,
         this.salesinMINESONE = JSON.parse(JSON.stringify(data)).jsonData[this.i].salesinMINESONE,
         this.EPSINMINESONE = JSON.parse(JSON.stringify(data)).jsonData[this.i].EPSINMINESONE,
         this.salesinZERO = JSON.parse(JSON.stringify(data)).jsonData[this.i].salesinZERO,
         this.EPSINZERO = JSON.parse(JSON.stringify(data)).jsonData[this.i].EPSINZERO,
         this.OVERVIEWONfourQS = JSON.parse(JSON.stringify(data)).jsonData[this.i].OVERVIEWONfourQS,
         this.HOLDINGBYFIIINMINESTWO = JSON.parse(JSON.stringify(data)).jsonData[this.i].HOLDINGBYFIIINMINESTWO,
         this.TAKEAWAYONROCE = JSON.parse(JSON.stringify(data)).jsonData[this.i].TAKEAWAYONROCE,
         this.ReturnonEquityForoneYear = JSON.parse(JSON.stringify(data)).jsonData[this.i].ReturnonEquityForoneYear,
         this.ReturnonEquityFortwoYears = JSON.parse(JSON.stringify(data)).jsonData[this.i].ReturnonEquityFortwoYears,
         this.ReturnonEquityForthreeYears = JSON.parse(JSON.stringify(data)).jsonData[this.i].ReturnonEquityForthreeYears

        }
        
      }
     /* console.log(JSON.parse(JSON.stringify(data)).jsonData[0].NameoftheCompnay)
      console.log(JSON.parse(JSON.stringify(data)).jsonData)
      console.log(JSON.parse(JSON.stringify(data)))
      console.log(this.JsonData.jsonData[2])*/
      
      

    })
  }

  

}


