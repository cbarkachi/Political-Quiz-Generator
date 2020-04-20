function score(answer, item) {
    if (answer > 2)
        return (answer - 2) * item.weightAff;
    else if (answer == 2)
        return (answer - 2) * item.weightNeut;
    else
        return (answer - 2) * item.weightNeg;
}

function processAnswers() {
    let thisAnswer = -1;
    let totalLAWeight = 0, totalLRWeight = 0;
    for (let i = 0; i < items.length; i++) {
        totalLAWeight += items[i].weightLA;
        totalLRWeight += items[i].weightLR;
    }
    for (let i = 0; i < items.length; i++) {
        try {
            thisAnswer = (document.querySelector("input[name=question" + i + "]:checked")).val;
        }
        catch {
            alert("Unfortunately you have to answer all of these terrible questions :(");
            return;
        }

        console.assert(thisAnswer !== -1);

        let deltaMax = 2 * Math.max(items[i].weightAff, Math.max(items[i].weightNeut, items[i].weightNeg));
        let delta = score(thisAnswer, items[i]);
        let deltaLA = delta, deltaLR = delta;
        if (!items[i].reverseLA) {
            deltaLA *= -1;
        }
        if (!items[i].reverseLR) {
            deltaLR *= -1;
        }
        weightLA = items[i].weightLA;
        weightLR = items[i].weightLR;

        LA += deltaLA * weightLA;
        totalLA += deltaMax * weightLA;
        LR += deltaLR * weightLR;
        totalLR += deltaMax * weightLR;
    }

    displayAnswers();
}