/*switching the players turn:
1) create cariable
2) create function
3) call function
4) write function
- if it is player2's turn: set the variable to player 1
use if-statement
- sanity check the function!!

5) listen for an event on the column
6) grab column the user clicked on
7) grab children of the column and add the class to the next available space
8) loop through them and see if they are already taken --> if they already have the class on them
9) loop through them in reverse order though because we care about the bottom
10) check all the elements to see if they have class player1 or player 2 on them. If no: add the class.
if yes: go to the next one.
11) how can we change terms when the column is full?
--> -i = -1
12) figure out how to end the game
13) use check for Victory to check for columns
14) use check for Victory to check for rows

function switchPlayer() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
        } else {
            curentPlayer = "player1";
        }
    }

    use ternary operator:
    currentPlayer === 'player1'? 
        currentPlayer = 'player2' :
        currentPlayer = 'player1';

        --> ? if 
        --> : is the else


*/


button: 
OPTION 1:
- when I click the button, loop through all the slots, to see if they have classes. and if so, remove the classes.
reset to player 1

OPTION 2:
location.reload();
--> unload the page & reload the page
method: reload
--> 


diagonal approach:
idea: check the victory-function

to 2 diagonals --> arrays of slots

all we need to do: 
have a function thats finds us the slots that we need to check

-----------------------------------------------------------------
there is a limited number of possible diagonal victories:
- 2, 9, 16, 23
- 8, 15, 22, 29
- 0,7,14,21
- 6,13,20,27
--> there are 24 possible victories

var diags [
[0,7,14,21],
[6,13,20,27],
[12,19,26,33],
[18,25,32,39],

[1,8,15,22],
[7,14,21,28],
[13,20,27,34],
[19,26,33,40],

[2,9,16,23],
[8,15,22,29],
[14,21,28,35],
[20,27,34,41],

[3,8,13,18],
[9,14,19,24],
[15,20,25,30],
[21,26,31,36],

[4,9,14,19],
[10,15,20,25],
[16,21,26,31]
[22,27,32,37],

[5,10,15,20],
[11,16,21,26],
[17,22,27,32],
[23,28,33,38]
]

[

]
24 arrays
loop over the big array
for each of them find the DOM elements --> allSlots
and then check the 
find the total number of victories

-----------------------------------------------------------------
- loop over all the slots
--> check victory fuction call 42 times
--> check one direction
--> up & right for every position on the board

and then go down 

----------------------------------------------------------------
pattern: 
runter: +7
hoch: +5

--> but there is a danger

-----------------------------------------------------
grab the indexes of the rows and columns and pass them into the victory function


figure out the index of the row the user picked on.
pass those 2 number to the checkvictory function

if the user gives 

-------------------------------------------------------------
column-row 

-> do they match?








