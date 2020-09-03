"use strict";

// Þetta gerir mér kleift að fá random hlut úr öllum arreyum
Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
}
// Function gotten from stack overflow: https://stackoverflow.com/a/6274381/9653075
Object.defineProperty(Array.prototype, 'shuffle', {
    value: function() {
        for (let i = this.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this[i], this[j]] = [this[j], this[i]];
        }
        return this;
    }
});


// Get the elements
const bingo_board = document.getElementById("bingo_board");


// Create the data
const free_spot = "FREEBIE\nWolta makes a bingo board"
let  bingo_board_options = [
    "Someone has to keep the chat PG-16",
    "Someone starts an NSFW conversation",
    "Neonic flirts with someone",
    "*traffic or kid noises*",
    "Someone doesn't answer a question",
    "*keyboard noises*",
    "Someone streams a video game despite the Game Room channels existing",
    "People talking over each other",
    "Cheese is on his phone during work",
    "Nico has his webcam on",
    "Wolta is drinking",
    "Over half the call streams",
    "Someone posts cursed guns",
    "Have you subscribed to The Gaming Exite?",
    "Rookie talks about guns",
    "Awkward silence",
    "*wind noise*",
    "4 talks about water",
    "Someone complains about Unity",
    "Cheese's radio goes off",
    "Someone plays Beat Saber",
    "Someone starts a political topic",
    "Someone changes the topic to anime",
    "Someone stays muted for over 10 minutes"
]
bingo_board_options = bingo_board_options.shuffle();
let extra_bingo_board_counter = 0;


// Create the bingo board elements
for (let i = 0; i < 5; i++) {
    
    let col_node = document.createElement("div");
    col_node.classList.add("bingo_board_col");
    bingo_board.appendChild(col_node);

    for (let i2 = 0; i2 < 5; i2++) {
        let row_node = document.createElement("div");
        row_node.classList.add("bingo_board_element");

        if (i == 2 && i2 == 2) {
            row_node.classList.add("checked_bingo_element");
            row_node.appendChild(document.createTextNode(free_spot));
            extra_bingo_board_counter--;
        }
        else {
            let bingo_board_num = ( (i * 5) + i2 ) + extra_bingo_board_counter;
            row_node.appendChild(document.createTextNode(bingo_board_options[bingo_board_num]));
        }

        col_node.appendChild(row_node);
    }
}


// Create the listener
bingo_board.addEventListener("click", (evt) => {
    console.log(evt);
    if (evt.target.classList.contains("bingo_board_element")) {
        evt.target.classList.toggle("checked_bingo_element");
    }
})
