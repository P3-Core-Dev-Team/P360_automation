import { ElementFinder, element, by, browser, } from "protractor";
export class audits{
    auditview:ElementFinder;
    filter:ElementFinder;
    applybutton:ElementFinder;
    export:ElementFinder;
    jobname:ElementFinder;
    exportbutton:ElementFinder;
    clickok:ElementFinder;
    backgroundjob:ElementFinder;

    constructor(){

       this.auditview=element(by.css("[mattooltip='Audit view']"));
this.filter=element(by.xpath("//*[contains(text(),'filter_alt')]"));
this.applybutton=element(by.xpath("//*[contains(text(),'Apply ')]"));
this.export=element.all(by.xpath("//*[contains(text(),'download')]")).get(1);
this.exportbutton=element.all(by.xpath("//*[contains(text(),'Export ')]")).get(1);
this.jobname=element(by.css("input[ng-reflect-type='text']"));
this.clickok=element.all(by.xpath("//*[contains(text(),'Ok')]")).get(2);
this.backgroundjob=element(by.css("[mattooltip='Background Jobs']"));

    }
}