"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXCELutility = void 0;
var exceljs_1 = require("exceljs");
var wb = new exceljs_1.Workbook();
var fs = require('fs');
var path = 'P360_AUTOMATION/testData.xlsx';
var excel = fs.realpathSync(path, { encoding: 'utf8' });
var EXCELutility = /** @class */ (function () {
    function EXCELutility() {
    }
    EXCELutility.prototype.readExcel = function (sheetName, rowNumber, columNumber) {
        // read xlsx file type and return entire function after receiving return
        return wb.xlsx.readFile(excel).then(function () {
            //sheet object
            var sheet = wb.getWorksheet(sheetName);
            //row objct
            var rowObject = sheet.getRow(rowNumber);
            // cell object
            var cellObject = rowObject.getCell(columNumber);
            // get value from cell
            var cellvalue = cellObject.value;
            // return valu from function
            return String(cellvalue);
        });
    };
    return EXCELutility;
}());
exports.EXCELutility = EXCELutility;
