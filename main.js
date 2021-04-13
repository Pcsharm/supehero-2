var canvas =new fabric.Canvas('mycanvas');
player_x = 10;
player_y = 10;

princess_image_width = 40;
princess_image_height = 40;

var player_object = "";
var princess_image_object = "";

function player_update() {
    fabric.Image.fromURL("yellow princess.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);

        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        princess_image_object = Img;
        princess_image_object.scaleToWidth(princess_image_width);
        princess_image_object.scaleToHeight(princess_image_height);
        princess_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(princess_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        princess_image_width = princess_image_width + 10;
        princess_image_height = princess_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        princess_image_width = princess_image_width - 10;
        princess_image_height = princess_image_height - 10;
        document.getElementById("current_width").innerHTML = princess_image_width;
        document.getElementById("current_height").innerHTML =princess_image_height;
    }


    if (keyPressed == '38') {
        up();
        console.log("up");


    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");

    }

    if (keyPressed == '18') {
        alt();
        console.log("alt");

    }

    if (keyPressed == '91') {
        ctl();
        console.log("ctl");

    }
    if (keyPressed == '27') {
        esc();
        console.log("esc");

    }

    if (keyPressed == '39')
     {
        right();
        console.log("right");
    }


    if (keyPressed == '69')
    {
        new_image('belle.png');
        console.log("b");
    }
    if (keyPressed == '67') 
    {
        new_image('cinderella.png');
        console.log("c");
    }
    
    if (keyPressed == '68') 
    {
        new_image('disney.png');
        console.log("d");
    }
    if (keyPressed == '72') 
    {
        new_image('hair combing.png');
        console.log("h");
    }
    if (keyPressed == '80') 
    {
        new_image('park.png');
        console.log("p");
    }
    if (keyPressed == '83') 
    {
        new_image('sleeping beauty.png');
        console.log("s");
    }
    if (keyPressed == '76') {
        new_image('lamp.png');
        console.log("l");

    }
    if (keyPressed == '73') {
        new_image('ics.png');
        console.log("i");

    }



}

function up() {
    if (player_y >= 0) {
        player_y = player_y -princess_image_height;
        console.log("princess image height = " + princess_image_height);
        console.log("When Up arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(princess_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("princess image height = " + princess_image_height);
        console.log("When Down arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(princess_object);
        player_update();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x -princess_image_width;
        console.log("princess image width = " + princess_image_width);
        console.log("When Left arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(princess_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + princess_image_width;
        console.log("princess image width = " + princess_image_width);
        console.log("When Right arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.removeprincess_object;
        player_update();
    }
}