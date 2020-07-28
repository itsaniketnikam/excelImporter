module.exports = (sequelize, Sequelize) => {
    const ExcelImporter = sequelize.define("excelImporter", {
        id:{
            type:Sequelize.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
      date: {
        type: Sequelize.DATE,
        //  allowNull:false
      },
      employeeId: {
        type: Sequelize.INTEGER(7),
        //  allowNull:false
      },
      name:{
          type:Sequelize.STRING
      },
      workingType:{
          type: Sequelize.STRING,
        //   allowNull:false
      },
      start:{
          type:Sequelize.STRING,
        //   allowNull:false
      },
      end:{
          type:Sequelize.STRING,
        //    allowNull:false
      },
      storeId:{
          type:Sequelize.STRING,
        //    allowNull:false
      },
      storeName:{
          type:Sequelize.STRING
      }
    });
  
    return ExcelImporter;
  };