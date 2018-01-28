Chart.defaults.global.defaultFontSize = 16;
//Doughnut Internal
var ctx = document.getElementById("myChart");
var myChart= new Chart(ctx, {
    type: 'doughnut',
    data: {
       datasets: [{
        labels:[],
        data: [4, 20, 26],
        backgroundColor: [
          '#4caf50',
          '#ef5350',
          '#fbb319'
              ]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Demo',
        'Config',
        'Setup'
    ]},
    options: {
              responsive: true,
              maintainAspectRatio: false,
              title: {
                display: true,
                text: 'Internal Development',
                fontSize: 16,
                fontColor: '#006EB6'

              }
          }
});

// Doughnut TA
var ctx = document.getElementById("myChart2");
var myChart2= new Chart(ctx, {
    type: 'doughnut',
    data: {
       datasets: [{
        labels:[],
        data: [40, 5, 5],
        backgroundColor: [
                '#4caf50',
                '#ef5350',
                '#fbb319'
              ]
    }],
   // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Demo',
        'Config/Setup',
        'Develop Stories / PoC'
    ]},
    options: {
              responsive: true,
              maintainAspectRatio: false,
              title: {
                display: true,
                text: 'TechAccelerator',
                fontSize: 16,
                fontColor: '#006EB6'
              }
          }
});
