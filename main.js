canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height = 90;
var mars_images = ["Mars_Image_1.jpg", "Mars_Image_2.jpg", "Mars_Image_3.jpg", "Mars_Image_4.jpg"];
var random_number = Math.floor(Math.random() *4);
var background_image =  mars_images[random_number];
var roverX = 20;
var roverY = 20;
roverImage = "rover.png";

function add(){
    console.log("I am inside add() function!");
    background_object = new Image();
    background_object.onload = canvas_bg;
    background_object.src = background_image;

    rover_object = new Image();
    rover_object.onload = canvas_rover;
    rover_object.src = roverImage;
}

function canvas_bg(){
    console.log("I am inside canvas_bg() function!");
    ctx.drawImage(background_object, 0, 0, canvas.width, canvas.height);
    
}
function canvas_rover(){
    ctx.drawImage(rover_object, roverX, roverY ,rover_width, rover_height);
}

window.addEventListener("keydown", userKeydown);

function userKeydown(e){
    console.log("I am inside userKeydown() function!");
    if (e.keyCode == "38"){
       Up();
       console.log("User clicked on the \"up\" key");
    }
    else if (e.keyCode == "39"){
     right();
     console.log("User clicked on the \"right\" key");
    }
    else if (e.keyCode == "37"){
        left();
        console.log("User clicked on the \"left\" key");
       }
       else if (e.keyCode == "40"){
        down();
        console.log("User clicked on the \"down\" key");
       }
    
}
function Up(){
 if (roverY >= 0){
     roverY = roverY - 10;
     console.log(roverX + " " + roverY);
     canvas_bg();
     canvas_rover();    
 }
}
function right(){
    if (roverX <= 700){
        roverX = roverX + 10;
        canvas_bg();
        console.log(roverX + " " + roverY);
        canvas_rover();    
    }
}
function left(){
    if (roverX >= 0){
        roverX = roverX - 10;
        canvas_bg();
        console.log(roverX + " " + roverY);
        canvas_rover();    
    }
    
}
function down(){
    if (roverY <= 510){
        roverY = roverY + 10;
        canvas_bg();
        console.log(roverX + " " + roverY);
        canvas_rover();    
    }  
}

