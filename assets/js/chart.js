var ctx = document.getElementById("myChart");
var myChart= new Chart(ctx, {
    type: 'doughnut',
    data: {
       datasets: [{
        labels:['Setup', 'Config', 'Demo'],
        data: [20, 26, 4],
        backgroundColor: [
                '#ef5350',
                '#fbb319',
                '#4caf50',
              ]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Setup',
        'Config',
        'Demo'
    ]},
    options: {
              responsive: true,
              maintainAspectRatio: false
          }
});
var ctx = document.getElementById("myChart2");
var myChart2= new Chart(ctx, {
    type: 'doughnut',
    data: {
       datasets: [{
        labels:['Setup', 'Config', 'Demo'],
        data: [10, 5, 35],
        backgroundColor: [
                '#ef5350',
                '#fbb319',
                '#4caf50',
              ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Setup',
        'Config',
        'Demo'
    ]},
    options: {
              responsive: true,
              maintainAspectRatio: false
          }
});
