import { LoginLocators } from '../LIB/Login';
import { browser, logging, ElementFinder, Browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { rexcel } from '../POM/excel';
import { createconnect} from '../LIB/connectioncreation';
import { connect } from 'http2';
import { Applicationcreation } from '../LIB/applicationcreationIA';

describe('TS_001 - application  creation ', () => {
    let sleep = 3000;
    let x= new rexcel();
    
    let Signin = new LoginLocators();
    let Connection = new createconnect();
    let Appcreate= new Applicationcreation();
  
  browser.ignoreSynchronization=true;

  beforeEach(function ()  {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  });

  it('TC_001: Open P360v2 URL LAUNCH', async () => {
    Signin.getUrl();
    browser.driver.manage().window().maximize();
    browser.sleep(6000);
    browser.getCurrentUrl().then(function (url) {
        console.log("Web page url is : " + url)
    })
    browser.getTitle().then(function (title) {
        console.log("Web page title is : " + title)
    })
})
    
  it('TC_002:enter username and password click signin button ',async () =>{
    Signin.getUsername().sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 3, 1));
    Signin.getPassword().sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 3, 2));
    Signin.getLog().click();
    browser.sleep(5000);
           
    })
    it('TC_003: application creation for IA',async () =>{
        Connection.developerscreen.click();
        browser.sleep(5000);
await Appcreate.application.click();
browser.sleep(5000);
Appcreate.addconnection.click();
Appcreate.appname.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 13, 1));
Appcreate.Appdesc.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 13, 2));
Appcreate.Tag.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 13, 3));
browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
    browser.sleep(5000);
})

Appcreate.next.click();
browser.sleep(5000);
Appcreate.connectiontype.click();
 await Appcreate.connectionoption1.click();
await Appcreate.connectionprofile.click();
await Appcreate.profileoption1.click();

Appcreate.tenantlist.click();
Appcreate.tenantoption1.click();
browser.sleep(3000);
Appcreate.applicationlist.click();
browser.sleep(5000);
Appcreate.applicationoption.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 13, 4));
Appcreate.selectapp.click();
browser.sleep(3000);
Appcreate.create.click();
browser.sleep(3000);

    })

    it('TC_004: application creation for RDBMS',async () =>{
        Connection.developerscreen.click();
        browser.sleep(5000);
await Appcreate.application.click();
browser.sleep(5000);
Appcreate.addconnection.click();
Appcreate.appname.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 15, 1));
Appcreate.Appdesc.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 15, 2));
Appcreate.Tag.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 15, 3));
browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
        browser.sleep(5000);
    })
Appcreate.next.click();
browser.sleep(5000);
Appcreate.connectiontype.click();
 await Appcreate.Connectionoption2.click();
 browser.sleep(5000);
await Appcreate.connectionprofile.click();
browser.sleep(5000);

Appcreate.profileoption2.click();
browser.sleep(5000);
Appcreate.schemas.click();
browser.sleep(5000);
Appcreate.selectschema.click();
browser.sleep(3000);
Appcreate.applicationlist.click();

Appcreate.applicationoption.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 20, 1));
Appcreate.selectapp.click();
browser.sleep(3000);
await browser.actions().doubleClick(Appcreate.create).perform();
// Appcreate.create.click();
browser.sleep(3000);

    })


// Edit the IA app created with app name and description 
    it('TC_005: edit the application creation for IA app',async () =>{

        Connection.developerscreen.click();
        browser.sleep(5000);
await Appcreate.application.click();
browser.sleep(5000);
Appcreate.Searchapp.click();
Appcreate.Searchapp.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 13, 1));
browser.sleep(8000);
 Appcreate.clickaction.click()
 browser.sleep(8000);
//  Appcreate.viewdetails.click()
//  browser.sleep(5000);
 Appcreate.Edit.click();
 browser.sleep(5000);

 // edit app name description and update the IA app
 Appcreate.appname.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 14, 1));
 Appcreate.Appdesc.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 14, 2));
 browser.sleep(5000);
 Appcreate.update.click()

 browser.sleep(5000);
    })

    // edit RDBMS edit app editing the tag /adding the tag 
   it('TC_005: edit the application creation for RDBMS app',async () =>{


    Connection.developerscreen.click();
    browser.sleep(5000);
await Appcreate.application.click();
browser.sleep(5000);
Appcreate.Searchapp.click();
Appcreate.Searchapp.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 15, 1));
browser.sleep(8000);
Appcreate.clickaction.click()
browser.sleep(8000);
//  Appcreate.viewdetails.click()
//  browser.sleep(5000);
Appcreate.Edit.click();
browser.sleep(5000);

// edit app name description and update the IA app
// Appcreate.appname.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 14, 1));
// Appcreate.Appdesc.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 14, 2));
Appcreate.Tag.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 20, 3));
browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
    //     browser.sleep(5000);
    // })
browser.sleep(5000);
Appcreate.update.click()

browser.sleep(5000);
})

})
})
