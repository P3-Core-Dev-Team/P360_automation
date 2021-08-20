import { LoginLocators } from '../LIB/Login';
import { browser, logging, ElementFinder } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { rexcel } from '../POM/excel';
import { createconnect} from '../LIB/connectioncreation';
import { connect } from 'http2';

describe('TS_001 - connection creation ', () => {
    let sleep = 3000;
    let x= new rexcel();
    
    let Signin = new LoginLocators();
    let Connection = new createconnect();
  
  browser.ignoreSynchronization=true;

  beforeEach(function ()  {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  });

//    it('TC_001: Open P360v2 URL LAUNCH', async () => {
//     Signin.getUrl();
//     browser.driver.manage().window().maximize();
//     browser.sleep(6000);
//     browser.getCurrentUrl().then(function (url) {
//         console.log("Web page url is : " + url)
//     })
//     browser.getTitle().then(function (title) {
//         console.log("Web page title is : " + title)
//     })
// })
    
//   it('TC_002:enter username and password click signin button ',async () =>{
//     Signin.getUsername().sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 3, 1));
//     Signin.getPassword().sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 3, 2));
//     Signin.getLog().click();
//     browser.sleep(5000);
           
//     })

    it('TC_003: connection creation for IA',async () =>{
        Connection.developerscreen.click();
        browser.sleep(5000);
        Connection.connections.click();
        browser.sleep(5000);
        Connection.addconnection.click();
        browser.sleep(3000);
        
         await Connection.connectiontype.click();
         await Connection.connectionoption1.click();
         
         Connection.profilename.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 7, 1));
         Connection.connectiondescritption.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 7, 2));
         browser.sleep(4000);

         await Connection.next.click();
         browser.sleep(4000);
          await Connection.region.click();
          browser.sleep(3000);
          Connection.regtest.click();
          browser.sleep(4000);
Connection.protocol.click();
browser.sleep(10000);
          await Connection.http.click();
          browser.sleep(4000);
          Connection.serverhost.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 9, 1));
          Connection.serverport.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 9, 2));
          Connection.restserverhost.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 9, 3));
          Connection.restapi.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 9, 4));
          Connection.username.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 9, 5));
          Connection.password.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 9, 6));
          Connection.clientid.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 9, 7));
          Connection.clientscret.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 9, 8));
         await Connection.Testconnetion.click();
          await Connection.create.click();
          browser.sleep(5000);
          


       })
})
