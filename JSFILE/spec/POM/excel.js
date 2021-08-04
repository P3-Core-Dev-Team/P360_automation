"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rexcel = void 0;
var exceljs_1 = require("exceljs");
var wb = new exceljs_1.Workbook();
var rexcel = /** @class */ (function () {
    function rexcel() {
    }
    rexcel.prototype.readExcel = function (excelPath, sheetName, rowNumber, columNumber) {
        // read xlsx file type and return entire function after receiving return
        return wb.xlsx.readFile(excelPath).then(function () {
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
    return rexcel;
}());
exports.rexcel = rexcel;
