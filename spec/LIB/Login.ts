import { ElementFinder, element, by, browser, } from "protractor";

export class LoginLocators {
    signin(arg0: string, arg1: string) {
        throw new Error("Method not implemented.");
    }


    getUrl = function () {
        return browser.get("http://192.168.1.50:4201/login");
    };
    getUsername = function () {
        return element(by.xpath("//*[@id='mat-input-0']"));
    };
    getPassword = function () {
        return element(by.xpath('//*[@id="mat-input-1"]'));
    };
    getLog = function () {
        return element(by.className('mat-raised-button mat-button-base mat-primary'));
    };


}


