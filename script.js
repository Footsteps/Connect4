console.log("I am here for you", $);

(function () {
    var currentPlayer = "player1";
    $(".modal").hide();

    $(".column").on("click", function (e) {
        var col = $(e.currentTarget);

        var slotsInCol = col.children();

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            //check if the slot has a class already
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                //add class if none of the slots
                slotsInCol.eq(i).addClass(currentPlayer);

                break;
            }
        }
        if (i === -1) {
            return;
        }
        var slotsInRow = $(".row" + i);

        var allSlots = $(".slot");

        if (checkForVictory(slotsInCol)) {
            popUp();
            console.log("victory for ", currentPlayer);
        } else if (checkForVictory(slotsInRow)) {
            popUp();
            console.log("there was a row victory! for ", currentPlayer);
        } else if (checkForDiagonalVictories() == true) {
            popUp();
            console.log("there was a diagonal victory!");
        } else {
            switchPlayer();
        }
    });

    /*logic: look for 4 slots in one row or col
    idea: give it a row or a column as arg, loop over the column or row by using a counter
    check if four have player1 or player2-class in a row*/

    function checkForVictory(slots) {
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            var slot = $(slots[i]);

            if (slot.hasClass(currentPlayer)) {
                count++;

                if (count === 4) {
                    return true;
                }
            } else {
                //it found the other player so we reset back to 0
                count = 0;
            }
        }
    }

    function checkForDiagonalVictories() {
        var diags = [
            [0, 7, 14, 21],
            [6, 13, 20, 27],
            [12, 19, 26, 33],
            [18, 25, 32, 39],

            [1, 8, 15, 22],
            [7, 14, 21, 28],
            [13, 20, 27, 34],
            [19, 26, 33, 40],

            [2, 9, 16, 23],
            [8, 15, 22, 29],
            [14, 21, 28, 35],
            [20, 27, 34, 41],

            [3, 8, 13, 18],
            [9, 14, 19, 24],
            [15, 20, 25, 30],
            [21, 26, 31, 36],

            [4, 9, 14, 19],
            [10, 15, 20, 25],
            [16, 21, 26, 31],
            [22, 27, 32, 37],

            [5, 10, 15, 20],
            [11, 16, 21, 26],
            [17, 22, 27, 32],
            [23, 28, 33, 38],
        ];

        var allSlots = $(".slot");

        var count;
        for (var i = 0; i < diags.length; i++) {
            count = 0;
            for (var j = 0; j < diags[i].length; j++) {
                if (allSlots.eq(diags[i][j]).hasClass(currentPlayer)) {
                    count++;

                    if (count === 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }
    }

    function switchPlayer() {
        currentPlayer === "player1"
            ? (currentPlayer = "player2")
            : (currentPlayer = "player1");
    }

    function popUp() {
        var allSlots = $(".slot");
        confetti();
        startAnimation();
        var input = $(".winner");
        var resultsHtml = currentPlayer + " wins this one :) ";
        input.html(resultsHtml);
        $(".reset").on("click", function () {
            for (var i = 0; i < allSlots.length; i++) {
                allSlots.eq(i).removeClass("player1").removeClass("player2");
            }
            endAnimation();
        });
    }

    function startAnimation() {
        confetti();
        var div = $("#myAnimation");
        div.css("visibility", "visible");
        div.animate({ height: 200 }, "slow");
        div.animate({ width: 400 }, "slow");

        div.css("background-color", "blue");
    }

    function endAnimation() {
        var div = $("#myAnimation");
        div.css("visibility", "hidden");
        div.animate({ height: 200 }, "slow");
        div.animate({ width: 400 }, "slow");

        div.css("background-color", "blue");
    }

    function confetti() {
        $(".cursor").confettiButton();
        $(document).mousemove(function (e) {
            $(".cursor").css({ left: e.pageX, top: e.pageY, zIndex: 0 });
        });
    }
})();
