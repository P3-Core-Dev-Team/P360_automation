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
tenantlist: ElementFinder;
tenantoption1:ElementFinder;

applicationlist: ElementFinder;
applicationoption: ElementFinder;
selectapp: ElementFinder;
create: ElementFinder;




    constructor (){

        this.application=element.all(by.css("div[class='mat-tab-label-content']")).get(0);
        this.addconnection=element(by.xpath("//*[contains(text(),'add_circle')]"));
        this.appname=element(by.css("input[formcontrolname='applicationName']"));
     this.Appdesc=element(by.css("input[formcontrolname='applicationDescription']"));
     this.Tag=element(by.css("input[autocomplete='off']"));
        this.next=element.all(by.xpath("//*[contains(text(),'Next')]")).get(0);
        this.connectiontype=element.all(by.css("div[class*='mat-select-arrow']")).get(0);
   
     this.connectionoption1=element(by.xpath("//*[contains(text(),'InfoArchive')]")); 
     this.Connectionoption2=element(by.xpath("//*[contains(text(),'RDBMS')]"));
     this.connectionprofile=element.all(by.css("div[class*='mat-select-arrow']")).get(3);
     this.profileoption1=element(by.xpath("//*[contains(text(),' IA_testconnection')]"));
     this.tenantlist=element.all(by.css("div[class*='mat-select-arrow']")).get(4);
     this.tenantoption1=element(by.xpath("//*[contains(text(),' INFOARCHIVE')]"));
     this.applicationlist=element.all(by.css("div[class*='mat-select-arrow']")).get(6);
     this.applicationoption=element(by.css("input[placeholder='Find IA Application']"))
     this.selectapp=element(by.xpath("//*[contains(text(),' IA_APP')]"));
    //  this.selectappoption=element
     this.create=element.all(by.xpath("//*[contains(text(),'Create')]")).get(1);


            }
        }


    

