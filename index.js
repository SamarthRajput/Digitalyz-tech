// Converting Excel file data to json file data
const XLSX = require("xlsx");

// Creating a constant 
// readFile() function takes file name as input
const workbook = XLSX.readFile('./dataset.xlsx');
// using workbook object we will take Sheet1
const sheet = workbook.Sheets['Student requests'];

const jsonData = XLSX.utils.sheet_to_json(sheet);

console.log(jsonData);
