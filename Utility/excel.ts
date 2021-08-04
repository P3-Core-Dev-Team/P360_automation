import {Workbook, Row, Cell, Worksheet} from 'exceljs';
const wb:Workbook = new Workbook();
const fs = require('fs');
const path = 'P360_AUTOMATION/testData.xlsx';
const excel = fs.realpathSync(path,{encoding:'utf8'});
export class EXCELutility{

    public readExcel(sheetName:string, rowNumber:number, columNumber:number){
            // read xlsx file type and return entire function after receiving return
            return wb.xlsx.readFile(excel).then(function(){
            //sheet object
            let sheet:Worksheet = wb.getWorksheet(sheetName);
            //row objct
            let rowObject:Row = sheet.getRow(rowNumber);
            // cell object
            let cellObject:Cell = rowObject.getCell(columNumber);
            // get value from cell
            let cellvalue = cellObject.value
            // return valu from function
            return String(cellvalue)
        })
    }
}
