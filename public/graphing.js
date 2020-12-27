function temperatureGraph(xArray, yArray) {
  var ctx = document.getElementById('temperatureChart')
  var data = {
    labels: xArray,
    datasets: [
      {
        label: 'Temperature',
        pointBackgroundColor: "#ff2200",
        backgroundColor: "rgba(255, 198, 133, 0.6)",
        borderColor: "#ff6200",
        data: yArray
      }
    ]
  }
  chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 100,
            stepSize: 10
          }
        }],
        xAxes: [{
          type: 'time',
          time: {
            unit: 'minute',
          },
          ticks: {
            min: Date.now() - (86400*1000),
            max: Date.now(),
            maxTicksLimit: xArray.length/15

          }
        }]
      },
      maintainAspectRatio: false,
      responsive: true
    }
  });
  return chart;
}

function humidityGraph(xArray, yArray) {
  var ctx = document.getElementById('humidityChart')
  var data = {
    labels: xArray,
    datasets: [
      {
        label: 'Humidity',
        pointBackgroundColor: "#03a1fc",
        backgroundColor: "rgba(140, 183, 252, 0.5)",
        borderColor: "#49bbfc",
        data: yArray
      }
    ]
  }
  chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 100,
            stepSize: 10
          }
        }],
        xAxes: [{
          type: 'time',
          time: {
            unit: 'minute',
          },
          ticks: {
            min: Date.now() - (86400*1000),
            max: Date.now(),
            maxTicksLimit: xArray.length/15

          }
        }]
      },
      maintainAspectRatio: false,
      responsive: true
    }
  });
  return chart;
}