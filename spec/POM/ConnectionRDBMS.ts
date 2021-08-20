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

    it('TC_003: connection creation for IA',async () =>{
        Connection.developerscreen.click();
        browser.sleep(5000);
        Connection.connections.click();
        browser.sleep(5000);
        Connection.addconnection.click();
        browser.sleep(3000);
        
         await Connection.connectiontype.click();
         await Connection.connectionoption2.click();

         browser.sleep(5000);
         await Connection.RDBMStype.click();
         browser.sleep(3000);

        
        //  postgresql connection  details 
        
        //  await Connection.RDBMStype2.click();
        //  Connection.profilename.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 24, 1));
        //  Connection.connectiondescritption.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 24, 2));
        //  browser.sleep(4000);

          //MySQl Connection 
          await Connection.RDBMStype1.click();
         Connection.profilename.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 18, 1));
         Connection.connectiondescritption.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 18, 2));
         browser.sleep(4000);

         await Connection.next.click();
         browser.sleep(4000);
          await Connection.region.click();
          browser.sleep(3000);
          Connection.regtest.click();
          browser.sleep(4000);
//  Same key change the sheet columns for postgresql

          Connection.serverhost.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 20, 1));
          Connection.serverport.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 20, 2));
        
          Connection.username.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 20, 3));
          Connection.password.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 20, 4));
          Connection.dbname.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 20, 5));

        //   Connection.serverhost.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 26, 1));
        //   Connection.serverport.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 26, 2));
        
        //   Connection.username.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 26, 3));
        //   Connection.password.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 26, 4));
        //   Connection.dbname.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 26, 5));
        
         await Connection.Testconnetion.click();
          await Connection.create.click();
          browser.sleep(5000);
          
          await Connection.Searchconnection.sendKeys("MYSQL_PROFILE")


       })
})
