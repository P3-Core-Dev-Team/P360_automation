"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Login_1 = require("../LIB/Login");
var protractor_1 = require("protractor");
var ptor_1 = require("protractor/built/ptor");
var excel_1 = require("../POM/excel");
var connectioncreation_1 = require("../LIB/connectioncreation");
var Category_1 = require("../LIB/Category");
var applicationcreationIA_1 = require("../LIB/applicationcreationIA");
describe('TS_001 - connection creation ', function () {
    var sleep = 3000;
    var x = new excel_1.rexcel();
    var Signin = new Login_1.LoginLocators();
    var Connection = new connectioncreation_1.createconnect();
    var Cat = new Category_1.category();
    var Appcreate = new applicationcreationIA_1.Applicationcreation();
    protractor_1.browser.ignoreSynchronization = true;
    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
    it('TC_001: Open P360v2 URL LAUNCH', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            Signin.getUrl();
            protractor_1.browser.driver.manage().window().maximize();
            protractor_1.browser.sleep(6000);
            protractor_1.browser.getCurrentUrl().then(function (url) {
                console.log("Web page url is : " + url);
            });
            protractor_1.browser.getTitle().then(function (title) {
                console.log("Web page title is : " + title);
            });
            return [2 /*return*/];
        });
    }); });
    it('TC_002:enter username and password click signin button ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            Signin.getUsername().sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 3, 1));
            Signin.getPassword().sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 3, 2));
            Signin.getLog().click();
            protractor_1.browser.sleep(5000);
            return [2 /*return*/];
        });
    }); });
    it('TC_003:create manage category  ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Connection.developerscreen.click();
                    protractor_1.browser.sleep(5000);
                    return [4 /*yield*/, Appcreate.application.click()];
                case 1:
                    _a.sent();
                    protractor_1.browser.sleep(5000);
                    Cat.managecategor.click();
                    protractor_1.browser.sleep(5000);
                    Cat.addbutton.click();
                    protractor_1.browser.sleep(5000);
                    Cat.category.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 36, 1));
                    protractor_1.browser.sleep(5000);
                    Cat.descrip.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 36, 2));
                    protractor_1.browser.sleep(5000);
                    Cat.Save.click();
                    protractor_1.browser.sleep(5000);
                    return [2 /*return*/];
            }
        });
    }); });
    it('TC_004: edit the  manage category  ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Cat.searchcat.click();
                    protractor_1.browser.sleep(10000);
                    return [4 /*yield*/, Cat.searchcate.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 36, 1))];
                case 1:
                    _a.sent();
                    protractor_1.browser.sleep(5000);
                    protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.ENTER).perform().then(function () {
                        protractor_1.browser.sleep(5000);
                        // Cat.selectcat.click();
                        protractor_1.browser.sleep(5000);
                        Cat.Edit.click();
                        Cat.category.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 38, 1));
                        protractor_1.browser.sleep(5000);
                        Cat.descrip.sendKeys(x.readExcel("testdata.xlsx", "Sheet1", 38, 2));
                        protractor_1.browser.sleep(5000);
                        Cat.update.click();
                        protractor_1.browser.sleep(5000);
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
