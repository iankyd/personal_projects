function CircleApp() {

    // game data
    var circlesData = [{
        id: 1,
        color: 'red',
        size: 20,
        points: -2
    },
    {
        id: 2,
        color: 'violet',
        size: 18,
        points: -1
    }, {
        id: 3,
        color: 'green',
        size: 14,
        points: 3
    }, {
        id: 4,
        color: 'yellow',
        size: 16,
        points: 2
    },
    {
        id: 5,
        color: 'blue',
        size: 18,
        points: 1
    }
    ];

    //variables
    var numberOfCircles = circlesData.length;
    var score = 0;
    var bubbleId = randomize(numberOfCircles);
    var timer = 60;
    var appearanceInterval;

    //random number generators
    function randomize(n) {
        var randomNumber = Math.floor((Math.random() * n) + 1);
        return randomNumber;
    }
    function rangeRandomNumbergenerator(min, max) {
        var random = Math.random();
        var randomNo = Math.floor(random * (+max - +min)) + +min;
        return randomNo;
    }

    //main functions

    function startGame() {
        score = 0;
        getScore();
        addEventListenersToBubbles();
        appearanceInterval = setInterval(loadGame, 1000);
        $(".start-button").hide();
    }

    function loadGame() {
        $('.timer').html('Time Remaining : ' + timer);
        $('.playGround').show();
        timer--;
        bubbleId = randomize(numberOfCircles);
        if (timer < 0) {
            $('.container').hide();
            clearInterval(appearanceInterval);
        }
        $('.playground').css({ "color": "black", "background-color: black": "azure" });
        var x = rangeRandomNumbergenerator(20, 580);
        var y = rangeRandomNumbergenerator(20, 780);
        circlesData.forEach(function (bubble) {
            if (bubbleId == bubble.id) {
                $(".bubbles").css({ "border": "1px solid", "width": bubble.size + "px", "height": bubble.size + "px", "display": "inline-block", "border-radius": "50%", "background-color": bubble.color, "top": x, "left": y });
            }
        })

    }
    //event listener to bubbles
    function addEventListenersToBubbles() {
        $('.bubbles').on('click', function () {
            circlesData.forEach(function (element) {
                if (element.id == bubbleId) {
                    var circlePoints = element.points;
                    score += circlePoints;
                    console.log(score);
                }
            })
            getScore();
        });
    }
    //updates score
    function getScore() {
        $('.scoreboard').html('Score : ' + score);
    }

    return {
        startGame: startGame()
    };
}s
//closure ends here

//activating game on click
function startGameBtn() {
    var gameInstance = CircleApp();
    gameInstance.startGame;
}

// experiments

