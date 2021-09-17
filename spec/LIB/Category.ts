import { ElementFinder, element, by, browser, } from "protractor";

export class category {

    managecategor: ElementFinder;
    addbutton: ElementFinder;
    category: ElementFinder;
    descrip: ElementFinder;
    cancel: ElementFinder;
    Save: ElementFinder;
    searchcat: ElementFinder;
    searchcate: ElementFinder;
    selectcat: ElementFinder;
    Edit: ElementFinder;
    Delete: ElementFinder;
    update: ElementFinder;
    constructor() {

        this.managecategor = element(by.css("button[mattooltip='Manage Categories']"));
        this.addbutton = element(by.xpath("//*[contains(text(),'add_circle')]"));
        this.category = element(by.css("input[ng-reflect-name='category']"));
        this.descrip = element(by.css("input[ng-reflect-name='description']"));
        this.Save = element(by.xpath("//*[contains(text(),'Save')] "))
        this.searchcat = element(by.xpath("//*[contains(text(),'Category')] "));
        this.searchcate = element(by.css("input[placeholder='Search Category']"));
        this.selectcat = element(by.xpath("//*[contains(text(),'Automation category')]"));
        this.Edit = element.all(by.xpath("//*[contains(text(),'edit')]")).get(4);
        this.Delete = element(by.xpath("//*[contains(text(),'delete')]"));
        this.cancel = element(by.xpath("//*[contains(text(),'Cancel')]"));
        this.update = element(by.xpath("//*[contains(text(),'Update')]"));

    }


}