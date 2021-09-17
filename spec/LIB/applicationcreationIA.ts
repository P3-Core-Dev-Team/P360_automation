import { ElementFinder, element, by, browser, } from "protractor";

export class Applicationcreation {
application: ElementFinder;
addconnection: ElementFinder;
appname: ElementFinder;
Appdesc : ElementFinder;
Tag: ElementFinder;
next: ElementFinder;
connectiontype: ElementFinder;
connectionoption1: ElementFinder;
Connectionoption2: ElementFinder;
connectionprofile: ElementFinder;

profileoption1: ElementFinder;
profileoption2:ElementFinder;
tenantlist: ElementFinder;
tenantoption1:ElementFinder;
schemas:ElementFinder;
selectschema:ElementFinder;
applicationlist: ElementFinder;
applicationoption: ElementFinder;
selectapp: ElementFinder;
create: ElementFinder;

//Edit 
Searchapp:ElementFinder;
 clickaction:ElementFinder;
 viewdetails:ElementFinder;
 Edit:ElementFinder;
 configapp:ElementFinder;
 deleteapp:ElementFinder;
 setasarch:ElementFinder;
 update:ElementFinder;




    constructor (){

        this.application=element.all(by.css("div[class='mat-tab-label-content']")).get(0);
        this.addconnection=element(by.xpath("//*[contains(text(),'add_circle')]"));
        this.appname=element(by.css("input[formcontrolname='applicationName']"));
     this.Appdesc=element(by.css("input[formcontrolname='applicationDescription']"));
     this.Tag=element(by.css("input[autocomplete='off']"));
        this.next=element.all(by.xpath("//*[contains(text(),'Next')]")).get(0);

// connection tab for IA 

        this.connectiontype=element.all(by.css("div[class*='mat-select-arrow']")).get(0);
   
     this.connectionoption1=element(by.xpath("//*[contains(text(),'InfoArchive')]")); 
     this.Connectionoption2=element(by.xpath("//*[contains(text(),'RDBMS')]"));
     this.connectionprofile=element.all(by.css("div[class*='mat-select-arrow']")).get(3);
     this.profileoption1=element(by.xpath("//*[contains(text(),' IA_testconnection')]"));

     //  connection for RDBMS - mysql connection profile 

     this.profileoption2=element(by.xpath("//*[contains(text(),'MYSQL_PROFILE')]"));
     this.tenantlist=element.all(by.css("div[class*='mat-select-arrow']")).get(4);
     this.tenantoption1=element(by.xpath("//*[contains(text(),' INFOARCHIVE')]")); 
     this.schemas=element.all(by.css("div[class*='mat-select-arrow']")).get(4);
     this.selectschema=element(by.xpath("//*[contains(text(),' p360v2')]"));
// application for IA
     this.applicationlist=element.all(by.css("div[class*='mat-select-arrow']")).get(6);
     this.applicationoption=element(by.css("input[placeholder='Find IA Application']"))
     this.selectapp=element(by.xpath("//*[contains(text(),' IA_APP')]"));
    //  this.selectappoption=element
     this.create=element.all(by.xpath("//*[contains(text(),'Create')]")).get(2);




     //Edit the application 
    //  this.Searchapp=element(by.xpath("//*[contains(text(),'search']"));
    this.Searchapp=element(by.css("input[data-placeholder='Search']"));
      this.clickaction=element.all(by.css("[ng-reflect-message='Action']")).get(0);
      this.viewdetails=element(by.xpath("//*[contains(text(),'View Details')]"));
      this.Edit=element.all(by.xpath("//*[contains(text(),'edit')]")).get(4);
      this.configapp=element(by.xpath("//*[contains(text(),'Config Application')]"));
      this.deleteapp=element(by.xpath("//*[contains(text(),'Delete Application')]"));
      this.setasarch=element(by.xpath("//*[contains(text(),'Set as Active')]"));
      this.update=element.all(by.xpath("//*[contains(text(),'Update ')]")).get(0);
            }
        }


    

