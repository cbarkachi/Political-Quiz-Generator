function displayAnswers() {
    let fracLA = LA / totalLA;
    let fracLR = LR / totalLR;
    if (isNaN(fracLA)) {
        fracLA = 0;
    }
    if (isNaN(fracLR)) {
        fracLR = 0;
    }

    div.innerHTML = "";
    let button = document.createElement("button");
    button.innerHTML = "Retake the quiz";
    button.onclick = () => {
        div.innerHTML = "";
        document.querySelector("canvas").remove();
        let chartContainer = document.querySelector(".chart-container");
        chartContainer.appendChild(document.createElement("canvas"));
        chartContainer.className = "col-12 chart-container d-none"
        initialize();
    };
    drawGraph(fracLA, fracLR);
    div.append(button);
    LA = LR = totalLA = totalLR = 0;
}