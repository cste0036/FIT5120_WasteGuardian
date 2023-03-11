// Initialize variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var bin1Score = document.getElementById("bin1-score");
var bin2Score = document.getElementById("bin2-score");
var bin3Score = document.getElementById("bin3-score");
const pickup = document.getElementById("pickup-sound");
const drop = document.getElementById("bin-sound");
//var score = 0;
var rubbishCounter = 0;
var gameEnded = false;

// Define the rubbish objects to be used in the game
var rubbish = [
    { color: "green", x: 40, y: 50, width: 50, height: 50, url: "js/assets/bananaPeel.png" },
    { color: "red", x: 120, y: 100, width: 50, height: 50, url: "js/assets/brokenCup.png" },
    { color: "yellow", x: 200, y: 50, width: 50, height: 50, url: "js/assets/can.png" },
    { color: "yellow", x: 280, y: 100, width: 50, height: 50, url: "js/assets/cardboardBox.png" },
    { color: "red", x: 360, y: 50, width: 50, height: 50, url: "js/assets/dirtyPizzaBox.png" },
    { color: "red", x: 440, y: 100, width: 50, height: 50, url: "js/assets/garbageBag.png" },
    { color: "yellow", x: 520, y: 50, width: 50, height: 50, url: "js/assets/paper.png" },
    { color: "yellow", x: 600, y: 100, width: 50, height: 50, url: "js/assets/plasticBottle.png" },
    { color: "yellow", x: 680, y: 50, width: 50, height: 50, url: "js/assets/plasticJug.png" },
    { color: "red", x: 760, y: 100, width: 50, height: 50, url: "js/assets/sprayCan.png" },
];

var bins = [
    { color: "red", x: 50, y: 250, width: 100, height: 150, score: 0, url: "js/assets/landfill.png" },
    { color: "green", x: 350, y: 250, width: 100, height: 150, score: 0, url: "js/assets/organics.png" },
    { color: "yellow", x: 650, y: 250, width: 100, height: 150, score: 0, url: "js/assets/recycle.png" },
];

// Define arrays to load images for each object
var rubbishImages = [];
var binImages = [];

// Create function to play game sounds
function playPickup() {
    pickup.currentTime = 0;
    pickup.play();
}

// Create function to play game sounds
function playDrop() {
    drop.currentTime = 0;
    drop.play();
}


// Initialize variables to keep track of the currently selected shape
var selectedRubbish = null;
var offsetX = 0;
var offsetY = 0;
var rubbishIndex = -1;

// Create a function to load all sprite images and store them
function loadRubbishImages(array) {
    for (var i = 0; i < array.length; i++) {
        var sprite = new Image();
        sprite.src = array[i].url;
        rubbishImages.push(sprite);
    }
}

// Create a function to load all sprite images and store them
function loadBinImages(array) {
    for (var i = 0; i < array.length; i++) {
        var sprite = new Image();
        sprite.src = array[i].url;
        binImages.push(sprite);
    }
}

// Draw the objects on the canvas
function drawShapes(objects) {
    for (var i = 0; i < objects.length; i++) {
        var shape = objects[i];

        ctx.fillStyle = shape.color;
        ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
    }
}

// Draw the objects on the canvas
function drawSprites(objects, sprite) {
    for (var i = 0; i < objects.length; i++) {
        var shape = objects[i];
        ctx.drawImage(sprite[i], shape.x, shape.y, shape.width, shape.height);
    }
}

// Check if a point is inside a shape
function pointInShape(x, y, object) {
    return (x >= object.x && x <= object.x + object.width &&
        y >= object.y && y <= object.y + object.height);
}


// Check if two shapes are colliding
function shapesColliding(shape1, shape2) {
    return (shape1.x < shape2.x + shape2.width &&
        shape1.x + shape1.width > shape2.x &&
        shape1.y < shape2.y + shape2.height &&
        shape1.y + shape1.height > shape2.y);
}

// Check if the two objects are placed in the correct bin
function checkCorrectBin(waste, bin) {
    // drop the rubbish and compare if it's in the correct bin
    selectedRubbish = null;
    playDrop();
    console.log(waste.color, bin.color);
    if (waste.color == bin.color) {
        rubbishCounter++;
        bin.score++; // Add bin score
        waste.x = 1000;
        waste.y = 1000;
    } else {
        rubbishCounter++;
        waste.x = 1000;
        waste.y = 1000;
    }
}

// Handle mouse down events on the canvas
canvas.addEventListener("mousedown", function(event) {
    // Loop through the rubbish array to see if the mouse down event occurred inside a shape
    for (var i = 0; i < rubbish.length; i++) {
        var chosen = rubbish[i];
        rubbishIndex = i;
        if (pointInShape(event.offsetX, event.offsetY, chosen)) {
            // Set the selected shape and calculate the offset between the mouse position and the shape position
            playPickup();
            selectedRubbish = chosen;
            offsetX = event.offsetX - chosen.x;
            offsetY = event.offsetY - chosen.y;
            break;
        }
    }
});

// Handle mouse up events on the canvas
canvas.addEventListener("mouseup", function(event) {
    // Reset the selected shape
    selectedRubbish = null;
});

// Handle mouse move events on the canvas
canvas.addEventListener("mousemove", function(event) {
    if (selectedRubbish) {
        // Move the selected shape to the mouse position
        selectedRubbish.x = event.offsetX - offsetX;
        selectedRubbish.y = event.offsetY - offsetY;

        // Clear the canvas and redraw the shapes
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});


// Game loop
function gameLoop() {
    // Draw the objects to the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSprites(rubbish, rubbishImages);
    drawSprites(bins, binImages);


    // Check main game condition
    if (!gameEnded) {

        let result = false;
        // Check if a collision is occurring
        for (var i = 0; i < rubbish.length; i++) {

            for (var j = 0; j < bins.length; j++) {
                //console.log(rubbish[i].color, bins[j].color);
                result = shapesColliding(rubbish[i], bins[j]);

                // If a collision has occurred check if correct bin
                if (result == true) {
                    checkCorrectBin(rubbish[i], bins[j]);
                }
            }
        }

        // When the amount of trash sorted reaches limit end game
        if (rubbishCounter >= 10) {
            gameEnded = true;
            console.log("Game Over");

            // Display score
            bin1Score.innerText = "You got " + bins[0].score + " out of 4!";
            bin2Score.innerText = "You got " + bins[1].score + " out of 1!";
            bin3Score.innerText = "You got " + bins[2].score + " out of 5!";
        }

        

        requestAnimationFrame(gameLoop);
    }

}
// Initiate game on load
loadRubbishImages(rubbish);
loadBinImages(bins);
gameLoop();