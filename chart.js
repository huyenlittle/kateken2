Highcharts.setOptions(
        (Highcharts.theme = {
          colors: ["orange", "red"],
        })
      );
      
      Highcharts.setOptions({
        chart: {
          type: "column",
          backgroundColor: "whitesmoke",
          shadow: true,
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 40,
            depth: 90
          }
        }
      });

      Highcharts.chart("graphic-2", {
        title: {
          text: "Coronavirus Outbreak in the US"
        },
        subtitle: {
          text: "Update: April 20, 2020 from covidtracking.com"
        },

        data: {
          googleSpreadsheetKey: "1IxEQwKS8TapxBA_mkdvJxTUEf1izi47FVO1qh2Ccr3s"
        },
        yAxis: {
          title: {
            text: "Cases"
          }
        },
        tooltip: {
          shared: true
        },
        legend: {
          backgroundColor: "whitesmoke",
          shadow: true
        },
        credits: {
          enabled: false
        },
        noData: {
          style: {
            fontSize: "16px"
          }
        }
      });
      