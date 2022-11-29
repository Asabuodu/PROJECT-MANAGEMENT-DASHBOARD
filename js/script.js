var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Completed',
            'Ongoing',
            'Stalled',
        ],
        datasets: [{
            label: 'My First Dataset ',
            data: [300, 50, 100],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)'
            ],
            hoveroffset: 4
        }]
    },
});