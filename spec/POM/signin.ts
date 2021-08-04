import { LoginLocators } from '../LIB/Login';
import { browser, logging, ElementFinder } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { rexcel } from '../POM/excel';

    
    describe('TS_001Sign-in', () => {
        let sleep = 3000;
        let x= new rexcel();
        
        let Signin = new LoginLocators();
      
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
    })
    
    

