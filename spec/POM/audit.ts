import { LoginLocators } from '../LIB/Login';
import { browser, logging, ElementFinder } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { rexcel } from '../POM/excel';
import { createconnect} from '../LIB/connectioncreation';
import { connect } from 'http2';
import{category}from '../LIB/Category';
import { Applicationcreation } from '../LIB/applicationcreationIA';
import{audits} from '../LIB/audit';
describe('TS_001 - connection creation ', () => {
    let sleep = 3000;
    let x= new rexcel();
    
    let Signin = new LoginLocators();
    let Connection = new createconnect();
    let Cat =new category();
    let Appcreate= new Applicationcreation();
    let audit=new audits();
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

    it('TC_003:Audit page ',async () =>{

        audit.auditview.click()
        browser.sleep(5000);
       await audit.filter.click();
        audit.applybutton.click();
        browser.sleep(5000);
          audit.export.click();
          browser.sleep(5000);   

          audit.jobname.click();
        audit.jobname.getText().then(function(text) {
            console.log(text);
          browser.sleep(5000);
          
          })


        //   audit.exportbutton.click();
        //   browser.sleep(5000);  
        //   audit.clickok.click();
        //   audit.backgroundjob.click();
        //   browser.sleep(5000);
          
        })
})
