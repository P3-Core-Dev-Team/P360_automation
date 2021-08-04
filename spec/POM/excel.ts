import {Workbook, Row, Cell, Worksheet} from 'exceljs';
const wb:Workbook = new Workbook();


export class rexcel{
 
    public readExcel(excelPath:string,sheetName:string,
        rowNumber:number, columNumber:number){
            // read xlsx file type and return entire function after receiving return
            return wb.xlsx.readFile(excelPath).then(function(){
            //sheet object
            let sheet:Worksheet = wb.getWorksheet(sheetName);
            //row objct
            let rowObject:Row = sheet.getRow(rowNumber);
            // cell object
            let cellObject:Cell = rowObject.getCell(columNumber);
            // get value from cell
            let cellvalue = cellObject.value
            // return valu from function
            return String (cellvalue)
        })
    }
}