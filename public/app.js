console.log("This is Working!");


(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) { 
        const covidCols = [
        {
          id: "Date_of_report",
          dataType: tableau.dataTypeEnum.date,
        },
        {
          id: "Municipality_code",
          dataType: tableau.dataTypeEnum.string,
        },
        {
          id: "Municipality_name",
          dataType: tableau.dataTypeEnum.string,
        },
        {
          id: "Province",
          dataType: tableau.dataTypeEnum.string,
        },
        {
          id: "Total_reported",
          dataType: tableau.dataTypeEnum.int,
        },
        {
          id: "Hospital_admission",
          dataType: tableau.dataTypeEnum.int,
        },
        {
          id: "Deceased",
          dataType: tableau.dataTypeEnum.int,
        },
      ];
  
      let covidTableSchema = {
        id: "RIVM",
        alias: "Dutch Corona Cases since start",
        columns: covidCols,
      };

  
      schemaCallback([covidTableSchema]);
    

    };

    myConnector.getData = function (table, doneCallback) {

    };

    tableau.registerConnector(myConnector);
})();

document.querySelector("#getData").addEventListener('click',getData)

function getData() {
    tableau.connectionName = "Dutch Corona Numbers"
    tableau.submi()
}