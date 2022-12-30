anychart.onDocumentReady(function () {
  
    // add data
    var data = [
      ["8:00", 0],
      ["12:00", 4],
      ["16:00", 10],
      ["20:00", 9],
      ["24:00", -2]
    ];

    // create a data set
    var dataSet = anychart.data.set(data);

    // map the data for all series
    var tempData = dataSet.mapAs({x: 0, value: 1});

    // create a line chart
    var chart = anychart.line();

    anychart.color("red");
    // create the series and name them
    var temp = chart.line(tempData);
    temp.name("Temperature");

    // add a legend
    chart.legend().enabled(true);

    // add a title
    chart.title("Forecast for Today");

    // specify where to display the chart
    chart.container("chart");

    // draw the resulting chart
    chart.draw();

  });