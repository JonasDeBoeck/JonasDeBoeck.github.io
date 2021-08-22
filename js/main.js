const tween = KUTE.fromTo(
    '#blob-1',
    { path: '#blob-1' },
    { path: '#blob-2' },
    { repeat: 999, duration: 3000, yoyo: true }
)

tween.start()

var ctx = document.getElementById('skills-chart').getContext('2d');
var skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            axis: 'y',
            label: 'Skill level',
            data: ['Advanced', 'Intermediate', 'Beginner', 'Advanced', 'Intermediate', 5],
            fill: false,
            backgroundColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 0,
            barPercentage: 0.75,
            categoryPercentage: 1,
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                type: 'category',
                labels: ['HTML&CSS', 'JavaScript', 'Jquery', 'Python', 'Java'],
                beginAtZero: true,
                ticks: {
                    color: "#fff",
                    font: {
                        family: "'Bebas Neue', cursive",
                        size: '20'
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                },
            },

            x: {
                type: 'category',
                labels: ['Basic', 'Beginner', 'Intermediate', 'Advanced', 'Expert'],
                beginAtZero: true,
                ticks: {
                    color: "#fff",
                    font: {
                        family: "'Bebas Neue', cursive",
                        size: '20'
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
})