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
        document.querySelector(".chart-container").appendChild(document.createElement("canvas"));
        initialize();
    };
    drawGraph(fracLA, fracLR);
    div.append(button);
    LA = LR = totalLA = totalLR = 0;
}