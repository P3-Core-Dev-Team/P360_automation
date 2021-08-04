import { LoginLocators } from '../LIB/Login';
import { browser, logging, ElementFinder } from 'protractor';
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
Appcreate.addconnection.click();
Appcreate.appname.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 13, 1));
Appcreate.Appdesc.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 13, 2));
Appcreate.Tag.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 13, 3));
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
})