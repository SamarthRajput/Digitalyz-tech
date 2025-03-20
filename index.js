// Converting Excel file data to json file data
const XLSX = require("xlsx");
const fs = require("fs");

// Create an object to store all sheets
const allSheets = {};

// Creating a constant 
// readFile() function takes file name as input
const workbook = XLSX.readFile('./dataset.xlsx');
// using workbook object we will take Sheet1
// Iterating through all sheet names and convert each one to JSON
workbook.SheetNames.forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet);
    allSheets[sheetName] = jsonData;

    // // Convert json to string
    // const jsonString = JSON.stringify(jsonData, null, 2);

    // // The write file takes 2 argument 
    // // 1st the file name where we have to write
    // // 2nd the data that we have to write
    // const filename = `${sheetName.replace(/ /g, "_").toLowerCase()}.json`
    // fs.writeFile(filename, jsonString, (err) => {
    //     console.log(err);
    // });
});

const jsonString = JSON.stringify(allSheets, null, 2);
// write all excel data into a single json file
fs.writeFile('all_sheets.json', jsonString, (err) => {
    console.log(err);
})
