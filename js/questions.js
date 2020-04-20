let items = [
    {
        question: "Question 1",

        // all weights >= 0(default is 1 1 1)

        // multiplier for how much affirmative answer should raise score
        weightAff: 1,
        // multiplier for how much neutral answer should raise score
        weightNeut: 1,
        // multiplier for how much negative answer should raise score
        weightNeg: 1,

        // general question weights (0 if it should not affect, >0 if it should)

        // how much question should affect Libertarian/Authoritarian score
        weightLA: 1,
        // how much question should affect Left/Right score
        weightLR: 1,

        // True: Strongly agree is Auth, Strongly disagree is Libertarian
        reverseLA: false,
        // True: Strongly agree is Right, Strongly disagree is Left
        reverseLR: false
    },
    {
        question: "Question 2",
        weightAff: 1,
        weightNeut: 1,
        weightNeg: 1,
        weightLA: 1,
        weightLR: 1,
        reverseLA: false,
        reverseLR: false
    }
]