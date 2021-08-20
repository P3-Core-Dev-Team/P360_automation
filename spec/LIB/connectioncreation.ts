import { ElementFinder, element, by, browser, } from "protractor";

export class createconnect{

    developerscreen: ElementFinder;
    connections: ElementFinder;
     addconnection : ElementFinder;
     connectiontype: ElementFinder;
     connectionoption1:ElementFinder;
     connectionoption2:ElementFinder;
     RDBMStype:ElementFinder;
     RDBMStype1: ElementFinder;
     RDBMStype2: ElementFinder;
     profilename: ElementFinder;
      connectiondescritption :ElementFinder;
     next: ElementFinder;
     region : ElementFinder;
    regdev: ElementFinder;
    regtest: ElementFinder;
    regstage: ElementFinder;
    regprod: ElementFinder;
    regother: ElementFinder;
     protocol: ElementFinder;
     http: ElementFinder;
     https: ElementFinder;
    serverhost: ElementFinder;
    serverport: ElementFinder;
    restserverhost: ElementFinder;
    restapi: ElementFinder;
    username: ElementFinder;
    password: ElementFinder;
    clientid: ElementFinder;
    clientscret: ElementFinder;
dbname:ElementFinder;
    Testconnetion: ElementFinder;
    popuptestcon: ElementFinder;
    create: ElementFinder;
    update: ElementFinder;
    Searchconnection: ElementFinder;


constructor() {

    this.developerscreen=element(by.xpath("//*[@id='header']/div/div/span[4]/mat-icon"));
    this.connections=element.all(by.css("div[class='mat-tab-label-content']")).get(1);
    this.addconnection=element(by.xpath("//*[contains(text(),'add_circle')]"));
    
// drop down selection for IA and RDBMS 
    this.connectiontype=element.all(by.css("div[class*='mat-select-arrow']")).get(1);
   
     this.connectionoption1=element(by.xpath("//*[contains(text(),'InfoArchive')]")); 
     this.connectionoption2=element(by.xpath("//*[contains(text(),'RDBMS')]"));

     // Rdbms type 
     this.RDBMStype=element.all(by.css("div[class*='mat-select-arrow']")).get(2);
     this.RDBMStype1=element(by.xpath("//*[contains(text(),'MySQL')]"));
     this.RDBMStype2=element(by.xpath("//*[contains(text(),' PostgreSQL')]"))
     // enter the values 

     this.profilename=element(by.css("input[formcontrolname='profileName']"));
     this.connectiondescritption=element(by.css("input[formcontrolname='connectionDescription']"));
     this.next=element.all(by.xpath("//*[contains(text(),'Next')]")).get(0);

     this.region=element.all(by.css("div[class*='mat-select-arrow']")).get(4);
    this.regdev=element(by.xpath("//*[contains(text(),'DEV')]"));
    this.regtest=element(by.xpath("//*[contains(text(),'TEST')]"));
    this.regstage=element(by.xpath("//*[contains(text(),'STAGE ')]"));
    this.regprod=element(by.xpath("//*[contains(text(),'PROD')]"));
    this.regother=element(by.xpath("//*[contains(text(),'other')]"));

     this.protocol=element.all(by.css("div[class*='mat-select-arrow']")).get(4);
     this.http=element.all(by.xpath("//*[contains(text(),'http')]")).get(2);
     this.https=element(by.xpath("//*[contains(text(),'https')]"));
     this.serverhost=element(by.css("input[formcontrolname='serverGatewayIp']"));

    this.serverport=element(by.css("input[formcontrolname='serverPort']"));
    this.restserverhost=element(by.css("input[formcontrolname='serverRestIp']"));
    this.restapi=element(by.css("input[formcontrolname='serverRestPort']"));
    this.username=element(by.css("input[formcontrolname='username']"));
    this.password=element(by.css("input[formcontrolname='password']"))
    this.clientid=element(by.css("input[formcontrolname='clientId']"));
    this.clientscret=element(by.css("input[formcontrolname='clientSecret']"));

    //Dbname 

    this.dbname=element(by.css("input[formcontrolname='databaseName']"));
    this.Testconnetion=element(by.xpath("//*[contains(text(),'Test Connection ')]"));
    this.create=element.all(by.xpath("//*[contains(text(),'Create')]")).get(1);
    this.update=element(by.xpath("//*[contains(text(),'Update')]"));
    this.popuptestcon=element(by.xpath("//*[contains(text(), 'Connection successful')]"));
    this.Searchconnection=element(by.css("input[type='search']"));

}
}
