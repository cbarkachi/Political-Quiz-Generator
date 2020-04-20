let div = document.querySelector("#pol-quiz");
let LA = LR = totalLA = totalLR = 0;
let answers = ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"];

function initialize() {
    for (i = 0; i < items.length; i++) {
        item = items[i];
        let p = document.createElement("p");
        p.for = i;
        p.innerHTML = i + 1 + ". " + item.question;
        p.style.fontWeight = "700";
        div.appendChild(p);

        for (let j = 0; j < 5; j++) {
            let button = document.createElement("input");
            button.name = "question" + i;
            button.type = "radio";
            button.val = j;
            let labelAnswer = document.createElement("label");
            labelAnswer.for = button.name;
            labelAnswer.className = "ml-2";
            labelAnswer.onclick = () => {
                button.checked = true;
            };
            labelAnswer.innerHTML = answers[j];

            let group = document.createElement("div");
            group.appendChild(button);
            group.appendChild(labelAnswer);

            div.appendChild(group);
        }
        div.appendChild(document.createElement("br"));
    }
    let submit = document.createElement("button");
    submit.innerHTML = "Submit answers";
    submit.onclick = processAnswers;
    div.appendChild(submit);
}
function score(answer, item) {
    if (answer > 2)
        return (answer - 2) * item.weightAff;
    else if (answer == 2)
        return (answer - 2) * item.weightNeut;
    else
        return (answer - 2) * item.weightNeg;
}

initialize();