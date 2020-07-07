/*
Flot: Real-Time
*/
(function() {
  var data = [],
    totalPoints = 300;

  function getRandomData() {

    if (data.length > 0)
      data = data.slice(1);

    // Do a random walk
    while (data.length < totalPoints) {

      var prev = data.length > 0 ? data[data.length - 1] : 50,
        y = prev + Math.random() * 10 - 5;

      if (y < 0) {
        y = 0;
      } else if (y > 100) {
        y = 100;
      }

      data.push(y);
    }

    // Zip the generated y values with the x values
    var res = [];
    for (var i = 0; i < data.length; ++i) {
      res.push([i, data[i]])
    }

    return res;
  }

  var plot = null;
  if($('#flotRealTime').length>0){
    plot = $.plot('#flotRealTime', [getRandomData()], {
      colors: ['#8CC9E8'],
      series: {
        lines: {
          show: true,
          fill: true,
          lineWidth: 1,
          fillColor: {
            colors: [{
              opacity: 0.45
            }, {
              opacity: 0.45
            }]
          }
        },
        points: {
          show: false
        },
        shadowSize: 0
      },
      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        labelMargin: 15,
        backgroundColor: 'transparent'
      },
      yaxis: {
        min: 0,
        max: 100,
        color: 'rgba(0,0,0,0.1)'
      },
      xaxis: {
        show: false
      }
    });
  }

  function update() {

    if(plot){
      plot.setData([getRandomData()]);

      // Since the axes don't change, we don't need to call plot.setupGrid()
      plot.draw();
      setTimeout(update, $( 'html' ).hasClass( 'mobile-device' ) ? 1000 : 30 );
    }

  }

  update();
})();


/*
Flot: Real-Time 2
*/
(function() {
  var data = [],
    totalPoints = 300;

  function getRandomData() {

    if (data.length > 0)
      data = data.slice(1);

    // Do a random walk
    while (data.length < totalPoints) {

      var prev = data.length > 0 ? data[data.length - 1] : 50,
        y = prev + Math.random() * 10 - 5;

      if (y < 0) {
        y = 0;
      } else if (y > 100) {
        y = 100;
      }

      data.push(y);
    }

    // Zip the generated y values with the x values
    var res = [];
    for (var i = 0; i < data.length; ++i) {
      res.push([i, data[i]])
    }

    return res;
  }
  var plot = null;
  if($('#flotRealTime2').length>0){
    plot = $.plot('#flotRealTime2', [getRandomData()], {
    colors: ['#8CC9E8'],
    series: {
      lines: {
        show: true,
        fill: true,
        lineWidth: 1,
        fillColor: {
          colors: [{
            opacity: 0.45
          }, {
            opacity: 0.45
          }]
        }
      },
      points: {
        show: false
      },
      shadowSize: 0
    },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      borderWidth: 1,
      labelMargin: 15,
      backgroundColor: 'transparent'
    },
    yaxis: {
      min: 0,
      max: 100,
      color: 'rgba(0,0,0,0.1)'
    },
    xaxis: {
      show: false
    }
  });
 }
  function update() {
    if(plot){
      plot.setData([getRandomData()]);

      // Since the axes don't change, we don't need to call plot.setupGrid()
      plot.draw();
      setTimeout(update, $( 'html' ).hasClass( 'mobile-device' ) ? 1000 : 30 );
    }

  }

  update();
})();

/*
Morris: Line
*/
/*
Morris.Line({
  resize: true,
  element: 'morrisLine',
  data: morrisLineData,
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['本站发射电平', '本站接收电平'],
  hideHover: true,
  lineColors: ['#0088cc', '#734ba9'],
});*/
