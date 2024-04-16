document.addEventListener('DOMContentLoaded', function() {
    fetch('https://data.cityofnewyork.us/resource/8vwk-6iz2.json')
        .then(response => response.json())
        .then(data => {
            const boroughCounts = data.reduce((counts, market) => {
                const borough = market.borough || 'Unknown';
                counts[borough] = (counts[borough] || 0) + 1;
                return counts;
            }, {});

            const boroughInfoDiv = document.getElementById('borough-info');
            boroughInfoDiv.innerHTML = '<canvas id="chart"></canvas>'; // Placeholder for the chart

            const ctx = document.getElementById('chart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(boroughCounts),
                    datasets: [{
                        label: 'Number of Markets',
                        data: Object.values(boroughCounts),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });
});


