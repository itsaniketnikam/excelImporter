const db = require("../models");
const ExcelImporter = db.excelImporters;

const readXlsxFile = require("read-excel-file/node");

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path =
      __basedir + "/resources/static/assets/uploads/" + req.file.filename;

    readXlsxFile(path).then((rows) => {
      // skip header
      rows.shift();

      let ExcelImporters = [];

      rows.forEach((row) => {
          if(row[0] && row[1] && row[3] && row[4] && row[5] && row[6]){
            let ExcelImporter = {
                date: row[0],
                employeeId: row[1],
                name: row[2],
                workingType: row[3],
                start:row[4],
                end:row[5],
                storeId:row[6],
                storeName:row[7]
              };
      
               ExcelImporters.push(ExcelImporter);
          }
        
      });
      ExcelImporter.bulkCreate(ExcelImporters)
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
     });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const getEmployees = (req, res) => {
    ExcelImporter.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving.",
        });
      });
  };
  
  module.exports = {
    upload,
    getEmployees,
  };