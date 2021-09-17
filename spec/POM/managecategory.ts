import { LoginLocators } from '../LIB/Login';
import { browser, logging, ElementFinder } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { rexcel } from '../POM/excel';
import { createconnect} from '../LIB/connectioncreation';
import { connect } from 'http2';
import{category}from '../LIB/Category';
import { Applicationcreation } from '../LIB/applicationcreationIA';
describe('TS_001 - connection creation ', () => {
    let sleep = 3000;
    let x= new rexcel();
    
    let Signin = new LoginLocators();
    let Connection = new createconnect();
    let Cat =new category();
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


    it('TC_003:create manage category  ',async () =>{

        Connection.developerscreen.click();
        browser.sleep(5000);
        await Appcreate.application.click();
 browser.sleep(5000);

Cat.managecategor.click();
browser.sleep(5000);
Cat.addbutton.click();
browser.sleep(5000);
Cat.category.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 36, 1));
browser.sleep(5000);
Cat.descrip.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 36, 2));
browser.sleep(5000);
Cat.Save.click();
browser.sleep(5000);


})

it('TC_004: edit the  manage category  ',async () =>{
    Cat.searchcat.click();
    browser.sleep(10000);
    await Cat.searchcate.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 36, 1));
    browser.sleep(5000);
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
           browser.sleep(5000);
   // Cat.selectcat.click();
    browser.sleep(5000);
     Cat.Edit.click();
     Cat.category.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 38, 1));
    browser.sleep(5000);
    Cat.descrip.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 38, 2));
    browser.sleep(5000);
    Cat.update.click();
    browser.sleep(5000);
    


})

    })
})
