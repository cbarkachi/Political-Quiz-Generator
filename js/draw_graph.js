function drawGraph(fracLA, fracLR) {
    document.querySelector(".chart-container").className = "col-12 chart-container d-block";
    new Chart(document.querySelector("canvas"), {
        type: 'bubble',
        data: {
            labels: "You",
            datasets: [
                {
                    label: ["You"],
                    backgroundColor: "rgba(255,221,50,0.2)",
                    borderColor: "rgba(255,221,50,1)",
                    data: [{
                        x: fracLR,
                        y: fracLA,
                        r: 5
                    }]
                },
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Your political alignment',
                fontSize: 24,
            }, scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: `Libertarian${" ".repeat(39)}Authoritarian`,
                    },
                    ticks: {
                        min: -1.0,
                        max: +1.0
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: `Left${" ".repeat(71)}Right`,
                        min: -1.0,
                        max: +1.0
                    },
                    ticks: {
                        min: -1.0,
                        max: +1.0
                    }
                }]
            },
            aspectRatio: 1,
            legend: {
                display: false
            }
        }
    });
}