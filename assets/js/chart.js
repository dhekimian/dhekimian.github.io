var ctx = document.getElementById("myChart");
var myChart= new Chart(ctx, {
    type: 'doughnut',
    data: {
       datasets: [{
        labels:['Expense', 'Blue', 'Profit'],
        data: [10, 30, 10],
        backgroundColor: [
                '#ef5350',
                '#f44336',
                '#4caf50',
              ]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Salary',
        'Blue',
        'Profit'
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
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]},
    options: {
              responsive: true,
              maintainAspectRatio: false
          }
});
